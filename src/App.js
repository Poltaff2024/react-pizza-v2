import React from 'react';
import './scss/app.scss';
import Sort from './components/Sort';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

function App() {
 return (
  <div className="wrapper">
    <div className="block1">
      <ul className="text2">
        <li className="hello3">TEST 1111</li>
        <li className="hello3">TEST 2222</li>
        <li className="hello3">TEST 3333</li>
        <li className="hello3">TEST 4444</li>
        <li className="hello3">TEST 5555</li>
      </ul>
    </div>
 <Header />
  <div className="content">
    <div className="container">
      <div className="content__top">
 <Categories />
 <Sort />
      
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          pizzas.map(obj => <PizzaBlock {...obj} />)
        }
   
     
      </div>
    </div>
  </div>
</div>
 );
  
};
export default App;
