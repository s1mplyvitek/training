import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='App p-3'>
      <div className='container mx-auto grid justify-end p-2 rounded shadow-lg bg-slate-200'>
        <div className='text-2xl'>Корзина</div>
        <div>Количество: {cart.length}</div>
        <div>Сумма: { }</div>
      </div>
      <div className='pt-3'>
        <Menu />
      </div>
    </div>
  );
};


export default App;