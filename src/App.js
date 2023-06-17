import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let qwer = 1;
  let [a, setA] = useState(123);

  setInterval(() => {
    setA(a + 10)
  }, 1000);
  return (
    <div>
      {a}
    </div>
  );
}

export default App;
