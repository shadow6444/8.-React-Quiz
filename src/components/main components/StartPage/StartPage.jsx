import { Link } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  return (
    <section className="start-page-container">
      <div className="start-page-text">
        <h2>
          Test
          <br />
          your React skills
          <br />
          with quick, fun questions!
        </h2>
        <Link to='quiz' className="start-quiz">Start Quiz</Link>
      </div>
      <div className="start-page-image">
        <img src="/start-page.svg" alt="start page image" />
      </div>
    </section>
  );
};

export default StartPage;
