import React from 'react';

// Componente para mostrar una opinión individual
const Testimonial = ({ nombre, texto, estrellas }) => {
  return (
    <div className="border-l-4 border-orange-500 p-4">
      <div className="flex">
        {Array(estrellas).fill(0).map((_, index) => (
          <span key={index} className="text-orange-500">★</span>
        ))}
      </div>
      <p className="mt-2 text-gray-600">{texto}</p>
      <p className="mt-4 font-bold">{nombre}</p>
    </div>
  );
};

// Componente principal para mostrar todas las opiniones
const IndexOpiniones = ({ opiniones }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {opiniones.length > 0 ? (
        opiniones.map((testimonio, index) => (
          <Testimonial 
            key={index} 
            nombre={testimonio.nombre} 
            texto={testimonio.texto} 
            estrellas={testimonio.estrellas} 
          />
        ))
      ) : (
        <p className="text-gray-600">No hay opiniones disponibles.</p>
      )}
    </div>
  );
};

export default IndexOpiniones;
