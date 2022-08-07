import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({})
    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        if(cartLocal){
            setCart(JSON.parse(cartLocal))
        }
    },[])
    const addToCart = (product) => {
        setCart((old) => {
            let qntd = 0
            if (old[product.id]) {
                qntd = old[product.id].qntd
            }
            const newCart = {
                ...old,
                [product.id]: { 
                    qntd: qntd+1,
                    product,
                 }
            }
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}