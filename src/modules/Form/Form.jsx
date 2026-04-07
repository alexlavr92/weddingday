import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Container from "../../components/layout/Container/Container";
import InputField from "./InputField/InputField";
import Radio from "./RadioField/RadioField";
import Checkbox from "./CheckBoxField/CheckBoxField";
import TextAreaField from "./TextAreaField/TextAreaField";

import styles from "./Form.module.scss";
import bgStar from "../../assets/images/anket/star-bottom.png";
import bird from "../../assets/images/anket/bird.png";

export default function Form() {
    const [showModal, setShowModal] = useState(false);
    const [isSending, setIsSending] = useState(false);

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
        setShowModal(true);
        reset();
        // try {
        //     setIsSending(true);

        //     const res = await fetch("/send.php", {
        //         method: "POST",
        //         body: JSON.stringify(data)
        //     });

        //     const json = await res.json();

        //     if (!json.ok) throw new Error(json.error);

        //     setShowModal(true);
        //     reset();
        // } catch (e) {
        //     console.error("Ошибка отправки:", e);
        // } finally {
        //     setIsSending(false);
        // }
    };


    return (
        <section className="relative py-[6.5rem] mx-auto">
            {/* Декор */}
            <img src={bgStar} alt="" className="absolute -top-[20rem] left-0 w-[25%] -z-[1]" />
            <img src={bird} alt="" className="absolute left-[1rem] -top-[13rem] w-[28%]" />

            <Container className="flex justify-center reveal">
                <form
                    id="form-default"
                    onSubmit={handleSubmit(onSubmit)}
                    className={`
            ${styles.form}
            relative mx-auto min-w-[1160px]
            rounded-[20px] px-[5rem] pt-[10rem] pb-[3rem]
            border border-third-yellow
          `}
                >
                    {/* Заголовок */}
                    <div className="uppercase text-center text-[2.5rem] tracking-tight absolute left-1/2 -translate-x-1/2 -top-[10px]">
                        <span className="font-second leading-[.5] text-[9rem] text-main-yellow mr-[10px]">А</span>
                        <span className="gradient-default title_gradient">нкета</span><br />
                        <span className="gradient-default title_gradient">для присутствующих</span>
                    </div>

                    <div className={`${styles.form_fields} flex justify-between items-start`}>
                        {/* Левая колонка */}
                        <div className="flex flex-col gap-y-[40px] items-start">
                            {/* ФИО */}
                            <InputField
                                label="Фамилия Имя Отчество"
                                id="fio"
                                placeholder="Напишите ваши ФИО"
                                wrapperClass="w-[400px]"
                                error={errors.fio?.message}
                                {...register("fio", {
                                    required: "Заполните обязательное поле"
                                })}
                            />

                            {/* Придёте? */}
                            <div className="w-[400px]">
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
                            <div className="w-[400px]">
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
                                            id="partnerFio"
                                            placeholder="Начните вводить"
                                            wrapperClass="w-[400px]"
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
                            <div className="w-[400px]">
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
                        <div className="flex flex-col gap-y-[40px] items-start">
                            {/* Еда */}
                            <div className="w-[400px]">
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
                                            wrapperClass="w-[400px]"
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
                            <div className="w-[400px]">
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

                    {/* Кнопка */}
                    <button
                        type="submit"
                        disabled={isSending}
                        className={`
              mt-[50px] block mx-auto btn gradient-default btnShine w-[460px]
              transition-transform duration-300 hover:scale-[1.02]
              ${isSending ? "opacity-60 cursor-not-allowed" : ""}
            `}
                    >
                        {isSending ? "Отправка..." : "Отправить ответы"}
                    </button>

                    <p className="text-center text-[1rem] mt-[30px] w-[460px] mx-auto leading-[1.2]">
                        По всем вопросам можете обращаться к организаторам<br />
                        Пожалуйста, подтвердите присутствие до 1 июня 2026
                    </p>
                </form>
            </Container>

            {/* Модалка */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] animate-fadeIn"
                    onClick={() => setShowModal(false)} // ← клик по overlay
                >
                    <div
                        className="bg-[#111] text-white rounded-2xl px-10 py-8 w-[420px] text-center shadow-2xl animate-scaleIn border border-third-yellow"
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

