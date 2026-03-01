import { Link } from "react-router-dom";
import InputField from "../components/registro/InputField";

const Login = () => {
    return (
        <div className="login-container">
            <h2 className="form-title">Iniciar Sesión</h2>

            <form action="#" className="login-form">
                <InputField type="email" placeholder="Correo electrónico" />
                <InputField type="password" placeholder="Contraseña" />

                <Link to="/forgot-password" className="forgot-password-link">¿Olvidó su contraseña?</Link>
                <button type="submit" className="login-button">Ingresar</button>
            </form>

            <p className="signup-prompt">
                ¿No tiene una cuenta? <a href="#" className="signup-link">Regístrese</a>
            </p>
        </div>
    )
}

export default Login;