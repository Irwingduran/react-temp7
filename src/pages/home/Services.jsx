import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Título */}
      <h3 className="text-center text-2xl md:text-3xl font-normal mb-10">
        Otros Servicios
      </h3>

      {/* Contenedor de Servicios */}
      <div className="flex flex-wrap gap-8 justify-center">
        <Service />
      </div>
    </div>
  );
};

export default Services;
