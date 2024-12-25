import ellipse4 from "../assets/images/Ellipse 4.png";
import ellipse5 from "../assets/images/ellipse5.png";

const Footer = () => {
  return (
    <>
      {/* Contenedor Principal */}
      <div className="relative bg-blue-900 text-white py-10 px-6 md:px-12 lg:px-24 flex flex-wrap justify-evenly gap-8">

        {/* Logo y Descripción */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1>Dr. Erick O. Encampira Luna</h1>
          <p className="text-sm md:text-base">
           Tu Oftalmólogo de confianza 
          </p>
        </div>

        {/* Sección Medic */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Links</li>
            <li className="cursor-pointer hover:text-blue-300">Inicio</li>
            <li className="cursor-pointer hover:text-blue-300">Agendar Cita</li>
            <li className="cursor-pointer hover:text-blue-300">Servicio</li>
            <li className="cursor-pointer hover:text-blue-300">Sobre Mí</li>
            <li className="cursor-pointer hover:text-blue-300">Contacto</li>
          </ul>
        </div>

      

        {/* Sección Social Media */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Social Media</li>
            <li className="cursor-pointer hover:text-blue-300">WhatsApp</li>
            <li className="cursor-pointer hover:text-blue-300">Facebook</li>
            <li className="cursor-pointer hover:text-blue-300">Instagram</li>
          </ul>
        </div>

        {/* Sección Contact */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Contact</li>
            <li className="cursor-pointer hover:text-blue-300">+52 722 242 9505</li>
            <li className="cursor-pointer hover:text-blue-300">
            oftalmologiatoluca@gmail.com</li>
          </ul>
        </div>

        {/* Elementos Decorativos */}
        <img
          src={ellipse4}
          alt="ellipse4"
          className="absolute bottom-0 left-24 w-32 opacity-50 -z-10"
        />
        <img
          src={ellipse5}
          alt="ellipse5"
          className="absolute bottom-0 left-8 w-24 opacity-50 -z-10"
        />
      </div>

      {/* Footer Inferior */}
      <div className="bg-blue-950 text-white py-4 text-center md:text-left flex flex-col md:flex-row justify-center md:justify-around items-center text-xs md:text-sm gap-2">
        <p className="cursor-pointer hover:text-blue-300">&copy; Delta Agencia 2025</p>
        <p className="cursor-pointer hover:text-blue-300">Todos los derechos resevados</p>
        <p className="cursor-pointer hover:text-blue-300">Aviso de Privacidad</p>

      </div>
    </>
  );
};

export default Footer;
