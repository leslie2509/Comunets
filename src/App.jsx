import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import IconButton from './components/IconButton';
import NavBar from './components/NavBar';
import VentanaOpiniones from './components/VentanaOpiniones';
import QuienesSomos from './components/QuienesSomos';
import IndexOpiniones from './components/IndexOpiniones';
import Simulador from './components/Simulador';

const App = () => {
  // Estado para manejar las opiniones
  const [opiniones, setOpiniones] = useState([]);

  // Función para agregar una nueva opinión
  const agregarOpinion = (nuevaOpinion) => {
    setOpiniones([...opiniones, nuevaOpinion]);
  };

  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-16">
        <Routes>
          {/* Ruta principal donde se mostrarán las opiniones */}
          <Route path="/" element={<IndexOpiniones opiniones={opiniones} />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/simulador" element={<Simulador />} />
        </Routes>
        {/* Ventana para agregar una nueva opinión, solo se muestra en la ruta raíz */}
        {location.pathname === '/' && <VentanaOpiniones agregarOpinion={agregarOpinion} />}
      </main>
      <Footer />
      <IconButton color="bg-green-500" hoverColor="bg-red-700" />
    </div>
  );
};

// Envuelve la aplicación con el enrutador
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
