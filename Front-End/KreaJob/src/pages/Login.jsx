import { Link } from "react-router-dom";
import InputField from "../components/Login/InputField";

const Login = () => {
    return (
        <div className="relative w-full min-h-screen pt-20 pb-10 flex flex-col justify-center items-center">
            <Link to="/" className="absolute top-6 left-6 text-[#5F41E4] hover:underline font-medium flex items-center gap-2">
                ← Volver al inicio
            </Link>

            <div className="login-container w-full max-w-[410px]">
                <h2 className="form-title">Iniciar Sesión</h2>

                <form action="#" className="login-form">
                    <InputField type="email" placeholder="Correo electrónico" />
                    <InputField type="password" placeholder="Contraseña" />

                    <Link to="/forgot-password" className="forgot-password-link">¿Olvidó su contraseña?</Link>
                    <button type="submit" className="login-button">Ingresar</button>
                </form>

                <p className="signup-prompt">
                    ¿No tiene una cuenta? <Link to="/register" className="signup-link">Regístrese</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
