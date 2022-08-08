import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext('')

export const CartProvider = ({ children  }) => {
    const [cart, setCart] = useState({})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const cartLocal = window.localStorage.getItem('cart')
        if (cartLocal) {
            setCart(JSON.parse(cartLocal))
        }
    }, [])
    const addToCart = (product: Object) => {
        setCart((old) => {
            let qntd = 0
            if (old[product.id]) {
                qntd = old[product.id].qntd
            }
            const newCart = {
                ...old,
                [product.id]: {
                    qntd: qntd + 1,
                    product,
                }
            }
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
        setOpen(true)
    }

    const removeFromCart = (productId : string) => {
        setCart((old) => {
            const newCart = {}
            Object.keys(old).forEach(id => {
                if (id !== productId) {
                    newCart[id] = old[id]
                }
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }

    const addQtnd = (productId: string) => {
        setCart((old) => {
            const newCart = {}
            Object.keys(old).forEach(id => {
                const newProduct = { ...old[id] }
                if (id === productId) {
                    newProduct.qntd += 1
                }
                newCart[id] = newProduct
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }

    const removeQtnd = (productId: string) => {
        setCart((old) => {
            const newCart = {}
            Object.keys(old).forEach(id => {
                const newProduct = { ...old[id] }
                if (id === productId && newProduct.qntd > 1) {
                    newProduct.qntd -= 1
                }
                newCart[id] = newProduct
            })
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, addQtnd, removeQtnd, open, setOpen}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}
