import "./InicioQuiz.css";
import { useEffect, useState } from "react";
import foto_ranking from "../../assets/Icons/ranking.png";
import foto_pezpregunta from "../../assets/Images/pezpregunta.png";
import foto_olas from "../../assets/Icons/ola+algas.png";
import { useNavigate } from "react-router-dom";
import { getTopScores } from "../../services/getTopScore";

const InicioQuiz = () => {
  const [topScores, setTopScores] = useState([]);
  const [popOverVisible, setPopOverVisible] = useState(false);
  const navigate = useNavigate();

  const getScores = async () => {
    const result = await getTopScores();
    setTopScores(result.data);
  };

  const startQuiz = () => navigate("/quiz");
  const comoJugar = () => navigate("/instrucciones");
  const cuenta = () => navigate("/cuenta");

  const togglePopOver = () => {
    setPopOverVisible(!popOverVisible);
  };

  useEffect(() => {
    getScores();
  }, []);

  return (
    <>
      <div className="container">
        <div className="rank">
          <button className="ranking ranking-insignia" onClick={togglePopOver}>
            Ranking <img src={foto_ranking} alt="icono del ranking" />
          </button>
          <div className={`pop-over ${popOverVisible ? "visible" : ""}`}>
            <p>Ranking de Puntos</p>
            {topScores.map((score, idx) => (
              <div
                key={score.email}
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                  width: "250px",
                }}
              >
                <p style={{ color: "var(--clr-orange)" }}>
                  {score.score} puntos
                </p>
                <p
                  style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <span style={{ color: "var(--clr-orange-dark)" }}>
                    #{idx + 1}
                  </span>
                  {score.name}
                </p>
              </div>
            ))}
          </div>
          <button onClick={cuenta} className="insignia ranking-insigniaa">
            Desbloquea
            <br />
            insignias
            <img src={foto_pezpregunta} alt="icono de la insignia" />
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
            <button onClick={comoJugar} className="btnwho">
              ¿Cómo Jugar?
            </button>
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
        <img src={foto_olas} className="foto-ola" alt="fondo olas" />
      </aside>
    </>
  );
};

export default InicioQuiz;
