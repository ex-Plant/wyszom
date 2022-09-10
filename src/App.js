import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import {useEffect, useRef, useState} from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
        );
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }
    else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
        );
    }
  }

  const onClear = () => {
    setCartItems([])
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} ></Header>
      <div className='appMain'>
        <Main onAdd={onAdd} products={products}></Main>
        <Basket  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} onClear={onClear}></Basket>
      </div>
    </div>
  );
}

export default App;
