import logo from "../../assets/Icons/logobg.png";
import { useSession } from "../../context/useSession";
import "./Nav.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
/* import CloseIcon from '@mui/icons-material/Close'; */
import { useRef } from "react";

const Navbar = () => {

  const navRef =  useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav")
  }

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
      <nav className="listaprub" ref={navRef}>
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
          <li>
            <NavLink to="/noticias">Noticias</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/playground">Quiz</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/new">BoyaCraft</NavLink>
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
      <button className="nav-btn" onClick={showNav}>
        <DehazeIcon />
      </button>
    </header>
  );
};

export default Navbar;
