import partner1 from "../../assets/logos/ACE.jpg";
import partner2 from "../../assets/logos/ATLAS.jpg";
import partner3 from "../../assets/logos/AXA.jpg";
import partner4 from "../../assets/logos/BANAMEX.jpg";
import partner5 from "../../assets/logos/Banco.jpg";
import partner6 from "../../assets/logos/BANORTE.jpg";
import partner7 from "../../assets/logos/BUPA.jpg";

import partner8 from "../../assets/logos/BXT.jpg";
import partner9 from "../../assets/logos/INBURSA.jpg";
import partner10 from "../../assets/logos/GNP.jpg";
import partner11 from "../../assets/logos/MAPFRE.jpg";
import partner12 from "../../assets/logos/METLIFE.jpg";
import partner13 from "../../assets/logos/QUALITAS.jpg";
import partner14 from "../../assets/logos/SCOTIABANK.jpg";
import partner15 from "../../assets/logos/SEGUROS_MONTERREY.jpg";
import partner16 from "../../assets/logos/SURA.jpg";
import partner17 from "../../assets/logos/VITAMEDICA.jpg";
import partner18 from "../../assets/logos/ZURICH.jpg";
const Partners = () => {
  return (
    <div className="text-center mt-20 mb-8 px-4">
      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-normal mb-6">Aseguradoras</h3>

      {/* Contenedor de Logos */}
      <div className="bg-white p-8 w-[90%] md:w-[75%] mx-auto shadow-md rounded-lg">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-6 md:gap-8">
          <img src={partner1} alt="partner1" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner2} alt="partner2" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner3} alt="partner3" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner4} alt="partner4" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner5} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner6} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner7} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />

          <img src={partner8} alt="partner1" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner9} alt="partner2" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner10} alt="partner3" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner11} alt="partner4" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner12} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner13} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner14} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />

          <img src={partner15} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner16} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner17} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner18} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
