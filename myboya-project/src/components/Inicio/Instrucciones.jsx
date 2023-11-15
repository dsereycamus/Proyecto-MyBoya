import { Form } from "react-router-dom";
import React from "react";
import "./Instrucciones.css";
import video from "../../assets/Images/instrucciones.gif";
import { useNavigate } from "react-router-dom";

function Instrucciones() {
  const navigate = useNavigate();
  const jugarQuiz = () => navigate("/playground");
  
  return (
    <div className="fondoPaginaInstrucciones">
      <div className="containerInstrucciones">
        <div className="textoInstrucciones">
          <h1>¿Cómo jugar?</h1>
          <ol>🧐 Se te presentará una pregunta con 3 alternativas, donde sólo una es correcta.</ol>
          <ol>⏱ Cada pregunta puedes responderla dentro de 30 segundos.</ol>
          <ol>🌊 Responderás a 10 preguntas en la primera fase.</ol>
          <ol>🖐🏻 Ganarás 5 puntos por respuesta correcta.</ol>
          <ol>✌🏻 Ganarás 2 puntos por respuesta incorrecta.</ol>
          <button onClick={jugarQuiz} className="botonJugar">Jugar</button>
        </div>
        <div className="videoInstrucciones">
          <img src={video}></img>
        </div>
      </div>
    </div>
  );
}

export default Instrucciones;
