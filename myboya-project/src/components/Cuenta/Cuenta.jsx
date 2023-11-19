import React, { useState } from "react";
import "./cuenta.css";
import estrella from "../../assets/Images/estrella.png";
import puntaje from "../../assets/Images/puntaje.png";
import insignia1 from "../../assets/Images/insignia1.png";
import insignia2 from "../../assets/Images/insignia2.png";
import insignia3 from "../../assets/Images/insignia3.png";
import insignia4 from "../../assets/Images/insignia4.png";
import { useNavigate } from "react-router-dom";

function Cuenta() {
  const navigate = useNavigate();
  const jugarQuiz = () => navigate("/playground");

  const [color, setColor] = useState("#80BACC");

  const cambiarColor1 = () => {
    const nuevoColor = "#80BACC";
    setColor(nuevoColor);
  };

  const cambiarColor2 = () => {
    const nuevoColor = "#78C36C";
    setColor(nuevoColor);
  };

  const cambiarColor3 = () => {
    const nuevoColor = "#CA80CC";
    setColor(nuevoColor);
  };

  const cambiarColor4 = () => {
    const nuevoColor = "#B23737";
    setColor(nuevoColor);
  };

  const cambiarColor5 = () => {
    const nuevoColor = "#FF8C00";
    setColor(nuevoColor);
  };

  const cambiarColor6 = () => {
    const nuevoColor = "#E3CE12";
    setColor(nuevoColor);
  };

  return (
    <div className="fondoCuenta">
      <h1>Mi perfil</h1>
      <div className="containerCuenta">
        <div className="containerPerfil">
          <div className="circulosColoresIcono">
            <div onClick={cambiarColor1} className="circuloColor1"></div>
            <div onClick={cambiarColor2} className="circuloColor2"></div>
            <div onClick={cambiarColor3} className="circuloColor3"></div>
            <div onClick={cambiarColor4} className="circuloColor4"></div>
            <div onClick={cambiarColor5} className="circuloColor5"></div>
            <div onClick={cambiarColor6} className="circuloColor6"></div>
          </div>
          <p className="opcionesUsuario">
            Clickea los colores para personalizar tu ícono
          </p>
          <div style={{ backgroundColor: color }} className="circuloPerfil">
            <img src={estrella}></img>
          </div>
          <h2>Nombre Usuario</h2>
          <p>email@email.com</p>
          <p className="opcionesUsuario">Modificar mis datos</p>
        </div>
        <div className="containerPuntos">
          <div className="puntajePerfil"></div>
          <img src={puntaje} className="img-puntaje"></img>
          <h2>PUNTAJE TOTAL ACUMULADO</h2>
          <p>50 Puntos</p>
          <div className="misInsignias"></div>
          <h2>MIS INSIGNIAS</h2>
          <img src={insignia1} className="img-insignia"></img>
          <p>Aprendiz</p>
          <img src={insignia2} className="img-insignia"></img>
          <p>Principiante</p>
          <img src={insignia3} className="img-insignia"></img>
          <p>Intermedio</p>
          <img src={insignia4} className="img-insignia"></img>
          <p>Avanzado</p>
        </div>
      </div>
      <button onClick={jugarQuiz} className="btn-volver">
        Volver a página principal
      </button>
    </div>
  );
}

export default Cuenta;
