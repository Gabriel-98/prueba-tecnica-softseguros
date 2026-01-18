import "./ProductList.css"
import { useState, useEffect } from "react";
import axios from "axios";
import type { Product } from "../../types/product";
import { useCartStore } from "../../stores/useCartStore";

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
    console.log("Add to cart");
    setCart({
      counters: (cart) ? cart.counters.set(product.id, (cart.counters.get(product.id) || 0) + 1) :
        new Map([[product.id, 1]]),
      purchasedProducts: (cart) ? cart.purchasedProducts.set(product.id, product) :
        new Map([[product.id, product]]),
      totalProducts: (cart) ? cart.totalProducts + 1 : 1,
      totalCost: (cart) ? cart.totalCost + product.price : product.price,
    });
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