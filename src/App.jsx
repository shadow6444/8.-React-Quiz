import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainLayout from "./components/Layouts/MainLayout";
import StartPage from "./components/pages/StartPage";
import PageNotFound from "./components/pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StartPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
