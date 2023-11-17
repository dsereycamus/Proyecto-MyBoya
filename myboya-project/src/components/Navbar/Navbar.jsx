import logo from "../../assets/Icons/logobg.png";
import { useSession } from "../../context/useSession";
import "./Nav.css";
import { useNavigate, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout: logoutContext } = useSession();

  const logout = () => {
    logoutContext();
    navigate("/");
  };

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
            <NavLink to="/partners">Partners</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/playground">Noticias</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="btn-registro-nav">
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <>
          <Link to="/sesion" className="btn-sesion-nav">
            <button>Inicio sesión</button>
          </Link>
          <Link to="/registro" className="btn-registro-nav">
            <button>¡Regístrate!</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Navbar;
