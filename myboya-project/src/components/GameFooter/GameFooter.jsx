import "./GameFooter.css";
import tortugame from "../../assets/Images/tortuga.png";
import seawhalegame from "../../assets/Images/background-seaweed.png";
import footerquiz from "../../assets/Images/quizfooter.png";

const GameFooter = () => {
  return (
    <footer className="game-footer">
      <img src={tortugame} alt="tortugame" className="tortugame" />
      <div className="right-seawhale-game">
        <img src={seawhalegame} alt="seawhale-game" className="seawhalegame" />
      </div>
      <img src={footerquiz} alt="footer-quiz" className="footer-quiz" />
    </footer>
  );
};

export default GameFooter;
