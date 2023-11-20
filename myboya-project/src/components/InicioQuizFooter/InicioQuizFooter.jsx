import "./InicioQuizFooter.css";
import seawhalequiz from "../../assets/Images/background-seaweed.png";

const InicioQuizFooter = () => {
  return (
    <footer className="game-footer">
      <div className="right-seawhale-quiz">
        <img src={seawhalequiz} alt="seawhale-quiz" className="seawhalequiz" />
      </div>
    </footer>
  );
};

export default InicioQuizFooter;
