import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import QUESTIONS from "../../../constant";
import "./Result.css";

const Result = () => {
  const { state } = useLocation();

  const userAnswers = state?.userAnswers;

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  // const wrongAnswers = userAnswers.filter(
  //   (answer, index) => answer !== QUESTIONS[index].answers[0]
  // );

  const skippedAnswers = userAnswers.filter((answer) => answer === null);

  const correctAnswersShare = Math.round(
    (correctAnswers.length / QUESTIONS.length) * 100
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / QUESTIONS.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <section className="result-page-container">
      <div className="result-summary">
        <img src="/quiz-complete.avif" alt="quiz complete trophy" />
        <h1>Quiz Completed!</h1>
        <div className="summary-score">
          <div className="skipped-answer-share">
            <h2>{skippedAnswersShare}%</h2>
            <h4>skipped</h4>
          </div>
          <div className="correct-answer-share">
            <h2>{correctAnswersShare}%</h2>
            <h4>correct</h4>
          </div>
          <div className="wrong-answer-share">
            <h2>{wrongAnswersShare}%</h2>
            <h4>wrong</h4>
          </div>
        </div>
        <hr />
        <div className="summary-wrong-answers">
          <ul className="wrong-answers">
            {correctAnswersShare === 100 ? (
              <>
                <Confetti height='750px' gravity={0.2}/>
                <li className="congrats-message">
                  {" "}
                  <h1>
                    🎉Perfect score!
                    <br />
                    You're a React master!
                  </h1>
                </li>
              </>
            ) : (
              userAnswers.map(
                (userAnswer, index) =>
                  userAnswer !== QUESTIONS[index].answers[0] && (
                    <li key={index}>
                      <div className="question-number">
                        <h2>Question: {index + 1}</h2>
                      </div>
                      <div className="question-content">
                        <h3>{QUESTIONS[index].question}</h3>
                        <p className="wrong-user-answer">
                          Your answer:{" "}
                          {!userAnswer ? (
                            <span className="skipped">Skipped</span>
                          ) : (
                            <span className="wrong">{userAnswer}</span>
                          )}
                        </p>
                        <p className="correct-answer">
                          CorrectAnswer:{" "}
                          <span>{QUESTIONS[index].answers[0]}</span>
                        </p>{" "}
                      </div>
                    </li>
                  )
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Result;
