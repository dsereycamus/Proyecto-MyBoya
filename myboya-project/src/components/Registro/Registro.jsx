import React from "react";
import './Registro.css'

const Registro = () => {
    return (
        <div className="containers-registro">
            <div className="formulario-registro">
                <h1>Crea tu cuenta en MyBoya</h1>
                <form action="">
                    <div className="usuario-registro">
                        <label htmlFor="text">Nombre y Apellido</label>
                        <input type="text" />
                        <label htmlFor="text">Email</label>
                        <input type="text" />
                        <label htmlFor="text">Contraseña</label>
                        <input type="text" />
                        <label htmlFor="text">Repetir Contraseña</label>
                        <input type="text" />
                    </div>
                    <div className="btn-container-registro">
                        <button className="btn-registro">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro;