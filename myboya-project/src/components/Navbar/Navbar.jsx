import logo from "../../assets/Icons/logobg.png";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-navbar">
      <div className="logoNav">
        <Link to="/">
          <img src={logo} alt="Logo MyBoya" />
        </Link>
      </div>
      <nav>
        <ul className="listaNav">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Nosotros</NavLink>
          </li>
          <li>
            <>Partners</>
          </li>
          <li>
            <NavLink to="/playground">Noticias</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/sesion" className="btn-sesion-nav">
        <button>Inicio sesión</button>
      </Link>
      <Link to="/registro" className="btn-registro-nav">
        <button>¡Regístrate!</button>
      </Link>
    </header>
  );
};

export default Navbar;
