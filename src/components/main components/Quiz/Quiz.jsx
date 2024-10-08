import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretForward } from "react-icons/io5";
import { FaForward } from "react-icons/fa6";
import Answer from "./Answer";
import Timer from "./Timer";
import QUESTIONS from "../../../constant";
import "./Quiz.css";

const Quiz = () => {
  const navigation = useNavigate();
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(false);
  const [skipMessage, setSkipMessage] = useState(false);
  const currentQuestionIndex = userAnswers.length;

  useEffect(() => {
    if (userAnswers.length === QUESTIONS.length) {
      navigation("/result", { replace: true, state: { userAnswers } });
    }
  }, [userAnswers, navigation]);

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setSelectedAnswer(answer);
      setError(false);
    },
    [setSelectedAnswer]
  );

  function handleError() {
    setError(true);
  }

  function handleSkipMessage() {
    setSkipMessage(true);
    setTimeout(() => {
      setSkipMessage(false);
    }, 3000);
  }

  function handleSkip() {
    setUserAnswers((prevAnswers) => [...prevAnswers, null]);
    setError(false);
    setSelectedAnswer(null);
  }

  function handleNext() {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    setSelectedAnswer(null);
  }

  return (
    currentQuestionIndex < QUESTIONS.length && (
      <section className="quiz-page-container">
        <div className="quiz-container">
          <div className="quiz-page">
            <h1 className="quiz-question">
              {QUESTIONS[currentQuestionIndex].question}
            </h1>
            <Answer
              options={QUESTIONS[currentQuestionIndex].answers}
              onSelect={handleSelectAnswer}
              selectedAnswer={selectedAnswer}
            />
          </div>
          <div className="quiz-timer-buttons">
            <Timer
              onTimeOut={handleSkip}
              skipMessageTimer={handleSkipMessage}
              onSkip={userAnswers.length}
            />
            <div className="quiz-next-buttons">
              <button
                onClick={!selectedAnswer ? handleError : handleNext}
                className="next-button"
              >
                Next <IoCaretForward />
              </button>
              <button onClick={handleSkip} className="skip-button">
                Skip <FaForward />
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
          {skipMessage && (
            <p className="skip-message">Time's up! Question was skipped.</p>
          )}
        </div>
      </section>
    )
  );
};
export default Quiz;
