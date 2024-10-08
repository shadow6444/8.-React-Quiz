import "./Quiz.css";
import QUESTIONS from "../../../QUESTIONS.js";
import { IoCaretForward } from "react-icons/io5";
import { FaForward } from "react-icons/fa6";
import { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import Question from "./Question";
import Answer from "./Answer";
import Timer from "./Timer";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(false);
  const currentQuestionIndex = userAnswers.length;

  const quizFinshed = userAnswers.length === QUESTIONS.length;

  function handleError() {
    setError(true);
  }

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setSelectedAnswer(answer);
      setError(false);
    },
    [setSelectedAnswer]
  );

  function handleSkip() {
    setUserAnswers((prevAnswers) => [...prevAnswers, null]);
    setSelectedAnswer(null);
  }

  function handleNext() {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    setSelectedAnswer(null);
  }

  if (quizFinshed) {
    return <Navigate to="/result" state={{ userAnswers, QUESTIONS }} />;
  }
  return (
    <section className="quiz-page-container">
      <div className="quiz-container">
        <div className="quiz-page">
          <Question
            currentQuestion={QUESTIONS[currentQuestionIndex].question}
          />
          <Answer
            options={QUESTIONS[currentQuestionIndex].answers}
            onSelect={handleSelectAnswer}
            selectedAnswer={selectedAnswer}
          />
        </div>
        <div className="quiz-timer-buttons">
          <Timer onTimeOut={handleSkip} onReset={userAnswers.length}/>
          <div className="quiz-next-buttons">
            <button
              onClick={!selectedAnswer ? handleError : handleNext}
              className="next-button"
            >
              Next <IoCaretForward />
            </button>
            <button onClick={handleSkip} className="skip-button">
              skip <FaForward />
            </button>
          </div>
        </div>
        {error && (
          <h4 className="error">
            Select an option or
            <br />
            Click "Skip" if you don't know the answer
          </h4>
        )}
      </div>
    </section>
  );
};
export default Quiz;
