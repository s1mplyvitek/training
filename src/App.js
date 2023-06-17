import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Image from './components/image';

function App() {
  
  let [a, setA] = useState(123);

  let items = [
    {imgL: logo, text:"1"},
    {imgL: logo, text:"2"}
  ];

  setInterval(() => {
    setA(a + 1)
  }, 1000);

  return (
    <div className="App">
      <div className="App-header">
        {items.map(item => <Image imgL={item.imgL} text={item.text}/>)}
        <Image imgL={logo} text='Hello World!' ></Image>
        <Image imgL={logo} text='Hi World!' ></Image>
        {a}
      </div>
    </div>

  );
}

export default App;
