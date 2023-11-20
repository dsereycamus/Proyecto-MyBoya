import { useState } from "react";
import "./Sesion.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSession } from "../../context/useSession";

const Sesion = () => {
  const { login } = useSession();
  const navigate = useNavigate();
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

    try {
      const response = await login(email, password);

      if (response) {
        toast.success("Has iniciado sesión con éxito");
        navigate("/playground");
      }
    } catch (error) {
      toast.error("Error al procesar inicio de sesión. Inténtalo más tarde.");
    }
  };

  return (
    <div className="containers-sesion">
      <div className="formulario-sesion">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="usuario-sesion">
            <p>Inicia sesión con tu cuenta</p>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              style={{ color: "white" }}
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
