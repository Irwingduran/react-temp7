import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12">

        {/* Logo */}
        <div>
          <a href="/#home">
            <h1 className="text-xl font-semibold">Dr. Erick O. Encampira Luna</h1>
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
          <a href=""><h3 className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</h3></a>
        </div>
      </div>

      {/* Menú desplegable (Móvil) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            <a href="/#home"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Inicio</h3></a>
            <a href="/#about"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Conóceme</h3></a>
            <a href="/#service"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Servicio</h3></a>
            <a href="/#contact"><h3 className="text-base font-normal cursor-pointer hover:text-blue-700">Contacto</h3></a>
            <a href=""><h3 className="text-base font-normal text-blue-700 cursor-pointer">Agendar Cita</h3></a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
