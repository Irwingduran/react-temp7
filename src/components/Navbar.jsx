import { useState } from "react";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">

      {/* Logo */}
      <div>
        <h1 className="text-xl semibold">Dr. Erick O. Encampira Luna</h1>
      </div>

      {/* Menú Hamburguesa para móviles */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Navegación principal (Desktop) */}
      <div className="hidden md:flex gap-8">
        <h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Inicio</h3>
        <h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Conóceme</h3>
        <h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Servicio</h3>
        <h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Contacto</h3>
      </div>

      {/* Navegación secundaria (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <h3 className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</h3>
      
      </div>

      {/* Menú desplegable (Móvil) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li className="text-base font-normal cursor-pointer hover:text-blue-700">Inicio</li>
            <li className="text-base font-normal cursor-pointer hover:text-blue-700">Conóceme</li>
            <li className="text-base font-normal cursor-pointer hover:text-blue-700">Servicio</li>
            <li className="text-base font-normal cursor-pointer hover:text-blue-700">Contacto</li>
            <li className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
