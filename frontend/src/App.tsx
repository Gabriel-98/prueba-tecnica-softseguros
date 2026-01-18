import './App.css'
import CartButton from './components/CardButton/CartButton'
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="w-full h-full bg-orange-200">
      <div className="w-full h-20 bg-white">
        <div className="max-w-[1080px] h-full mx-auto flex flex-row justify-between items-center">
          <span className="text-4xl font-semibold"> TechStore </span>
          <CartButton/>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="max-w-[1080px] mx-auto py-20">
          <h1 className="mb-12"> Catálogo de productos </h1>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default App
