import sphere2 from "../../assets/images/Ellipse 2.png";
import sphere3 from "../../assets/images/Ellipse 3.png";
import Doctor from "./Doctor";

const Doctors = () => {
  return (
    <div className="relative text-center mb-8 py-16 px-4 md:px-8 lg:px-16">

      {/* Título */}
      <h3 className="text-2xl md:text-3xl font-normal mb-6">Servicios</h3>

      {/* Descripción */}
      <p className="text-gray-600 mb-8 text-sm md:text-base">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur est distinctio aut harum blanditiis temporibus. Nihil maiores eos nam impedit, id autem aliquam facere aliquid, dolores nemo doloribus, quos voluptatibus.
      </p>

      {/* Esferas decorativas */}
      <img
        src={sphere2}
        alt="sphere2"
        className="absolute -left-4 top-20 -z-10 w-16 md:w-24"
      />
      <img
        src={sphere3}
        alt="sphere3"
        className="absolute right-0 top-64 -z-10 w-20 md:w-28"
      />

      {/* Contenedor de Doctores */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-4 md:p-8 lg:p-12 border-stone-950">
        <Doctor />
      </div>

      {/* Botón */}
      <button className="mt-6 px-6 py-3 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition">
        Agendar Cita
      </button>
    </div>
  );
};

export default Doctors;
