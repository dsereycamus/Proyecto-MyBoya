import { useState, useEffect } from "react";
import "./cuenta.css";
import estrella from "../../assets/Images/estrella.png";
import puntajeImg from "../../assets/Images/puntaje.png";
import insignia1 from "../../assets/Images/insignia1.png";
import insignia2 from "../../assets/Images/insignia2.png";
import insignia3 from "../../assets/Images/insignia3.png";
import insignia4 from "../../assets/Images/insignia4.png";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../context/useSession";

function Cuenta() {
  const { userData, reload } = useSession();
  const navigate = useNavigate();
  const jugarQuiz = () => navigate("/playground");
  const puntaje = userData?.score ?? 0;

  /* Personalizar color ícono */
  const [color, setColor] = useState("#80BACC");

  const cambiarColor1 = () => setColor("#80BACC");
  const cambiarColor2 = () => setColor("#78C36C");
  const cambiarColor3 = () => setColor("#CA80CC");
  const cambiarColor4 = () => setColor("#B23737");
  const cambiarColor5 = () => setColor("#FF8C00");
  const cambiarColor6 = () => setColor("#E3CE12");
  /* fin Personalizar color ícono */

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className="fondoCuenta">
      <h1 className="miPerfil">Mi perfil</h1>
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
          <p className="opcionesUsuario">Personaliza tu ícono</p>
          <div style={{ backgroundColor: color }} className="circuloPerfil">
            <img src={estrella} className="estrella"></img>
          </div>
          <h2 className="nombreUsuario">{userData?.name ?? ""}</h2>
          <p className="emailUsuario">{userData?.email ?? ""}</p>
          {/*           <p className="opcionesUsuario">Modificar mis datos</p> */}
        </div>
        <div className="containerPuntos">
          <div className="puntajePerfil">
            <img src={puntajeImg} className="img-puntaje"></img>
            <div className="contenedorpuntajeAcumulado">
              <h2 className="puntajeAcumulado">PUNTAJE TOTAL ACUMULADO</h2>
              <p className="cantidadPuntajeAcumulado">
                {userData?.score ?? 0} Puntos
              </p>
            </div>
          </div>
          <h2 className="misInsignias">MIS INSIGNIAS</h2>
          <div className="insigniasPerfil">
            {puntaje >= 1500 && (
              <div className="contenedor-insignia-padre">
                <div className="contenedor-insignia">
                  <img src={insignia1} className="img-insignia"></img>
                  <p className="tituloInsignia">Aprendiz</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 50 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia2} className="img-insignia"></img>
                  <p className="tituloInsignia">Principiante</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 300 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia3} className="img-insignia"></img>
                  <p className="tituloInsignia">Intermedio</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 1000 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia4} className="img-insignia"></img>
                  <p className="tituloInsignia">Avanzado</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 1500 puntos
                  </p>
                </div>
              </div>
            )}
            {puntaje >= 1000 && puntaje < 1500 && (
              <div className="contenedor-insignia-padre">
                <div className="contenedor-insignia">
                  <img src={insignia1} className="img-insignia"></img>
                  <p className="tituloInsignia">Aprendiz</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 50 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia2} className="img-insignia"></img>
                  <p className="tituloInsignia">Principiante</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 300 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia3} className="img-insignia"></img>
                  <p className="tituloInsignia">Intermedio</p>
                  <p className="puntosFaltantesInsignia">
                    Consigue 1000 puntos
                  </p>
                </div>
              </div>
            )}
            {puntaje >= 300 && puntaje < 1000 && (
              <div className="contenedor-insignia-padre">
                <div className="contenedor-insignia">
                  <img src={insignia1} className="img-insignia"></img>
                  <p className="tituloInsignia">Aprendiz</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 50 puntos
                  </p>
                </div>
                <div className="contenedor-insignia">
                  <img src={insignia2} className="img-insignia"></img>
                  <p className="tituloInsignia">Principiante</p>
                  <p className="puntosFaltantesInsignia">
                    Conseguiste 300 puntos
                  </p>
                </div>
              </div>
            )}
            {puntaje >= 50 && puntaje < 300 && (
              <div className="contenedor-insignia">
                <img src={insignia1} className="img-insignia"></img>
                <p className="tituloInsignia">Aprendiz</p>
                <p className="puntosFaltantesInsignia">Conseguiste 50 puntos</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button onClick={jugarQuiz} className="btn-cuenta">
        Volver a página principal
      </button>
    </div>
  );
}

export default Cuenta;
