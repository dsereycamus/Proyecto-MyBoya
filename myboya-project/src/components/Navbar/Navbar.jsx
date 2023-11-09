import logo from "../../assets/Icons/logobg.png";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
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
      <Link to="/sesion" className="btn2">
        <button>Inicio sesión</button>
      </Link>
      <a href="" className="btn3">
        <button>¡Regístrate!</button>
      </a>
    </header>
  );
};

export default Navbar;
