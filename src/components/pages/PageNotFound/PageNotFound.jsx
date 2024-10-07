import { Link } from "react-router-dom";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found-text">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="return-home-link">
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
