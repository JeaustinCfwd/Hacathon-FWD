import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
                <div className="max-w-md w-full bg-white rounded shadow-md overflow-hidden">
                    <div className="bg-[#2F80C9] p-6 text-center">
                        <h1 className="text-2xl font-bold text-white">KreaJob</h1>
                        <p className="text-white text-sm mt-1">Bolsa de Empleo</p>
                    </div>
                    <div className="p-6">
                        <h2 className="text-base font-bold text-gray-800 mb-4">Correo enviado</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Hemos enviado un enlace de recuperación a tu correo electrónico.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
            <div className="max-w-md w-full bg-white rounded shadow-md overflow-hidden">
                <div className="bg-[#2F80C9] p-6 text-center">
                    <h1 className="text-2xl font-bold text-white">KreaJob</h1>
                    <p className="text-white text-sm mt-1">Bolsa de Empleo</p>
                </div>
                <div className="p-6 pb-8">
                    <h2 className="text-base font-bold text-gray-800 mb-4">¿Olvidó su contraseña?</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Ingrese su correo electrónico y le enviaremos un enlace para restaurar su contraseña.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm text-gray-800 mb-2">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="h-10 px-3 rounded border border-gray-300 text-base focus:border-[#2F80C9] focus:outline-none focus:ring-2 focus:ring-[#2F80C9]/20"
                                placeholder="correo@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="h-10 rounded bg-[#2F80C9] text-white text-base font-medium hover:bg-[#256FB3] active:bg-[#1E5F99] disabled:bg-gray-400 disabled:text-gray-200 cursor-pointer"
                        >
                            Enviar enlace de recuperación
                        </button>
                    </form>

                    <Link to="/login" className="flex items-center gap-2 mt-4 text-sm text-[#2F80C9] hover:text-[#256FB3]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Volver a Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
