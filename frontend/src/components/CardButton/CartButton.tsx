import "./CartButton.css"
import { Icon } from "@iconify/react"
import { useCartStore } from "../../stores/useCartStore"

const CartButton = () => {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);

  return (
    <div className="bg-white relative px-4 py-3 border-1 rounded">
      <Icon icon="mdi:cart" className="w-8 h-8"></Icon>
      <span className="cart-button-count"> {cart?.totalProducts} </span>
    </div>
  )
}

export default CartButton;