import footerImage from "../assets/images/footer logo.png";
import ellipse4 from "../assets/images/Ellipse 4.png";
import ellipse5 from "../assets/images/ellipse5.png";

const Footer = () => {
  return (
    <>
      {/* Contenedor Principal */}
      <div className="relative bg-blue-900 text-white py-10 px-6 md:px-12 lg:px-24 flex flex-wrap justify-evenly gap-8">

        {/* Logo y Descripción */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <img
            src={footerImage}
            alt="footer-logo"
            className="w-[124px] mx-auto md:mx-0"
          />
          <p className="text-sm md:text-base">
            We are a medical clinic,<br /> helping you for a better life.
          </p>
        </div>

        {/* Sección Medic */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Medic</li>
            <li className="cursor-pointer hover:text-blue-300">Home</li>
            <li className="cursor-pointer hover:text-blue-300">Medical Care</li>
            <li className="cursor-pointer hover:text-blue-300">Medical Health</li>
            <li className="cursor-pointer hover:text-blue-300">Medical Test</li>
            <li className="cursor-pointer hover:text-blue-300">Medical Lab</li>
          </ul>
        </div>

        {/* Sección About */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">About</li>
            <li className="cursor-pointer hover:text-blue-300">Medic</li>
            <li className="cursor-pointer hover:text-blue-300">Vision & Mission</li>
            <li className="cursor-pointer hover:text-blue-300">Careers</li>
            <li className="cursor-pointer hover:text-blue-300">Support</li>
            <li className="cursor-pointer hover:text-blue-300">FAQ</li>
          </ul>
        </div>

        {/* Sección Social Media */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Social Media</li>
            <li className="cursor-pointer hover:text-blue-300">Twitter / X</li>
            <li className="cursor-pointer hover:text-blue-300">Facebook</li>
            <li className="cursor-pointer hover:text-blue-300">Instagram</li>
          </ul>
        </div>

        {/* Sección Contact */}
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="font-bold uppercase text-base">Contact</li>
            <li className="cursor-pointer hover:text-blue-300">Austin Texas, 4567 Road Palm</li>
            <li className="cursor-pointer hover:text-blue-300">+00 123 456 789</li>
            <li className="cursor-pointer hover:text-blue-300">medi@test.com</li>
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
        <p className="cursor-pointer hover:text-blue-300">&copy; Medic 2028</p>
        <p className="cursor-pointer hover:text-blue-300">Legal Policies</p>
        <p className="cursor-pointer hover:text-blue-300">Sitemap</p>
        <p className="cursor-pointer hover:text-blue-300">Cookies</p>
      </div>
    </>
  );
};

export default Footer;
