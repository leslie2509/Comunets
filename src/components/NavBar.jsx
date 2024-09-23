import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const submenuRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleSubMenuToggle = () => {
    setSubMenuOpen((prev) => !prev);
  };

  // Cierra el submenú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setSubMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-tl from-blue-900 to-cyan-900 fixed top-0 w-full z-40 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20">
        <div className="flex items-center">
          <a href="/" className="mr-2">
            <img
              src="/src/assets/IMAGEN/LOGO.svg"
              alt="Logo Comunets"
              className="h-14"
            />
          </a>
          <a href="/" className="flex items-center">
            <img
              src="/src/assets/IMAGEN/LOGO_TXT.svg"
              alt="Texto Comunets"
              className="h-12"
            />
          </a>
        </div>

        {/* Menú de Escritorio */}
        <div className="hidden lg:flex ml-auto space-x-5 items-center">
          <Link
            to="/"
            className="text-white text-lg hover:font-bold transition-all"
          >
            Inicio
          </Link>
          <Link
            to="/quienes-somos"
            className="text-white text-lg hover:font-bold transition-all"
          >
            Quiénes Somos
          </Link>
          <div className="relative">
            <span
              onClick={handleSubMenuToggle}
              className={`text-white text-lg cursor-pointer hover:font-bold transition-all relative ${
                isSubMenuOpen ? "font-bold" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={isSubMenuOpen}
            >
              Pagos
              {/* Línea naranja debajo del elemento "Pagos" */}
              <span
                className={`absolute left-0 bottom-[-5px] h-1 bg-orange-400 transition-transform duration-300 ease-in-out ${
                  isSubMenuOpen ? "w-full scale-x-100" : "w-0 scale-x-0"
                }`}
              ></span>
            </span>
            {isSubMenuOpen && (
              <div
                ref={submenuRef}
                className="absolute top-full left-0 bg-blue-950 text-white w-64 mt-1 transition-transform duration-300 ease-in-out"
              >
                <ul className="py-2">
                  <li>
                    <Link
                      to="/simulador"
                      className="block px-4 py-2 hover:font-bold transition-all"
                    >
                      Simulador
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pagar-en-linea"
                      className="block px-4 py-2 hover:font-bold transition-all"
                    >
                      Pagar en Línea
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Menú Hamburguesa para móvil */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-4 text-white text-2xl"
          aria-label="Open mobile menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-orange-400 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col`}
      >
        <button
          onClick={toggleMobileMenu}
          className="p-4 text-white text-2xl absolute top-4 right-4"
          aria-label="Close mobile menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="flex flex-col mt-16 ml-4">
          <Link
            to="/"
            className="text-white text-xl py-2 hover:font-bold transition-all"
            onClick={toggleMobileMenu}
          >
            Inicio
          </Link>
          <Link
            to="/quienes-somos"
            className="text-white text-xl py-2 hover:font-bold transition-all"
            onClick={toggleMobileMenu}
          >
            Quiénes Somos
          </Link>
          <div className="relative">
            <span
              onClick={handleSubMenuToggle}
              className={`text-white text-xl py-2 cursor-pointer hover:font-bold transition-all relative ${
                isSubMenuOpen ? "font-bold" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={isSubMenuOpen}
            >
              Pagos
              {/* Línea naranja debajo del elemento "Pagos" */}
              <span
                className={`absolute left-0 bottom-[-5px] h-1 bg-orange-400 transition-transform duration-300 ease-in-out ${
                  isSubMenuOpen ? "w-full scale-x-100" : "w-0 scale-x-0"
                }`}
              ></span>
            </span>
            {isSubMenuOpen && (
              <div
                ref={submenuRef}
                className="relative bg-blue-950 text-white w-full mt-1 transition-transform duration-300 ease-in-out"
              >
                <ul className="py-2">
                  <li>
                    <Link
                      to="/simulador"
                      className="block px-4 py-2 hover:font-bold transition-all"
                      onClick={toggleMobileMenu}
                    >
                      Simulador
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pagar-en-linea"
                      className="block px-4 py-2 hover:font-bold transition-all"
                      onClick={toggleMobileMenu}
                    >
                      Pagar en Línea
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
