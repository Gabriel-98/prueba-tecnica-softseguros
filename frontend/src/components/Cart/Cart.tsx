import "./Cart.css"
import { Icon } from "@iconify/react"
import { useCartStore } from "../../stores/useCartStore";

type CartProps = {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-row justify-center items-center bg-black/90">
      <div className="w-[530px] h-[460px] relative bg-white rounded-lg p-4">
        <div className="absolute top-2 right-2 bg-red-500 text-white font-semibold px-2 py-1 rounded" onClick={onClose}> X </div>
        <span className="text-2xl text-blue-500 font-bold"> Carrito de compras </span>
        <div className="w-[500px] h-[300px] flex flex-col gap-4 my-4 pe-4 overflow-y-auto scrollbar-thin">
          {cart &&
            Array.from(cart.purchasedProducts).map(([id, product]) => 
              <div className="w-full h-[120px] flex flex-row border-1 border-gray-200 rounded">
                <div className="aspect-square h-full">
                  <img className="w-full h-full object-cover p-2" src={product.image} />
                </div>
                <div className="w-full flex flex-col ps-4 pe-2">
                  <div className="flex flex-row items-center my-2">
                    <span className="flex-1 line-clamp-2"> {product.name} </span>
                    <Icon icon="bxs:trash" className="w-8 h-8" />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <span className="font-semibold"> $ {Intl.NumberFormat("es-CO").format(product.price)} </span>
                      <span className="text-gray-500"> x unidad </span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="w-6 h-6 bg-blue-500 text-white font-semibold text-center rounded"> - </div>
                      <input className="w-6 h-6 text-blue-500 font-semibold text-center border-1 border-blue-500 rounded" type="text" value="0"  />
                      <div className="w-6 h-6 bg-blue-500 text-white font-semibold text-center rounded"> + </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-blue-500 font-semibold"> $ {Intl.NumberFormat("es-CO").format(product.price * (cart.counters.get(id) ?? 0))} </span>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <span className="text-base"> Total </span>
            <span className="text-xl text-blue-500 font-semibold"> $ {Intl.NumberFormat("es-CO").format(cart?.totalCost ?? 0)} </span>
          </div>
          <div className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"> Guardar </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;