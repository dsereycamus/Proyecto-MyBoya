import React from 'react'
import logo from '../../assets/Images/myboya-logo.png'
import './GameNav.css';
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useSession } from "../../context/useSession";

export default function GameNav() {

    const navigate = useNavigate();
    const { isLoggedIn, logout: logoutContext } = useSession();
  
    const logout = () => {
      logoutContext();
      navigate("/");
    };
  

    return (
        <header>
            <nav className='header-navgame'>
                <h2 className='title-navgame'>MyB<span className='letter-o'>o</span>ya</h2>
                <Link to="/">
                <img src={logo} alt="Logo MyBoya" />
                </Link>
                {/* <ul className="listaNav2">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Nosotros</NavLink>
                    </li>
                </ul> */}
                <Link to="/cuenta">
                <button className='btn-gamenav2'>Cuenta</button>
                </Link>
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
            </nav>

        </header>
    )
}
