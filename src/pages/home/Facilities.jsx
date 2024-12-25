import doctor from "../../assets/images/doc.jpeg";

const Facilities = () => {
  return (
    <div className="mt-16 px-4 md:px-16 lg:px-24">

      {/* Título */}
      <h3 className="text-2xl md:text-3xl text-center font-normal mb-12 md:mb-20">Conóceme</h3>

      {/* Contenedor Principal */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Sección de Detalles */}
        <div className="flex flex-col gap-6 lg:gap-10 lg:w-1/2">
          {/* Encabezado */}
          <div>
            <h6 className="text-lg md:text-xl font-medium">
              Sobre el Dr. Encampira Luna
            </h6>
          </div>

          {/* Cuerpo */}
          <div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            El Dr. Encampira es Médico Cirujano por la Universidad Anáhuac y especialista en Oftalmología por la Asociación para Evitar la Ceguera en México IAP, con reconocimiento de la UNAM. Cuenta con dos altas especialidades: Cirugía de Catarata y Córnea y Cirugía Refractiva, avaladas por la UNAM y la Universidad de California, Los Ángeles (UCLA).
            <br />
            Está certificado por el Consejo Mexicano de Oftalmología, es miembro activo de la Sociedad Mexicana de Oftalmología (SMO) y la European Society of Cataract & Refractive Surgeons (ESCRS), además de ser Médico Adscrito de Segmento Anterior y Catarata en APEC.
            </p>
          </div>
        </div>

        {/* Sección de Imágenes */}
        <div className="relative flex justify-center lg:w-1/2">
          <img
            src={doctor}
            alt="facility1"
            className="w-[280px] md:w-[320px] lg:w-[365px] h-[260px] md:h-[300px] lg:h-[349px] object-cover rounded-xl"
          />
          <img
            src={doctor}
            alt="facility2"
            className="absolute right-0 lg:right-[-100px] bottom-[-40px] lg:bottom-[60px] w-[200px] md:w-[250px] lg:w-[365px] h-[200px] md:h-[250px] lg:h-[349px] object-cover rounded-xl -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
