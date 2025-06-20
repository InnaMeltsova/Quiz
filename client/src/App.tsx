import {useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  const [message, setMessage] = useState('');

  useEffect( () => {
      const fetchText = async () => {
          const res = await fetch('http://10.0.0.148:3000/hello');
          const text = await res.text();
          setMessage(text);
      }
      fetchText();
  }, []);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
  )
}

export default App
