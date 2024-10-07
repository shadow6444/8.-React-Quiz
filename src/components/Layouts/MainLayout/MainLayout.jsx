import "./MainLayout.css";

import quizLogo from "../../../assets/logo.png";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="quiz-grad-header">
        <div className="quiz-grad-logo">
          <img src={quizLogo} alt="quiz grad"/>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default MainLayout;
