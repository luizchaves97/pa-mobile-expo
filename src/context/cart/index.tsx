import React, { createContext, useState } from "react";
import { Clother } from "../../types";

export type CartContextProviderType = {
  cart: Clother[];
  addCart: (product: Clother) => void;
  removeCart: (productId: Clother['id']) => void;
}

export type CartContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_STATE: CartContextProviderType = {
  cart: [],
  addCart: () => {},
  removeCart: () => {}
}

const CartContext = createContext(DEFAULT_STATE);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<Clother[]>([]);

  const addCart = (product: Clother) => {
    setCart([...cart, product])
  }

  const removeCart = (productId: Clother['id']) => {
    const filterCart = cart.filter((product) => product.id !== productId)
    setCart(filterCart)
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => React.useContext(CartContext);

