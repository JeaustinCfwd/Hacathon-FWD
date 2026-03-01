import { Link } from "react-router-dom";
import InputField from "../Login/InputField";

const Register = () => {
    return (
        <div className="relative w-full min-h-screen pt-20 pb-10 flex flex-col justify-center items-center">
            <Link to="/" className="absolute top-6 left-6 text-[#5F41E4] hover:underline font-medium flex items-center gap-2">
                ← Volver al inicio
            </Link>

            <div className="login-container w-full max-w-[410px]">
                <h2 className="form-title">Crear Cuenta</h2>

                <form action="#" className="login-form">
                    <InputField type="text" placeholder="Nombre completo" />
                    <InputField type="email" placeholder="Correo electrónico" />
                    <InputField type="password" placeholder="Contraseña" />
                    <InputField type="password" placeholder="Confirmar contraseña" />

                    <button type="submit" className="login-button">Registrarse</button>
                </form>

                <p className="signup-prompt">
                    ¿Ya tiene una cuenta? <Link to="/login" className="signup-link">Inicie Sesión</Link>
                </p>
            </div>
        </div>
    )
}

export default Register;
