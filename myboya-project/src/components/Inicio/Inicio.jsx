import React from "react";
import "./inicio.css";
import quiz from "../../assets/Icons/Quiz.png";
import donacion from "../../assets/Icons/Donacion.png";
import podio from "../../assets/Icons/podio.png";


function Inicio() {
  return (
    <div className="pagina-inicio">
      <div className="inicio-block-1">
        <p>Bienvenido a</p>
        <h1>La plataforma que se la juega por la vida submarina</h1>
        <button>Empezar</button>
      </div>
      <div className="inicio-block-2">
      <div>
      <h3>Ayuda al planeta jugando y aprendiendo</h3>
      </div>
      <div className="inicio-block-2-2">
      <div>
        <img src={quiz}/>
        <p>Al registrarte, puedes acceder a puzzles de pregunta/respuesta que te ayudarán a conocer el impacto que generan nuestras acciones en la contaminación de la vida submarina.</p>
      </div>
      <div>
        <img src={donacion}/>
        <p>Podrás acumular puntos para desbloquear insignias y posicionarte en el ranking.</p>
      </div>
      <div>
        <img src={podio}/>
        <p>Al visualizar publicidad dentro de MyBoya, estarás ayudando a donar dinero a organizaciones que buscan reducir la contaminación marina.</p>
      </div>
      </div>

      </div>
    </div>
  );
}

export default Inicio;
