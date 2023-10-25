import logo from "../../../public/myboya-logo.png"

const Navbar = () => {
    return (
        <>
            <div>
                <img src={ logo } alt="Logo MyBoya" />
            </div>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Partner</a></li>
                    <li><a href="">Noticias</a></li>
                    <li><a href="">Contactanos</a></li>
                </ul>
            </nav>
        </>
    )
}



export default Navbar; 

