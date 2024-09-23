import React, { useEffect, useState, useRef } from 'react';

const QuienesSomos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="quienes-somos" 
      ref={sectionRef} 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Imagen que abarque todo el ancho con sombra y recorte */}
      <div className="w-full">
        <img 
          src="/src/assets/IMAGEN/grupo.svg" 
          alt="Quiénes Somos" 
          className="w-full h-96 object-cover shadow-custom" 
          loading="lazy"  // Lazy loading
        />
      </div>

      {/* Contenido con fondo azul oscuro y texto blanco, con animación de entrada */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 transition-transform duration-500 hover:scale-110">
            Quiénes Somos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 transition-transform duration-500 hover:scale-110">
                Misión
              </h3>
              <p className="transition-transform duration-500 hover:scale-110">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className="transition-transform duration-500 hover:scale-110">
              <p>
                Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 transition-transform duration-500 hover:scale-110">
                Visión
              </h3>
              <p className="transition-transform duration-500 hover:scale-110">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <div className="flex justify-center">
          <div className="transition-transform duration-500 hover:scale-110">  
            <h1 className="text-blue-950 text-3xl font-bold">Nuestros Valores</h1>
            <img src="/src/assets/IMAGEN/valores.svg" alt="Valores" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
