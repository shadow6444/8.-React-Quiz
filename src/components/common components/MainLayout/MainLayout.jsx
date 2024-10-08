import { Link, Outlet } from "react-router-dom";
import quizLogo from "../../../assets/logo.png";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <header className="quiz-grad-header">
        <Link to='/' className="quiz-grad-logo">
          <img src={quizLogo} alt="quiz grad"/>
        </Link>
      </header>
      <Outlet />
    </>
  );
};
export default MainLayout;
