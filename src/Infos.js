import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Infos() {
  return (
    <div className="allinfo">
      <div className="divinfo">
        <h2 className="infos">REDES SOCIAIS</h2>
        <h2 className="h2insta">
          <FaInstagram className="insta" />
        </h2>
      </div>
      <div className="divinfo">
        <h2 className="infos">PRECISA DE AJUDA?</h2>
        <button className="btnwpp">
          WHATSAPP
          <FaWhatsapp className="wpp" />
        </button>
      </div>
    </div>
  );
}
