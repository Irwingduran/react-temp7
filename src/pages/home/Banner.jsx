import doctor from "../../assets/images/doc.jpeg";
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-100/10 px-4 sm:px-6 md:px-12 py-6 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-4 text-center lg:text-left lg:w-1/2 px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Dr. Erick O. Encampira Luna
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-500 max-w-xl mx-auto lg:mx-0">
              Oftalmología, Especialista en Córnea, catarata y cirugía refractiva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-2 sm:mt-5 justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200 w-full sm:w-auto">
                Agendar Cita
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-200 w-full sm:w-auto">
                Ver más
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <img 
              src={doctor}
              alt="doctor" 
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
