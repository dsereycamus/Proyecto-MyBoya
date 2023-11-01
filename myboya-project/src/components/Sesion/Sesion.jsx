import './Sesion.css'

const Sesion = () => {
    return (
        <main className='containers'>
            <div className='formulario'>
                <h1>Inicio de sesion</h1>
                <form method="post">
                    <div className='usuario'>
                        <p>Inicia sesión con tu cuenta</p>
                        <label htmlFor="texto">Email</label>
                        <input type="text" required />
                    </div>
                    <div class='usuario'>
                        <label htmlFor="texto">Contraseña</label>
                        <input type="text" required />
                    </div>
                    <div className='btn-container'>
                        <button className="btn">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Sesion;