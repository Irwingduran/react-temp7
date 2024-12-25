import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Hero = () => {
    return (
        <div>
            <Navbar/>
       
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Degeneración Macular Relacionada con la Edad (AMD)
          </h2>
          <p className="text-gray-600 text-lg">
            Tratamientos especializados con tecnología de vanguardia para cuidar tu salud visual.
          </p>
        </div>
  
        {/* Contenido Principal */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen del servicio */}
          <div className="rounded-lg overflow-hidden bg-gray-300 h-64 md:h-96">
            {/* Placeholder de Imagen */}
            <div className="flex items-center justify-center h-full text-gray-500">
              Imagen del Servicio
            </div>
          </div>
  
          {/* Descripción del servicio */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿En qué consiste el tratamiento?
            </h3>
            <p className="text-gray-600 mb-6">
              La degeneración macular es una afección ocular que puede afectar gravemente la visión central. Nuestros tratamientos se centran en el diagnóstico temprano, monitoreo constante y procedimientos innovadores para frenar su avance.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Diagnóstico con equipos de última generación.</li>
              <li>Tratamiento personalizado para cada paciente.</li>
              <li>Inyecciones intravítreas efectivas.</li>
              <li>Asesoría continua para el paciente y su familia.</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all">
              Agendar Consulta
            </button>
          </div>
        </div>
  
        {/* Beneficios del Servicio */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Beneficio 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              Icono
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Especialistas Calificados</h4>
            <p className="text-gray-600 mt-2">
              Médicos certificados con amplia experiencia en el tratamiento de AMD.
            </p>
          </div>
  
          {/* Beneficio 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              Icono
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Tecnología Avanzada</h4>
            <p className="text-gray-600 mt-2">
              Equipos de última generación para diagnósticos precisos.
            </p>
          </div>
  
          {/* Beneficio 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              Icono
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Atención Personalizada</h4>
            <p className="text-gray-600 mt-2">
              Tratamientos adaptados a las necesidades específicas de cada paciente.
            </p>
          </div>
        </div>
  
        {/* Testimonios */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Lo que dicen nuestros pacientes
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 p-4 rounded-md shadow-md text-center">
              <p className="text-gray-600 italic">
                "El tratamiento fue efectivo y los médicos me brindaron una atención excelente."
              </p>
              <h5 className="mt-4 font-medium text-gray-800">— Andrea López</h5>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-gray-50 p-4 rounded-md shadow-md text-center">
              <p className="text-gray-600 italic">
                "Gracias al monitoreo constante, pude notar mejoras significativas en mi visión."
              </p>
              <h5 className="mt-4 font-medium text-gray-800">— Ricardo Martínez</h5>
            </div>
          </div>
        </div>
  
        {/* Llamado a la acción final */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Agenda tu cita hoy mismo!
          </h3>
          <p className="text-gray-600 mb-6">
            Da el primer paso hacia una mejor salud visual con nuestros especialistas.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-all">
            Contactar Ahora
          </button>
        </div>
      </section>
      <Footer/>
      </div>
    );
  };
  
  export default Hero;
  