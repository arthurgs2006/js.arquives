import { ProductType } from "@/services/products"
import { ReactNode, useState } from "react"
import { createContext } from "vm"

type CartContextType = {
    cart: ProductType[]
    addProduct: (product: ProductType) => void
    removeProduct: (productID: number) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartContextProvider (props: {
    children?: ReactNode
}) => {
    const [cart, setCart] = useState<ProductType[]>()
}