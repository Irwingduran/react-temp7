const Testimonials = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Testimonios</h2>
          <p className="text-gray-600 text-lg">
            Lo que nuestros pacientes dicen sobre nosotros.
          </p>
        </div>
  
        {/* Contenedor de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <img
                src="https://i.pravatar.cc/800"
                alt="Andrea"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Andrea</h4>
            <p className="text-gray-500 text-sm mb-4">
              "¡Tuve una experiencia maravillosa en esta clínica! Los médicos fueron atentos y profesionales."
            </p>
            <span className="text-blue-600 font-medium text-sm">★ ★ ★ ★ ★</span>
          </div>
  
          {/* Tarjeta Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <img
                src="https://i.pravatar.cc/500"
                alt="Ricky"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Ricky</h4>
            <p className="text-gray-500 text-sm mb-4">
              "La clínica ofreció un ambiente cómodo y acogedor. ¡Altamente recomendado!"
            </p>
            <span className="text-blue-600 font-medium text-sm">★ ★ ★ ★ ★</span>
          </div>
  
          {/* Tarjeta Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <img
                src="https://i.pravatar.cc/800"
                alt="David"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Lucía</h4>
            <p className="text-gray-500 text-sm mb-4">
              "Los tratamientos que recibí fueron efectivos y personalizados."
            </p>
            <span className="text-blue-600 font-medium text-sm">★ ★ ★ ★ ★</span>
          </div>
        </div>
  
        {/* CTA Final */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Comparte tu experiencia con nosotros!
          </h3>
          <p className="text-gray-600 mb-6">
            Tu opinión nos ayuda a seguir mejorando.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all">
            Deja tu Testimonio
          </button>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  