import "./Quiz.css";
import QUESTIONS from "../../../QUESTIONS.js";
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { IoCaretForward } from "react-icons/io5";
import { FaForward } from "react-icons/fa6";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30000);
  const [answers, setAnswers] = useState([]);
  const shuffledAnswers = useRef();

  if (isComplete) {
    return <Navigate to="/result" state={{ answers }} />;
  }

  const currentQuestionData = QUESTIONS[currentQuestion];
  if (!currentQuestionData) {
    return null;
  }

  console.log("RESET");

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime < 1000) {
          clearInterval(timer);
          handleNext();
          return 30000;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    shuffledAnswers.current = [...currentQuestionData.answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  function handleAnswer(selectedAnswer) {
    setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }

  function handleNext() {
    if (currentQuestion === QUESTIONS.length - 1) {
      setIsComplete(true);
    }
    setCurrentQuestion((prevState) => prevState + 1);
    setRemainingTime(60000);
  }

  return (
    <section className="quiz-page-container">
      <div className="quiz-container">
        <div className="quiz-page">
          <h1>{QUESTIONS[currentQuestion].question}</h1>
          <ul className="quiz-answers">
            {shuffledAnswers.current.map((answer, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => handleAnswer(answer)}
                    className="quiz-answer-button"
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="quiz-timer-buttons">
          <div className="quiz-timer-img">
            <img src="/Time.svg" alt="Timer Clock" />
            <p>{remainingTime / 1000}</p>
          </div>
          <div className="quiz-next-buttons">
            <button className="next-button" onClick={handleNext}>
              Next <IoCaretForward />
            </button>
            <button className="skip-button">
              skip <FaForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Quiz;
