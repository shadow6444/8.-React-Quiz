import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./components/common components/MainLayout";
import StartPage from './components/main components/StartPage'
import PageNotFound from "./components/main components/PageNotFound";
import Quiz from "./components/main components/Quiz";
import Result from "./components/main components/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StartPage />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
