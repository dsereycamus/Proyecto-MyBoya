/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnwser] = useState(undefined);
  const [showBar, setShowBar] = useState(true);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);

  const nextQuestion = () => {
    setCurrentQuestion((x) => x + 1);
    setTimer(15);
    setSelectedAnwser(undefined);
    setShowBar(true);
  };

  const selectAnswer = (isCorrect, e, idx) => {
    if (isCorrect) setScore(score + 1);

    e.target.classList.add("answer-checking");
    setShowBar(false);
    setTimeout(() => {
      e.target.classList.add(isCorrect ? "answer-correct" : "answer-incorrect");
      setSelectedAnwser(idx);
    }, 2000);
  };

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
  };
};

export default useQuiz;
