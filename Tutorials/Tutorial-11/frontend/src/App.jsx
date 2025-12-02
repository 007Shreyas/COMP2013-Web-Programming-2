import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FormPage from "./Components/FormPage";
import LoginPage from "./Components/LoginPage";
import "./App.css";
import PrivatePage from "./Components/PrivatePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<FormPage />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
