import preguntas from "./preguntas";
import useQuiz from "./useQuiz";
import "./quiz.css";

function Quiz() {

  const {
    score,
    timer,
    selectedAnswer,
    selectAnswer,
    nextQuestion,
    showBar,
    currentQuestion,
  } = useQuiz();

  const isFinished = currentQuestion === preguntas.length;

  console.log();

  if (isFinished)
    return (
      <section>
        <div className="juego-terminado">
          <span>
            Obtuviste {score} de {preguntas.length}{" "}
          </span>
          <button
            className="quiz-button"
            onClick={() => window.location.reload()}
          >
            Volver a jugar
          </button>
        </div>
      </section>
    );

  return (
    <section className="container">
      <div className="preguntas">
        <div className="numero-pregunta">
          <span> Pregunta {currentQuestion + 1} de</span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[currentQuestion].titulo}
        </div>
      </div>
      <div className="alternativas">
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
        <div className="background-timer-bar">
          <div
            className="timer-bar"
            style={{ width: `${(1 - timer / 15) * 100}%` }}
          />
        </div>
      )}
      {timer === 0 && selectedAnswer === undefined && (
        <button className="quiz-button" onClick={nextQuestion}>
          Continuar
        </button>
      )}
      {selectedAnswer !== undefined && (
        <div className="resultado">
          {preguntas[currentQuestion].opciones[selectedAnswer].isCorrect
            ? "¡Respuesta correcta!"
            : "Respuesta incorrecta"}
          <button className="quiz-button" onClick={nextQuestion}>
            Continuar
          </button>
        </div>
      )}
    </section>
  );
}

export default Quiz;
