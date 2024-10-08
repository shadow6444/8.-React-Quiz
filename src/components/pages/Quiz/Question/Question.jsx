import { memo } from "react";
import "./Question.css";

const Question = ({ currentQuestion }) => {
  return <h1 className="quiz-question">{currentQuestion}</h1>;
};

export default memo(Question);
