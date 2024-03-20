import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import "./auth-form.css"
import {useNavigate} from "react-router-dom";

interface AuthFormValues {
    email: string,
    password: string
}

const AuthForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<AuthFormValues>();

    const navigate = useNavigate()
    const submit: SubmitHandler<AuthFormValues> = data => {
        console.log(data);
    }

    const isValidPassword = (data: string) => {
        const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return regularExpression.test(data);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        isValidPassword(password);
    }

    function handleLoginClick() {
        navigate("/registration")
    }

    return (
        <div className="auth-form__container">
            <form onSubmit={handleSubmit(submit)} className="auth-form">
                <input type="email" className="auth-form__email"
                       placeholder="введіть email"
                       {...register('email', {required: true})}/>
                <input
                    type="password"
                    {...register('password', {
                        required: true,
                        validate: {isValid: isValidPassword}
                    })}
                    className="auth-form__password"
                    placeholder="введіть пароль"
                    onChange={handlePasswordChange}
                />
                {errors.password && errors.password.type === "isValid" && (
                    <p className="auth-form__error">Password must be 6-16 characters long and can contain letters,
                        numbers, and special
                        characters</p>
                )}
                <button type="submit" className="auth-form__button">Увійти</button>
                <a className="auth-form__href__login" onClick={handleLoginClick}>
                    <img className="auth-form__image" src="/public/icons8-register-30.png" alt="Registration"/> Ще не маєш аккаунта?
                </a>
            </form>
        </div>
    );
};

export default AuthForm;
