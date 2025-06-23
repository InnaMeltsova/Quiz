import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import QuizGamePage from "./pages/QuizGamePage/QuizGamePage.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizGamePage />} />
          </Routes>
      </Router>
  )
}

export default App
