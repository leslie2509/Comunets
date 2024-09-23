import React, { useState } from 'react';

const Simulador = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    montoSolicitar: '',
    ingresosMensuales: '',
    frecuenciaPago: '',
    plazo: '',
    tasaInteresAnual: '',
    comisionApertura: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar los datos del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Simulador de Pagos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre de la Institución*</label>
          <input
            type="text"
            name="nombreInstitucion"
            value={formData.nombreInstitucion}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Monto a Solicitar*</label>
          <input
            type="number"
            name="montoSolicitar"
            value={formData.montoSolicitar}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingresos Mensuales*</label>
          <input
            type="number"
            name="ingresosMensuales"
            value={formData.ingresosMensuales}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Frecuencia de Pago*</label>
          <input
            type="text"
            name="frecuenciaPago"
            value={formData.frecuenciaPago}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Plazo*</label>
          <input
            type="text"
            name="plazo"
            value={formData.plazo}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tasa de Interés Anual*</label>
          <input
            type="number"
            name="tasaInteresAnual"
            value={formData.tasaInteresAnual}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Comisión por Apertura*</label>
          <input
            type="number"
            name="comisionApertura"
            value={formData.comisionApertura}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Seguro de Vida*</label>
          <input
            type="number"
            name="seguroVida"
            value={formData.seguroVida}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Seguro de Desempleo*</label>
          <input
            type="number"
            name="seguroDesempleo"
            value={formData.seguroDesempleo}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Calcular
        </button>
      </form>
    </div>
  );
};

export default Simulador;
