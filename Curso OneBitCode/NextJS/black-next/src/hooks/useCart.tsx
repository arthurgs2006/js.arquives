'use client';

import { ProductType } from "@/services/products"
import { createContext } from "vm"
import {useEffect, useContext, ReactNode} from "react"
import { useState } from "react"


type CartContextType = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productID: number) => void;
};

// const myValue = useContext<ServerContextJSONValue>(context as ServerContextJSONValue);
const CartContext = createContext<CartContextType>({} as CartContextType)

// src/hooks/useCart.tsx

export const CartContextProvider = (props: {
  children: ReactNode
}) => {
  const [cart, setCart] = useState<ProductType[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const addProduct = (product: ProductType) => {
    const updatedCart = [...cart, product]
    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex(product => product.id === productId)

    if (productIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart.splice(productIndex, 1)
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
      setCart(updatedCart)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart(){
  useContext(CartContext)
}