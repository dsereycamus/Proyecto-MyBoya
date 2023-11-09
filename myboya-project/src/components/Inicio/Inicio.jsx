import React from "react";
import "./inicio.css";
import quiz from "../../assets/Icons/Quiz.png";
import donacion from "../../assets/Icons/Donacion.png";
import podio from "../../assets/Icons/podio.png";
import mockupcito from "../../assets/Images/mockupcito.png";
import heroe from "../../assets/Images/heroe.png";
import ballena from "../../assets/Images/ballenita.png";
import halo from "../../assets/Images/halo.png";
import peces from "../../assets/Images/pececitos.png";
import tortuga from "../../assets/Images/tortuga.png";
import {Link} from "react-router-dom";

function Inicio() {
  return (
    <div className="fondos">
            <img src={heroe} className="img-heroe"></img>
    <div className="pagina-inicio">
      <section className="heroe">
        <p>Bienvenido a</p>
        <h1>La plataforma que se la juega por la vida submarina</h1>
        <Link to="/playground"><button className="btn-crearcuenta">Empezar</button></Link>
      </section>
      <div className="propuesta-valor">
        <h3>Ayuda al planeta jugando y aprendiendo</h3>
        <div className="propuesta-valor-cuadros">
          <div>
            <img src={quiz} />
            <p>
              Al registrarte, puedes acceder a puzzles de pregunta y respuesta
              que te ayudarán a conocer el impacto que generan nuestras acciones
              en la contaminación de la vida submarina.
            </p>
          </div>
          <div>
            <img src={donacion} />
            <p>
              Podrás acumular puntos para desbloquear insignias y posicionarte
              en el ranking.
            </p>
          </div>
          <div>
            <img src={podio} />
            <p>
              Al visualizar publicidad dentro de MyBoya, estarás ayudando a
              donar dinero a organizaciones que buscan reducir la contaminación
              marina.
            </p>
          </div>
        </div>
      </div>
      <div className="seccion-numeros">
        <img src={ballena} className="ballena-seccionnumeros"/>
        <h2 className="num-usuarios">+1000</h2>
        <h4 className="num-usuarios-text">
          usuarios ya se han unido para ayudar al planeta
        </h4>
        <img src={halo} className="halo-seccionnumeros"/>
        <h4 className="num-donacion-text-1">
          Gracias a la publicidad en MyBoya, se han donado
        </h4>
        <h2 className="num-donacion">$3.369.963</h2>
        <h4 className="num-donacion-text-2">
          a organizaciones que aportan a reducir la contaminación
        </h4>
        <img src={peces} className="peces-seccionnumeros"/>
      </div>
      <section className="mockup-container">
        <div className="mockup-texto">
          <h3>Únete a MyBoya</h3>
          <button className="btn-crearcuenta">Crear cuenta</button>
        </div>
        <div>
          <img className="mockup" src={mockupcito} alt="MockUp MyBoya" />
        </div>
        <img src={tortuga} className="tortuga"/>
      </section>
    </div>
    </div>
  );
}

export default Inicio;
