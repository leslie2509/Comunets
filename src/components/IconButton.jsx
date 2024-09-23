import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function IconButton({ color = "bg-green-500" }) {
  const whatsappNumber = "526863517290";
  const message = "¡Hola! Me gustaría saber más sobre sus servicios.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-8 flex items-center justify-center z-50"
    >
      <button
        className={`flex items-center justify-center p-4 rounded-full text-white ${color} hover:bg-green-700 shadow-lg w-16 h-16`} // Cambia aquí a un color predeterminado para hover
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </button>
    </a>
  );
}
