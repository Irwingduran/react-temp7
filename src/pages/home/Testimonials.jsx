const Testimonials = () => {
    return (
      <div className="bg-blue-50 py-12 px-6 md:px-12">
        {/* Título */}
        <h3 className="text-center text-2xl md:text-3xl font-normal mb-20">
          What people say
        </h3>
  
        {/* Contenedor de Testimonios */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial Card 1 */}
          <div className="flex flex-col items-center bg-white w-80 h-[426px] rounded-lg shadow-lg gap-6 p-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/300"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h6 className="text-lg font-semibold">Andrea Andy, 35</h6>
              <p className="text-sm text-gray-500">
                "I had a great experience at this clinic. The doctors were
                knowledgeable and caring."
              </p>
            </div>
          </div>
  
          {/* Testimonial Card 2 */}
          <div className="flex flex-col items-center bg-white w-80 h-[426px] rounded-lg shadow-lg gap-6 p-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/500"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h6 className="text-lg font-semibold">Ricky Reynold, 27</h6>
              <p className="text-sm text-gray-500">
                "The clinic provided a comfortable and welcoming atmosphere."
              </p>
            </div>
          </div>
  
          {/* Testimonial Card 3 */}
          <div className="flex flex-col items-center bg-white w-80 h-[426px] rounded-lg shadow-lg gap-6 p-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/400"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h6 className="text-lg font-semibold">Grelish David, 30</h6>
              <p className="text-sm text-gray-500">
                "The treatments I received at this clinic were effective."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  