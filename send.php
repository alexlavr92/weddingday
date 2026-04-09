<?php
header("Content-Type: application/json; charset=utf-8");

// Разрешаем только POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["ok" => false, "error" => "Invalid request"]);
    exit;
}

// Получаем JSON
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(["ok" => false, "error" => "Invalid JSON"]);
    exit;
}

// HONEYPOT — если поле заполнено, делаем вид, что всё ок
if (!empty($data["botField"])) {
    echo json_encode(["ok" => true]);
    exit;
}

// Маппинг значений → человекочитаемые тексты
$map = [
    "come" => [
        "yes" => "Да, буду с радостью",
        "no"  => "К сожалению, не смогу"
    ],
    "together" => [
        "yes" => "Да",
        "no"  => "Нет, Один (Одна)"
    ],
    "dresscode" => [
        "yes" => "Конечно",
        "no"  => "Нужна помощь"
    ],
    "food" => [
        "no" => "Нет",
        "vegetable" => "Вегетарианское меню",
        "not-fish" => "Не ем рыбу",
        "allergy" => "Есть аллергии"
    ],
    "drinks" => [
        "wine" => "Вино",
        "sparkling" => "Игристое",
        "strong" => "Крепкий алкоголь",
        "no-alcohol" => "Без алкоголя"
    ]
];

// Преобразуем значения
$come = $map["come"][$data["come"]] ?? $data["come"];
$together = $map["together"][$data["together"]] ?? $data["together"];
$dresscode = $map["dresscode"][$data["dresscode"]] ?? $data["dresscode"];

$food = array_map(fn($v) => $map["food"][$v] ?? $v, $data["food"] ?? []);
$drinks = array_map(fn($v) => $map["drinks"][$v] ?? $v, $data["drinks"] ?? []);

// Подключаем PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/phpmailer/src/PHPMailer.php";
require __DIR__ . "/phpmailer/src/SMTP.php";
require __DIR__ . "/phpmailer/src/Exception.php";

$mail = new PHPMailer(true);

try {
    // Настройки SMTP
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "your_email@gmail.com";
    $mail->Password = "your_app_password";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    // От кого
    $mail->setFrom("your_email@gmail.com", "Wedding Form");

    // Кому
    $mail->addAddress("gruzdi26@mail.ru");

    // Тема
    $mail->Subject = "Новая анкета со свадьбы";

    // HTML письмо
    $body = "
        <h2>Новая анкета</h2>

        <p><b>ФИО:</b> {$data['fio']}</p>
        <p><b>Придёт:</b> {$come}</p>
        <p><b>С парой:</b> {$together}</p>
        <p><b>ФИО пары:</b> " . (!empty($data['partnerFio']) ? $data['partnerFio'] : "-") . "</p>

        <p><b>Дресс-код:</b> {$dresscode}</p>

        <p><b>Еда:</b> " . (count($food) ? implode(", ", $food) : "-") . "</p>

        <p><b>Аллергии:</b> " . (!empty($data['allergyText']) ? $data['allergyText'] : "-") . "</p>

        <p><b>Напитки:</b> " . (count($drinks) ? implode(", ", $drinks) : "-") . "</p>
    ";

    $mail->isHTML(true);
    $mail->Body = $body;

    // Отправка
    $mail->send();

    echo json_encode(["ok" => true]);
} catch (Exception $e) {
    echo json_encode(["ok" => false, "error" => $mail->ErrorInfo]);
}
