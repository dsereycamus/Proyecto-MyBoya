import './Sesion.css'

const Sesion = () => {
    return (
        <div className='formulario'>
            <h1>Inicio de sesion</h1>
            <form method="post">
                <div>
                    <label htmlFor="texto">Nombre de usuario</label>
                    <input type="text" required />
                </div>
                <div class="contrasena">
                    <label htmlFor="texto">Contraseña</label>
                    <input type="text" required />
                </div>
                <button className="btn">Iniciar</button>
            </form>
        </div>
    )
}

export default Sesion;