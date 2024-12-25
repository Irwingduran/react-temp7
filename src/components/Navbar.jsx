import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-12">

      {/* Logo */}
      <div>
        <a href="/#home">
        <h1 className="text-xl semibold">Dr. Erick O. Encampira Luna</h1>
        </a>
      </div>

      {/* Menú Hamburguesa para móviles */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Navegación principal (Desktop) */}
      <div className="hidden md:flex gap-8">
      <a href="/#home"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Inicio</h3></a>  
       <a href="/#about"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Conóceme</h3></a>
        <a href="/#service"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Servicio</h3></a>
        <a href="/#contact"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Contacto</h3></a>
      </div>

      {/* Navegación secundaria (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
       <a href=""> <h3 className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</h3></a>
      
      </div>

      {/* Menú desplegable (Móvil) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
          <a href="/#home"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Inicio</h3></a>  
       <a href="/#about"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Conóceme</h3></a>
        <a href="/#service"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Servicio</h3></a>
        <a href="/#contact"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Contacto</h3></a>
        
        <a href=""> <h3 className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</h3></a>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
