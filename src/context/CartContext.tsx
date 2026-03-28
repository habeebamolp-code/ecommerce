import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Product = {
  id: number
  title: string
  price: number
  image: string
}

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

   const addToCart = (product: Product) => {
    setCart(prev => [...prev, product])
  }
   const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}