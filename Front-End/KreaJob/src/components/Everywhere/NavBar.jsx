import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* Logo Principal */}
          <div className="flex items-center gap-2 shrink-0">

            <div className="flex flex-col line-height-1">
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Zona Franca La Lima
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Bolsa de Empleo</span>
            </div>
          </div>

          {/* Navegación con requerimientos de ZFLL */}
          <nav className="hidden md:flex flex-1 justify-center gap-6">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <a href="#" className="px-4 py-1.5 text-sm font-bold bg-white dark:bg-slate-700 shadow-sm rounded-lg text-primary">
                Vacantes
              </a>
              <a href="#" className="px-4 py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
                Prácticas
              </a>
            </div>

            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 self-center mx-2"></div>

            <a href="#" className="text-sm font-semibold self-center hover:text-primary transition-colors">Empresas</a>
            <a href="#" className="text-sm font-semibold self-center hover:text-primary transition-colors">Centros de Formación</a>
          </nav>

          {/* Acciones de Cuenta */}
          <div className="flex items-center gap-3">
            {/* Botón "Mi primera semilla" - Requerimiento de diseño llamativo */}
            <button className="hidden lg:flex px-4 py-2 text-xs font-black bg-gradient-to-r from-green-500 to-primary text-white rounded-full hover:shadow-lg transition-all uppercase tracking-tighter">
              Mi primer perfil 🌱
            </button>
            <Link to="/login" className="text-sm font-bold text-slate-700 dark:text-slate-200">Ingresar</Link>
            <Link to="/register" className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg">Registro</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
