import React from "react";
import "./inicio.css";
import quiz from "../../assets/Icons/Quiz.png";
import donacion from "../../assets/Icons/Donacion.png";
import podio from "../../assets/Icons/podio.png";
import mockupcito from "../../assets/Images/mockupcito.png"


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
      <div>
        <div className="inicio-block-3">
        <h2 className="num-usuarios">+1000</h2>
        <div>
          <h4 className="num-usuarios-text">usuarios ya se han unido para ayudar al planeta</h4>
        </div>
        <div>
          <h4 className="num-donacion-text">Gracias a la publicidad en MyBoya, se han donado</h4>
        </div>
        <div>
          <h2 className="num-donacion">$3.369.963</h2>
        </div>
        <div>
          <h4 className="num-donacion-text">a organizaciones que aportan a reducir la contaminación</h4>
        </div>
        </div>
        <div>
        <div>
          <h3>Únete a MyBoya</h3>
          </div>
        <div>
          <button className="btn-crearcuenta">Crear cuenta</button>
          </div>
        <div>
          <img className="mockup" src={mockupcito}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;