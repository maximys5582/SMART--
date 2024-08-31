import React, { createContext, useContext, useState, ReactNode } from "react"

interface Product {
  id: number
  img: string
  typeProduct: string
  name: string
  comments: Array<{
    id: number
    CustomerName: string
    date: string
    reviews: string
    description?: string
  }>
  rating: number
  discount: number
  priceBefore: number
  specifications: {
    type: string
    max_speed: number
    engine_power: number
    mileage_on_a_single_charge: number
    type_of_brake: string
    cruise_control: string
  }
  quantity?: number // Добавляем опциональное количество
}

interface BasketContextType {
  basket: Product[]
  addToBasket: (product: Product) => void
  removeFromBasket: (productId: number) => void
  updateProductQuantity: (productId: number, quantity: number) => void
}

const BasketContext = createContext<BasketContextType | undefined>(undefined)

export const useBasket = () => {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider")
  }
  return context
}

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Product[]>([])

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => {
      const existingProductIndex = prevBasket.findIndex(
        (item) => item.id === product.id
      )
      if (existingProductIndex !== -1) {
        const updatedBasket = [...prevBasket]
        updatedBasket[existingProductIndex] = {
          ...updatedBasket[existingProductIndex],
          quantity: (updatedBasket[existingProductIndex].quantity || 1) + 1,
        }
        return updatedBasket
      }
      return [...prevBasket, { ...product, quantity: 1 }]
    })
  }

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.id !== productId)
    )
  }

  const updateProductQuantity = (productId: number, quantity: number) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
      return updatedBasket
    })
  }

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, updateProductQuantity }}
    >
      {children}
    </BasketContext.Provider>
  )
}
