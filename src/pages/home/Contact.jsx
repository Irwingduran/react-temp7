const Contact = () => {
    return (
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Contacto</h2>
          <p className="text-gray-600 text-lg">
            ¿Tienes alguna duda o necesitas más información? ¡Estamos aquí para ayudarte!
          </p>
        </div>
  
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Formulario de Contacto */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="tucorreo@example.com"
                  className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Mensaje</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí"
                  rows="4"
                  className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all w-full"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
  
          {/* Información de Contacto */}
          <div className="space-y-6">
            {/* Tarjeta de Información */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                📍
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Ubicación</h4>
                <p className="text-gray-600">Carmen Serdán 301, Residencial Colón y Col Ciprés,
                50120 Toluca de Lerdo, Méx.</p>
              </div>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                📞
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Teléfono</h4>
                <p className="text-gray-600">+52 722 242 9505</p>
              </div>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                ✉️
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Correo Electrónico</h4>
                <p className="text-gray-600">
                oftalmologiatoluca@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Mapa de Ubicación */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            ¡Visítanos en nuestra ubicación!
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.1398321682136!2d-99.66372922478959!3d19.27628438196991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE2JzM0LjYiTiA5OcKwMzknNDAuMiJX!5e0!3m2!1ses!2smx!4v1735075815082!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
  
        {/* Llamado a la acción */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Estamos aquí para ti!
          </h3>
          <p className="text-gray-600 mb-6">
            No dudes en comunicarte con nosotros para cualquier consulta o duda.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-all">
            Llamar Ahora
          </button>
        </div>
      </section>
    );
  };
  
  export default Contact;
  