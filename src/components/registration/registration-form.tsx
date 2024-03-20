import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import "./registration-form.css"
import {useNavigate} from "react-router-dom";

interface IRegistrationValues {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm<IRegistrationValues>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IRegistrationValues> = (data) => {
        console.log(data);
    };

    const password = React.useRef({});
    const email = React.useRef({})
    password.current = watch("password", "");
    email.current = watch("email", "")

    function handleLoginClick() {
        navigate("/")
    }

    return (
        <div className="registration-form__container">
            <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="registration-form__input"
                    type="tel"
                    placeholder="введіть телефон"
                    {...register("phoneNumber", {
                        required: true,
                        pattern: {
                            value: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
                            message: "Номер телефону має бути у вигляді +380630002200 цифр",
                        },
                    })}
                />
                {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
                    <p className="registration-form__error">{errors.phoneNumber.message}</p>
                )}

                <input className="registration-form__input" type="text"
                       placeholder="введіть ім'я" {...register("firstName", {required: true})} />
                <input className="registration-form__input" type="text"
                       placeholder="введіть прізвище" {...register("lastName", {required: true})} />
                <input className="registration-form__input" type="email"
                       placeholder="введіть email" {...register("email", {
                    required: true, minLength: 5,

                    pattern: {
                        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                        message: "email не валідний"
                    },
                })}/>
                {errors.email && errors.email.type === 'pattern' && (
                    <p className="registration-form__error">{errors.email.message}</p>
                )}
                {errors.email && errors.email.type === "minLength" && (
                    <p className="registration-form__error">Довжина email має бути більша за 5 символів</p>
                )}
                <input
                    className="registration-form__input"
                    type="password"
                    placeholder="введіть пароль"
                    {...register("password", {
                        required: true,
                        minLength: 6,
                    })}
                />
                {errors.password && errors.password.type === "minLength" && (
                    <p className="registration-form__error">Пароль повинен містити принаймні 6 символів</p>
                )}
                <input
                    className="registration-form__input"
                    type="password"
                    placeholder="підтвердіть пароль"
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value) => value === password.current || "Паролі не співпадають",
                    })}
                />
                {errors.confirmPassword && <p className="registration-form__error">{errors.confirmPassword.message}</p>}
                <button className="registration-form__button" type="submit">Зареєструватись</button>
                <a className="registration-form__href__login" onClick={handleLoginClick}>
                    <img className="registration-form__image" src="/public/icons8-person-24(1).png" alt="Login"/>
                    Вже маєш аккаунт?
                </a>
            </form>
        </div>
    );
};

export default RegistrationForm;
