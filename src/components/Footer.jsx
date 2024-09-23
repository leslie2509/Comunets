import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl from-blue-900 to-cyan-900 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Lista de enlaces */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-green-400 text-2xl transition-transform duration-500 hover:scale-110"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-600 text-2xl transition-transform duration-500 hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className="text-white hover:text-pink-600 text-2xl transition-transform duration-500 hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <p className="text-sm">
          © 2024 Comunets. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
