import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './components/image';

function App() {
  
  let [a, setA] = useState(123);

  let items = [
    {}
  ]

  setInterval(() => {
    setA(a + 1)
  }, 1000);

  return (
    <div className="App">
      <div className="App-header">
        <Image imgL={logo} classN="App-logo" text='Hello World!' ></Image>
        <Image imgL={logo} classN="App-logo" text='Hi World!' ></Image>
        {a}
      </div>
    </div>

  );
}

export default App;
