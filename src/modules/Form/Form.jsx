import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import Container from "../../components/layout/Container/Container";
import InputField from "./InputField/InputField";
import Radio from "./RadioField/RadioField";
import Checkbox from "./CheckBoxField/CheckBoxField";
import TextAreaField from "./TextAreaField/TextAreaField";

import styles from "./Form.module.scss";
import bgStar from "../../assets/images/anket/star-bottom.png";
import bird from "../../assets/images/anket/bird.png";
import a from "../../assets/images/form/a.svg";

export default function Form() {
    const [showModal, setShowModal] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const startTime = useRef(Date.now());


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            fio: "",
            come: "",
            together: "",
            partnerFio: "",
            dresscode: "",
            food: [],
            drinks: [],
            allergyText: ""
        }
    });

    const food = watch("food");
    const together = watch("together");

    const hasAllergy = food?.includes("allergy");
    const hasTogether = together === "yes";

    useEffect(() => {
        if (showModal) {
            // Отключаем скролл
            document.body.style.overflow = "hidden";
        } else {
            // Возвращаем скролл
            document.body.style.overflow = "";
        }

        // На случай размонтирования
        return () => {
            document.body.style.overflow = "";
        };
    }, [showModal]);

    const onSubmit = async (data) => {
        // setShowModal(true);
        // console.log("DATA:", data);              // объект
        // console.log("JSON:", JSON.stringify(data)); // строка JSON
        // reset();
        // HONEYPOT
        if (data.botField) {
            console.warn("BOT DETECTED (honeypot)");
            return;
        }
        // TIMER
        const timeSpent = Date.now() - startTime.current;
        if (timeSpent < 1500) {
            console.warn("BOT DETECTED (too fast)");
            return;
        }

        try {
            setIsSending(true);

            const res = await fetch("/send.php", {
                method: "POST",
                body: JSON.stringify(data)
            });

            const json = await res.json();

            if (!json.ok) throw new Error(json.error);

            setShowModal(true);
            reset();
        } catch (e) {
            console.error("Ошибка отправки:", e);
        } finally {
            setIsSending(false);
        }
    };


    return (
        <section className="relative pt-[6.5rem] pb-[50px] md:py-[6.5rem] mx-auto">
            {/* Декор */}
            <img src={bgStar} alt="" className="absolute -top-[40vw] md:-top-[20vw] w-[70%] md:w-[30%] xl:-top-[20rem] left-0 xl:w-[25%] -z-[1]" />
            <img src={bird} alt="" className="absolute -left-[2rem] md:left-[1rem] -top-[25vw] md:-top-[10vw] w-[70%] md:w-[30%] xl:-top-[13rem] xl:w-[28%]" />

            <Container className="flex justify-center reveal">
                <form
                    id="form-default"
                    onSubmit={handleSubmit(onSubmit)}
                    className={`
            ${styles.form}
            relative mx-auto xl:min-w-[1160px]
            rounded-[20px] px-[10px] pt-[90px] pb-[40px] md:px-[5rem] md:pt-[9rem] xl:pt-[10rem] md:pb-[3rem]
            border border-third-yellow md:w-full xl:w-auto
          `}
                >
                    {/* Заголовок */}
                    <div className="uppercase text-nowrap text-center text-[1.2rem] md:text-[2rem] xl:text-[3rem] tracking-tight absolute left-1/2 -translate-x-1/2 -top-[7px] md:-top-[10px]">
                        <div className="flex items-end justify-center">
                            <img src={a} className="xl:mb-[10px] max-w-[18vw] md:max-w-[12vw] mb-[7px] md:mb-[10px]" alt="" />
                            <span className="gradient-default title_gradient xl:right-[1.5rem] right-[4vw] md:right-[2vw] relative">нкета</span></div>
                        <span className="gradient-default title_gradient">для присутствующих</span>

                    </div>

                    <div className={`${styles.form_fields} flex xl:flex-row flex-col gap-[40px] xl:gap-0 justify-between items-start`}>
                        {/* Левая колонка */}
                        <div className="flex flex-col w-full xl:w-auto gap-y-[40px] items-start">
                            {/* ФИО */}
                            <InputField
                                label="Фамилия Имя Отчество"
                                id="fio"
                                placeholder="Напишите ваши ФИО"
                                wrapperClass="xl:w-[400px] w-full"
                                error={errors.fio?.message}
                                {...register("fio", {
                                    required: "Заполните обязательное поле"
                                })}
                            />

                            {/* Придёте? */}
                            <div className="xl:w-[400px] w-full">
                                <p className="text-[1.15rem] mb-[20px]">Сможете прийти на нашу свадьбу?</p>
                                <div className={`flex flex-col gap-[10px] ${errors.come ? "error-group" : ""}`}>
                                    <Radio
                                        label="Да, буду с радостью"
                                        name="come"
                                        value="yes"
                                        error={errors.come}
                                        {...register("come", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    <Radio
                                        label="К сожалению, не смогу"
                                        name="come"
                                        value="no"
                                        error={errors.come}
                                        {...register("come", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    {errors.come && (
                                        <p className="error-message">{errors.come.message}</p>
                                    )}
                                </div>

                            </div>

                            {/* Пара */}
                            <div className="xl:w-[400px] w-full">
                                <p className="text-[1.15rem] mb-[20px]">Будете ли вы с парой? Если да, введите ФИО</p>
                                <div className={`flex flex-col gap-[10px] ${errors.together ? "error-group" : ""}`}>
                                    <Radio
                                        label="Нет, Один (Одна)"
                                        name="together"
                                        value="no"
                                        error={errors.together}
                                        {...register("together", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    <Radio
                                        label="Да"
                                        name="together"
                                        value="yes"
                                        error={errors.together}
                                        {...register("together", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    {errors.together && (
                                        <p className="error-message">{errors.together.message}</p>
                                    )}
                                </div>
                                {hasTogether && (
                                    <div className="mt-[20px] animate-fadeIn">
                                        <InputField
                                            label="ФИО вашей пары"
                                            id="partnerFio"
                                            placeholder="Напишите ФИО"
                                            wrapperClass="xl:w-[400px] w-full"
                                            error={errors.partnerFio?.message}
                                            {...register("partnerFio", {
                                                validate: (v) =>
                                                    hasTogether
                                                        ? v.trim().length > 0 || "Заполните обязательное поле"
                                                        : true
                                            })}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Дресс-код */}
                            <div className="xl:w-[400px] w-full">
                                <p className="text-[1.15rem] mb-[20px]">Вы поддержите наш дресс-код Total black?</p>
                                <div className={`flex flex-col gap-[10px] ${errors.dresscode ? "error-group" : ""}`}>
                                    <Radio
                                        label="Конечно"
                                        name="dresscode"
                                        value="yes"
                                        error={errors.dresscode}
                                        {...register("dresscode", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    <Radio
                                        label="Нужна помощь"
                                        name="dresscode"
                                        value="no"
                                        error={errors.dresscode}
                                        {...register("dresscode", {
                                            required: "Выберите один из вариантов"
                                        })}
                                    />
                                    {errors.dresscode && (
                                        <p className="error-message">{errors.dresscode.message}</p>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Правая колонка */}
                        <div className="flex flex-col gap-y-[40px] items-start w-full xl:w-auto">
                            {/* Еда */}
                            <div className="xl:w-[400px] w-full">
                                <p className="text-[1.15rem] mb-[20px]">Предпочтения по еде</p>
                                <div className={`flex flex-col gap-[10px] ${errors.food ? "error-group" : ""}`}>
                                    <Checkbox
                                        label="Нет"
                                        value="no"
                                        error={errors.food}
                                        {...register("food", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Вегетарианское меню"
                                        value="vegetable"
                                        error={errors.food}
                                        {...register("food", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Не ем рыбу"
                                        value="not-fish"
                                        error={errors.food}
                                        {...register("food", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Есть аллергии"
                                        value="allergy"
                                        error={errors.food}
                                        {...register("food", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    {errors.food && (
                                        <p className="error-message">{errors.food.message}</p>
                                    )}
                                </div>

                                {hasAllergy && (
                                    <div className="mt-4 animate-fadeIn">
                                        <TextAreaField
                                            id="allergyText"
                                            placeholder="Укажите на что у вас аллергия"
                                            wrapperClass="xl:w-[400px] w-full"
                                            error={errors.allergyText?.message}
                                            {...register("allergyText", {
                                                validate: (v) =>
                                                    hasAllergy
                                                        ? v.trim().length > 0 ||
                                                        "Укажите, на что у вас аллергия"
                                                        : true
                                            })}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Напитки */}
                            <div className="xl:w-[400px] w-full">
                                <p className="text-[1.15rem] mb-[20px]">Предпочтения по напиткам</p>
                                <div className={`flex flex-col gap-[10px] ${errors.drinks ? "error-group" : ""}`}>
                                    <Checkbox
                                        label="Вино"
                                        value="wine"
                                        error={errors.drinks}
                                        {...register("drinks", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Игристое"
                                        value="sparkling"
                                        error={errors.drinks}
                                        {...register("drinks", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Крепкий алкоголь"
                                        value="strong"
                                        error={errors.drinks}
                                        {...register("drinks", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    <Checkbox
                                        label="Без алкоголя"
                                        value="no-alcohol"
                                        error={errors.drinks}
                                        {...register("drinks", {
                                            validate: (v) =>
                                                v?.length > 0 || "Выберите хотя бы один вариант"
                                        })}
                                    />
                                    {errors.drinks && (
                                        <p className="error-message">{errors.drinks.message}</p>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* HONEYPOT — вставить СЮДА */}
                    <div style={{ display: "none" }}>
                        <input
                            type="text"
                            autoComplete="off"
                            tabIndex="-1"
                            {...register("botField")}
                        />
                    </div>
                    {/* Кнопка */}
                    <button
                        type="submit"
                        disabled={isSending}
                        className={`
              mt-[50px] block mx-auto btn gradient-default btnShine w-full md:w-[460px]
              transition-transform duration-300 hover:scale-[1.02]
              ${isSending ? "opacity-60 cursor-not-allowed" : ""}
            `}
                    >
                        {isSending ? "Отправка..." : "Отправить ответы"}
                    </button>

                    <p className="text-center text-[1rem] mt-[30px] md:w-[460px] mx-auto leading-[1.2]">
                        По всем вопросам можете обращаться к организаторам.<br className="hidden md:block"></br> Пожалуйста, подтвердите присутствие до 1 июня 2026
                    </p>
                </form>
            </Container>

            {/* Модалка */}
            {showModal && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen
        bg-black/60 flex items-center justify-center
        z-[2000] animate-fadeIn"
                    onClick={() => setShowModal(false)} // ← клик по overlay
                >
                    <div
                        className="bg-[#111] text-white rounded-2xl px-10 py-8 w-[90%] md:w-[420px] text-center shadow-2xl animate-scaleIn border border-third-yellow"
                        onClick={(e) => e.stopPropagation()} // ← блокируем закрытие при клике по окну
                    >
                        <h2 className="text-2xl mb-4">Спасибо за ваши ответы!</h2>
                        <p className="mb-6 text-[1.05rem]">
                            Форма успешно отправлена.
                        </p>

                        <button
                            className="btn gradient-default btnShine w-full"
                            onClick={() => setShowModal(false)}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>

            )}
        </section>
    );
}

