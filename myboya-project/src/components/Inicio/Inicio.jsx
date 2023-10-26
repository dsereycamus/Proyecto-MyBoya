import React from "react";
import "./inicio.css";


function Inicio() {
  return (
    <div className="pagina-inicio">
      <div className="inicio-block-1">
        <p>Bienvenido a</p>
        <h1>La plataforma que se la juega por la vida submarina</h1>
        <button>Empezar</button>
      </div>
      <div className="inicio-block-2">
        <p>
          Al registrarte, puedes acceder a puzzles de pregunta/respuesta que te
          ayudarán a conocer el impacto que generan nuestras acciones en la
          contaminación de la vida submarina. Podrás acumular puntos para
          desbloquear insignias y posicionarte en el ranking. Al visualizar
          publicidad dentro de nuestra plataforma, estarás ayudando a donar
          dinero a organizaciones que buscan reducir la contaminación.
        </p>
      </div>
    </div>
  );
}

export default Inicio;
