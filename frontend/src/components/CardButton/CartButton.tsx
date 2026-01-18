import "./CartButton.css"
import { Icon } from "@iconify/react"

const CartButton = () => {
  return (
    <div className="bg-white relative px-4 py-3 border-1 rounded">
      <Icon icon="mdi:cart" className="w-8 h-8"></Icon>
      <span className="cart-button-count">0</span>
    </div>
  )
}

export default CartButton;