import './App.css';

import DishList from "./components/Menu";
import MenuOne from "./components/OneMenu";



function App() {

  let dish = [

    {
      name: 'buuza',
      price: 70,
      expense: 0,
      ingridients: ['meat', 'water', 'solt', 'onion',],
    },

    {
      name: 'blackSoup',
      price: 100,
      expense: 0,
      ingridients: ['meat', 'water', 'solt',],
    },

    {
      name: 'brtuch',
      price: 150,
      expense: 0,
      ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
    }
  ];

  return (
    <>
      <div>Hello world!</div>
      <div>
        <h1>Menu</h1>
        <MenuOne menu={dish} />
        {dish.map((item) => (
          <DishList item={item} />
        ))}

      </div>
    </>

  );
};


export default App;