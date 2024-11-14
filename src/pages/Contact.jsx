import "./Contact.css";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="container">
      <Menu />

      <h1 className="contact-title">Contacto</h1>
      <section className="contact-section">
        <form className="form-contact" action="" method="">
          <label htmlFor="name">Nombre</label>
          <input type="text" />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" />

          <label htmlFor="subject">Asunto</label>
          <input type="text"  />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message"  rows="4" ></textarea>

          <Button className="button" text="Enviar" />  {/* <input type="button" value="Enviar" />, no se utiliza el value y se utiliza el text, para personalizar el texto, que va mediente una props */}
        </form>

        <div className="contact-info">
          <p><FaEnvelope color="#054a61" /> andresanta1981@gmail.com</p>
          <p><FaPhone color="#054a61" /> +57 310 515 4524</p>
          {/* <p><FaLocationDot color="#054a61" /> Calle Falsa 123, Ciudad, País</p> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
