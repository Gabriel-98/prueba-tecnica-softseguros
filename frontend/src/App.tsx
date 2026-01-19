import './App.css';
import { useState } from 'react';
import CartButton from './components/CartButton/CartButton';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

function App() {
  const [cartActive, setCartActive] = useState(false);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-20 bg-white">
        <div className="max-w-[1080px] h-full mx-auto flex flex-row justify-between items-center">
          <span className="text-4xl font-semibold"> TechStore </span>
          <CartButton onClick={() => setCartActive(!cartActive)} />
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="max-w-[1080px] mx-auto py-20">
          <h1 className="mb-12"> Catálogo de productos </h1>
          <ProductList/>
        </div>
      </div>
      { cartActive && 
        <Cart onClose={() => setCartActive(false)} />
      }
    </div>
  )
}

export default App
