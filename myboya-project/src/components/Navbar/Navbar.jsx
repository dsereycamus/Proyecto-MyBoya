import logo from "../../../public/myboya-logo.png"
import './Nav.css'

const Navbar = () => {
    return (
        <header className="header">
            <div className="logoNav">
                <img src={ logo } alt="Logo MyBoya" />
            </div>
            <nav>
                <ul className="listaNav">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Partner</a></li>
                    <li><a href="">Noticias</a></li>
                    <li><a href="">Contáctanos</a></li>
                </ul>
            </nav>
            <a href="" className="btn2"><button>Inicio sesión</button></a>
            <a href="" className="btn3"><button>¡Regístrate!</button></a>
        </header>
    )
}



export default Navbar; 

