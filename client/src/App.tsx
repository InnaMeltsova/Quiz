import {useEffect, useState} from 'react'
import './App.css'

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
      <div>
          {message}
          <div>test</div>
      </div>
  )
}

export default App
