import "./InicioQuiz.css";
import foto_ranking from "../../assets/Icons/ranking.png";
import foto_insignia from "../../assets/Icons/insignia.png";
import foto_olas from "../../assets/Icons/ola+algas.png";
import { useNavigate } from "react-router-dom";

const InicioQuiz = () => {
  const navigate = useNavigate();

  const startQuiz = () => navigate("/quiz");

  return (
    <>
      <div className="container">
        <div className="rank">
          <button className="ranking ranking-insignia">
            Ranking <img src={foto_ranking} alt="icono del ranking" />
          </button>
          <button className="insignia ranking-insignia">
            Consigue tu insignia
            <img src={foto_insignia} alt="icono de la insignia" />
          </button>
        </div>
      </div>
      <div>
        <div className="InicioQuiz">
          <div>
            <button onClick={startQuiz} className="btnplay">
            Jugar
            </button>
          </div>
          <div>
            <button className="btnwho">¿Cómo Jugar?</button>
          </div>
        </div>
      </div>
      <aside className="datocurioso-contenedor">
        <div className="datocurioso">
          <h2>Dato Curioso...</h2>
          <p>
            El 96% de las reservas de cobalto, el 84% de níquel o el 79% de
            manganeso se encuentran en los yacimientos submarinos. Por
            consecuencia, la minería está comenzando a invadir suelos marinos,
            afectando la flora y fauna de nuestros océanos.
          </p>
        </div>
        <img src={foto_olas} alt="fondo olas" />
      </aside>
    </>
  );
};

export default InicioQuiz;
