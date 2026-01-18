import { create } from "zustand"
import type { Product } from "../types/product"

type Cart = {
    counters: Map<number, number>;
    purchasedProducts: Map<number, Product>;
    totalProducts: number;
    totalCost: number;
}

type CartState = {
    cart: Cart | null;
    setCart: (cart: Cart) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: null,
    setCart: (cart) => set({ cart }),
}));