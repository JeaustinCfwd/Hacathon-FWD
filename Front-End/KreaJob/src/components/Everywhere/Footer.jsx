import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Info Corporativa */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">ZF La Lima</h2>
            <p className="text-slate-500 text-sm mb-6">
              Conectando el talento global con las oportunidades del parque industrial líder en la región.
            </p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">call</span>
                +506 2104-0550
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">mail</span>
                info@lalimafreezone.com
              </p>
            </div>
          </div>

          {/* Secciones por Perfil */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase text-xs tracking-widest">Aspirantes</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary">Búsqueda de Vacantes</a></li>
              <li><a href="#" className="hover:text-primary">Pasantías (Mi primer perfil)</a></li>
              <li><a href="#" className="hover:text-primary">Gestión de CV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase text-xs tracking-widest">Empresas e Instituciones</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary">Publicar Vacante</a></li>
              <li><a href="#" className="hover:text-primary">Ver Centros de Formación</a></li>
              <li><a href="#" className="hover:text-primary">Portal para Docentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase text-xs tracking-widest">Ayuda</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-primary font-bold text-red-500">Revocar Consentimiento</a></li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Zona Franca La Lima. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacidad y Uso de Datos</a>
            <a href="#" className="hover:underline">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
