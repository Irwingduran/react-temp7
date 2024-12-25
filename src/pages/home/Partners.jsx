
import partner5 from "../../assets/images/partner5.png";

const Partners = () => {
  return (
    <div className="text-center mt-20 mb-8 px-4">
      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-normal mb-6">Aseguradoras</h3>

      {/* Descripción */}
      <p className="text-gray-500 text-sm md:text-base mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur suscipit facilis, tenetur quibusdam sequi autem id adipisci illo repudiandae consequatur est ipsum magnam laboriosam dignissimos culpa ducimus totam ea?
      </p>

      {/* Contenedor de Logos */}
      <div className="bg-white p-8 w-[90%] md:w-[75%] mx-auto shadow-md rounded-lg">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-6 md:gap-8">
          <img src={partner5} alt="partner1" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner5} alt="partner2" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner5} alt="partner3" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner5} alt="partner4" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
          <img src={partner5} alt="partner5" className="w-24 md:w-28 cursor-pointer hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
