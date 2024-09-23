import { useState, useEffect } from 'react';

// Componente de estrella individual
const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      className="cursor-pointer text-3xl"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ color: filled ? '#f59e0b' : '#d1d5db' }}
    >
      ★
    </span>
  );
};

function VentanaOpiniones({ agregarOpinion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [texto, setTexto] = useState('');
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('fixed')) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    setErrors((prev) => ({ ...prev, rating: undefined }));
  };

  const handleMouseEnter = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!apellidos) newErrors.apellidos = 'Los apellidos son obligatorios.';
    
    // Validación de correo
    if (!correo) {
      newErrors.correo = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      newErrors.correo = 'Por favor, ingresa un correo válido.';
    }
    
    if (!texto) newErrors.texto = 'La opinión es obligatoria.';
    if (rating === 0) newErrors.rating = 'La calificación es obligatoria.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const nuevaOpinion = { nombre, apellidos, correo, texto, estrellas: rating };
    agregarOpinion(nuevaOpinion);

    // Reiniciar estados
    setNombre('');
    setApellidos('');
    setCorreo('');
    setTexto('');
    setRating(0);
    setHoverRating(0);
    setErrors({});
    toggleModal();
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="bg-blue-950 text-white mb-6 text-xl py-3 px-5 rounded-full transition-transform duration-500 hover:scale-110"
        onClick={toggleModal}
      >
        Escribe que piensas de nuestros servicios
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div
            className="bg-blue-950 p-6 rounded-lg shadow-lg w-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white font-bold"
              onClick={toggleModal}
            >
              X
            </button>
            <h2 className="text-white text-xl font-semibold mb-4">
              Tu opinión es muy importante para nosotros
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white font-bold mb-1">
                    Nombres *
                  </label>
                  <input
                    type="text"
                    className={`bg-gray-100 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.nombre ? 'border-2 border-red-500' : 'border-2 border-gray-300'}`}
                    value={nombre}
                    onChange={handleInputChange(setNombre, 'nombre')}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white font-bold mb-1">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.apellidos ? 'border-2 border-red-500' : 'border-2 border-gray-300'}`}
                    value={apellidos}
                    onChange={handleInputChange(setApellidos, 'apellidos')}
                  />
                  {errors.apellidos && <p className="text-red-500 text-xs">{errors.apellidos}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm text-white font-bold mb-1">
                  Correo *
                </label>
                <input
                  type="email"
                  className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.correo ? 'border-2 border-red-500' : 'border-2 border-gray-300'}`}
                  value={correo}
                  onChange={handleInputChange(setCorreo, 'correo')}
                />
                {errors.correo && <p className="text-red-500 text-xs">{errors.correo}</p>}
              </div>
              <div>
                <label className="block text-sm text-white">Teléfono (Opcional)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Sección de calificación de estrellas */}
              <div>
                <label className="block text-sm text-white font-bold mb-1">
                  Calificación general
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      filled={hoverRating >= star || rating >= star}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => handleMouseEnter(star)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                {errors.rating && <p className="text-red-500 text-xs">{errors.rating}</p>}
              </div>

              <div>
                <label className="block text-sm text-white font-bold mb-1">
                  Opinión *
                </label>
                <textarea
                  className={`w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.texto ? 'border-2 border-red-500' : 'border-2 border-gray-300'}`}
                  rows="4"
                  placeholder="¿Qué te gustó de nuestros servicios? ¿Volverías a contratarlos?"
                  value={texto}
                  onChange={handleInputChange(setTexto, 'texto')}
                ></textarea>
                {errors.texto && <p className="text-red-500 text-xs">{errors.texto}</p>}
              </div>
              <p className="text-gray-300 text-xs">
                <hr />
                Tu opinión será revisada, se te notificará por el correo ingresado
              </p>
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default VentanaOpiniones;
