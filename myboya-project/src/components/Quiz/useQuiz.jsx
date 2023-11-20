/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from "react-toastify";
import { useSession } from "../../context/useSession";
import { updateScore as updateScoreService } from "../../services/updateScore";
import { useState, useEffect } from "react";

const useQuiz = () => {
  const { token } = useSession();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);
  const [showBar, setShowBar] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [showAdvertisement, setShowAdvertisement] = useState(false);

  const nextQuestion = () => {
    setCurrentQuestion((x) => x + 1);
    setTimer(30);
    setSelectedAnswer(undefined);
    setShowBar(true);
  };

  const updateScore = async () => {
    const result = await updateScoreService(token, score);

    if (result.status === 200) toast("Se ha actualizado tu puntaje!");

    console.log("Updated");

    return;
  };

  const resetQuestionsAnswered = () => {
    setQuestionsAnswered(0);
    setShowAdvertisement(false); // Oculta el modal de publicidad
  };

  const selectAnswer = (isCorrect, e, idx) => {
    if (isCorrect) {
      setScore(score + 5);
    } else {
      setScore(score + 2); // Agrega 2 puntos si la respuesta no es precisa
    }

    e.target.classList.add("answer-checking");
    setShowBar(false);
    setTimeout(() => {
      e.target.classList.add(isCorrect ? "answer-correct" : "answer-incorrect");
      setSelectedAnswer(idx);
      setQuestionsAnswered(questionsAnswered + 1);
    }, 2000);
  };

  useEffect(() => {
    if (questionsAnswered === 4) {
      setShowAdvertisement(true);
      setQuestionsAnswered(0); // Reinicia el contador de preguntas respondidas
    }
  }, [questionsAnswered]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (timer > 0 && !selectedAnswer) setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [timer]);

  return {
    score,
    showBar,
    timer,
    currentQuestion,
    selectedAnswer,
    nextQuestion,
    selectAnswer,
    questionsAnswered,
    resetQuestionsAnswered,
    showAdvertisement,
    updateScore,
  };
};

export default useQuiz;
