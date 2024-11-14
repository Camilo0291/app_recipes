import { Link } from "react-router-dom";
import './Menu.css'

function Menu() {
  return (
    <header className="header-menu">
      <div className="container-logo">
        <Link to="/"></Link>
      </div>
      <nav className="nav-menu">
        <ul className="nav-links">
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/workshops">Talleres</Link>
          </li>
          <li>
            <Link className="link" to="/gallery">Galeria</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contacto</Link>
          </li>
          <li>
            <Link className="link" to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link className="link" to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Menu;
