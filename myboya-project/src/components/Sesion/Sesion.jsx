import { useState } from "react";
import { login } from "../../services/login";
import "./Sesion.css";

const Sesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login(email, password);

    console.log(response);
  };

  return (
    <div className="containers-sesion">
      <div className="formulario-sesion">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="usuario-sesion">
            <p>Inicia sesión con tu cuenta</p>
            <label htmlFor="texto">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="texto">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="btn-container-sesion">
            <button className="btn-sesion">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sesion;
