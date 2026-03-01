import { useState } from "react";
import "../../styles/ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="auth-layout">
                <div className="auth-card">
                    <div className="auth-card__header">
                        <h1 className="auth-card__logo-block-title">KreaJob</h1>
                        <p className="auth-card__logo-block-subtitle">Bolsa de Empleo</p>
                    </div>
                    <div className="auth-card__content">
                        <h2 className="auth-card__section-title">Correo enviado</h2>
                        <p className="auth-card__helper">
                            Hemos enviado un enlace de recuperación a tu correo electrónico.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-layout">
            <div className="auth-card">
                <div className="auth-card__header">
                    <h1 className="auth-card__logo-block-title">KreaJob</h1>
                    <p className="auth-card__logo-block-subtitle">Bolsa de Empleo</p>
                </div>
                <div className="auth-card__content">
                    <h2 className="auth-card__section-title">¿Olvidó su contraseña?</h2>
                    <p className="auth-card__helper">
                        Ingrese su correo electrónico y le enviaremos un enlace para restaurar su contraseña.
                    </p>
                    
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="auth-form__field">
                            <label className="auth-form__label" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="auth-form__input"
                                placeholder="correo@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="auth-form__button auth-form__button--primary">
                            Enviar enlace de recuperación
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
