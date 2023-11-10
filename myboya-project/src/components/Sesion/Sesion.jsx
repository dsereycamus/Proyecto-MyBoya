import './Sesion.css'

const Sesion = () => {
    return (
        <div className='containers-sesion'>
            <div className='formulario-sesion'>
                <h1>Inicio de sesion</h1>
                <form method="post">
                    <div className='usuario-sesion'>
                        <p>Inicia sesión con tu cuenta</p>
                        <label htmlFor="texto">Email</label>
                        <input type="text" required />
                        <label htmlFor="texto">Contraseña</label>
                        <input type="text" required />
                    </div>
                    <div className='btn-container-sesion'>
                        <button className="btn-sesion">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Sesion;