import React from 'react'
import logo from '../../assets/Images/myboya-logo.png'
import './GameNav.css'
import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";

export default function GameNav() {

    const navRef = useRef();
    const show = () => {
        navRef.current.classList.toggle("show")
    }

    return (
        <header>
            <nav className='header-navgame'>
                <h2 className='title-navgame'>MyB<span className='letter-o'>o</span>ya</h2>
                <img src={logo} alt="Logo MyBoya" />
                <ul className="listaNav2">
                    <li>
                        <NavLink to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Nosotros</NavLink>
                    </li>
                </ul>
                <button className='btn-gamenav' onClick={show}>Cuenta</button>
            </nav>
            
        </header>
    )
}
