import "./ProductList.css"
import { useState, useEffect } from "react";
import axios from "axios";
import type { Product } from "../../types/product";
import { useCartStore } from "../../stores/useCartStore";
import { replacer } from "../../utils/serialization";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8000/products/");
      const products: Product[] = response.data;
      setProducts(products);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    let counters = new Map(cart?.counters);
    let purchasedProducts = new Map(cart?.purchasedProducts);
    
    counters.set(product.id, (counters.get(product.id) ?? 0) + 1);
    purchasedProducts.set(product.id, product);

    const newCart = {
      counters: counters,
      purchasedProducts: purchasedProducts,
      totalProducts: (cart?.totalProducts ?? 0) + 1,
      totalCost: (cart?.totalCost ?? 0) + product.price,
    };
    
    localStorage.setItem("cart", JSON.stringify(newCart, replacer));
    setCart(newCart);
  }

  return (
    <ul className="grid grid-cols-3 gap-12">
      {products.map((product) => (
        <li className="w-full h-135 relative bg-white rounded-lg overflow-hidden shadow-lg" key={`product-${product.id}`}>
          <div className="w-full aspect-square">
            <img className="w-full h-full object-cover" src={product.image} />
          </div>
          <div className="max-h-20 px-4 py-2">
            <span className="text-xl text-black font-semibold line-clamp-2"> {product.name} </span>
          </div>
          <div className="h-15 px-4 py-2">
            <span className="text-3xl text-gray-500"> $ {Intl.NumberFormat("es-CO").format(product.price)} </span>
          </div>
          <div className="w-full absolute bottom-0 px-4 pb-6">
            <div className="bg-blue-500 py-2 text-white text-center rounded" onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;