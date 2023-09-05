import {createContext, ReactNode, useContext, useState} from "react";

type ShoppingCartProviderProps = {
    children: ReactNode;
}
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

type CartItem = {
    id: number
    quantity: number
}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function findCartItem(id: number) {
        return cartItems.find((cartItem: CartItem) => cartItem.id == id);
    }

    const getItemQuantity = (id: number) => {
        const cartItem = findCartItem(id);
        return cartItem == undefined ? 0 : cartItem.quantity
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems(prevCartItems => {
            return findCartItem(id) == undefined ? [...prevCartItems, {id, quantity:1}] : prevCartItems.map(each => each.id == id ? {id, quantity: each.quantity + 1} : each)
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(prevCartItems => {
            return findCartItem(id)?.quantity == 1 ? prevCartItems.filter((item: CartItem) => item.id == id) : prevCartItems.map(each => each.id == id ? {id, quantity: each.quantity - 1} : each)
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(prevCartItems => {
            return prevCartItems.filter((item: CartItem) => item.id == id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}