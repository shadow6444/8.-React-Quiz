import { useEffect, useState } from "react";
import "./Answer.css";

const Answer = ({ options, onSelect, selectedAnswer }) => {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const shuffled = [...options];
    shuffled.sort(() => Math.random() - 0.5);

    setShuffledOptions(shuffled);
  }, [options]);

  return (
    <ul className="quiz-answers">
      {shuffledOptions &&
        shuffledOptions.map((option, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => onSelect(option)}
                className={`quiz-answer-button ${
                  option === selectedAnswer ? "selected" : ""
                }`}
              >
                {option}
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default Answer;
