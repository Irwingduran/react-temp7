const MapComponent = () => {
    return (
      <section className="bg-blue-50 py-12 px-6 md:px-12">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">📍 Ubicación</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
          Visítenos para una atención personalizada y un servicio excelente.
          </p>
        </div>
  
        {/* Contenedor del Mapa */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.1398321682136!2d-99.66372922478959!3d19.27628438196991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE2JzM0LjYiTiA5OcKwMzknNDAuMiJX!5e0!3m2!1ses!2smx!4v1735075815082!5m2!1ses!2smx"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        {/* Información Adicional */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-medium text-gray-700">📫 Información de Contacto</h3>
          <p className="text-gray-600 mt-2">
            Carmen Serdán 301, Residencial Colón y colonia Ciprés, Toluca, Estado de México
          </p>
          <p className="text-gray-600">Phone: +52 722 242 9505</p>
        </div>
      </section>
    );
  };
  
  export default MapComponent;
  