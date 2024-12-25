import symptoms from "../../assets/images/symptoms.png";


const services = [
    {
      image: symptoms,
      name: "Degeneración macular",
      body: "Tratamiento especializado para AMD y preservación de la visión.",
    },
    {
      image: symptoms,
      name: "Síndrome del ojo seco",
      body: "Diagnóstico y manejo efectivo del ojo seco crónico.",
    },
    {
      image: symptoms,
      name: "Retinopatía diabética",
      body: "Control y tratamiento para evitar complicaciones visuales.",
    },
    {
      image: symptoms,
      name: "Desprendimiento de retina",
      body: "Atención quirúrgica especializada para reparar la retina.",
    },
    {
      image: symptoms,
      name: "Estrabismo convergente",
      body: "Corrección quirúrgica y terapéutica de ojos bizcos.",
    },
    {
      image: symptoms,
      name: "Miopía",
      body: "Corrección de visión borrosa mediante tratamientos avanzados.",
    },
    {
      image: symptoms,
      name: "Astigmatismo",
      body: "Diagnóstico y tratamiento para mejorar la claridad visual.",
    },
    {
      image: symptoms,
      name: "Conjuntivitis y Pterigión",
      body: "Tratamiento efectivo para infecciones e irritaciones oculares.",
    },
  ];
  

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white gap-4 rounded-lg p-6 cursor-pointer hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
        >
          {/* Ícono */}
          <div className="w-16 h-16">
            <img src={service.image} alt="service-icon" className="w-full h-full object-contain" />
          </div>

          {/* Título */}
          <h5 className="text-xl font-medium">{service.name}</h5>

          {/* Descripción */}
          <p className="text-gray-500 text-sm md:text-base max-w-[200px]">
            {service.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Service;
