/* eslint-disable react-hooks/exhaustive-deps */
import preguntas from "./preguntas";
import useQuiz from "./useQuiz";
import "./quiz.css";
import clock from "../../assets/Icons/clock.png";
import Modal from "../Modal/Modal";
import whaler from "../../assets/Images/whale-right.png";
import whalel from "../../assets/Images/whale-left.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Quiz() {
  const {
    score,
    timer,
    selectedAnswer,
    selectAnswer,
    nextQuestion,
    showBar,
    currentQuestion,
    resetQuestionsAnswered,
    showAdvertisement,
    updateScore,
  } = useQuiz();

  const isFinished = currentQuestion === preguntas.length;

  useEffect(() => {
    if (currentQuestion === preguntas.length) {
      updateScore();
    }
  }, [currentQuestion]);

  if (isFinished)
    return (
      <section>
        <div className="game-over">
          <div className="total-score">
            <span className="you-got">Conseguiste </span>{" "}
            <span className="score">{score} puntos</span>{" "}
            <img src={whalel} className="whale-left" alt="whale-left" />
            <img src={whaler} className="whale-right" alt="whale-right" />
          </div>
          <Link to="/playground">
            <button
              className="quiz-button play-button"
              // onClick={() => window.location.reload()}
            >
              Volver a jugar
            </button>
          </Link>
        </div>
      </section>
    );

  return (
    <section className="container-question">
      <Modal isOpen={showAdvertisement} onClose={resetQuestionsAnswered} />
      <div className="preguntas">
        <div className="numero-pregunta">
          <span className="question-number">
            {" "}
            Pregunta {currentQuestion + 1}
          </span>
        </div>
        <div className="title-question">
          <div
            style={{ lineHeight: 1, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: preguntas[currentQuestion].titulo,
            }}
          />
        </div>
      </div>
      <div
        className="alternatives"
        style={{ lineHeight: 1, textAlign: "center" }}
      >
        {preguntas[currentQuestion].opciones.map((respuesta, idx) => (
          <button
            className="quiz-button"
            style={{
              opacity: showBar ? 1 : selectedAnswer === idx ? 1 : 0,
            }}
            disabled={timer === 0 || selectedAnswer || !showBar}
            key={respuesta.textoRespuesta}
            onClick={(e) => selectAnswer(respuesta.isCorrect, e, idx)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
      {showBar && timer !== 0 && (
        <div className="timer-bar-container">
          <img src={clock} alt="clock icon" />
          <div className="background-timer-bar">
            <div
              className="timer-bar"
              style={{ width: `${(1 - timer / 30) * 100}%` }}
            />
          </div>
        </div>
      )}

      {timer === 0 && selectedAnswer === undefined && (
        <div className="quiz-buttonunanswered">
          <p className="timeisover">¡Se acabó el tiempo!</p>
          <button
            className="quiz-button  quiz-buttonnext "
            onClick={nextQuestion}
          >
            Siguiente
          </button>
        </div>
      )}
      {selectedAnswer !== undefined && (
        <div className="result">
          {preguntas[currentQuestion].opciones[selectedAnswer].isCorrect ? (
            <p className="correct-answertext">¡Respuesta acertada!</p>
          ) : (
            <p className="wrong-answertext">
              ¡Respuesta correcta, pero no precisa!
            </p>
          )}
          <button
            className="quiz-button quiz-buttonnext"
            onClick={nextQuestion}
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}

export default Quiz;
