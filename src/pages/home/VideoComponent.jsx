const VideoComponent = () => {
    return (
      <section className="bg-gray-50 py-12 px-6 md:px-12">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">🎬 Discover Our Story</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Watch our introduction video to learn more about our mission, vision, and the services we offer.
          </p>
        </div>
  
        {/* Contenedor del Video */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/01BK7iOlL88?si=1ReDYKizAm5ehX5o"
            title="YouTube video player"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
  
        {/* Información Adicional */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-medium text-gray-700">🌟 Join Our Journey</h3>
          <p className="text-gray-600 mt-2">
            Explore how we’re making a difference in the lives of our customers every day.
          </p>
        </div>
      </section>
    );
  };
  
  export default VideoComponent;
  