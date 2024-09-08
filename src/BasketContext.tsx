import React, { createContext, useContext, useState, useEffect } from "react"

// Определение типа для продукта
interface Product {
  id: number
  img: string
  name: string
  priceBefore: number
  discount: number
  quantity: number
}

// Определение типа для контекста
interface BasketContextType {
  basket: Product[]
  addToBasket: (product: Product) => void
  updateProductQuantity: (id: number, quantity: number) => void
  removeFromBasket: (id: number) => void
}

// Создаем контекст с начальным значением `undefined`
const BasketContext = createContext<BasketContextType | undefined>(undefined)

export const useBasket = () => {
  const context = useContext(BasketContext)
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider")
  }
  return context
}

// Компонент-провайдер для корзины
export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Инициализация состояния корзины с учетом `localStorage`
  const [basket, setBasket] = useState<Product[]>(() => {
    const savedBasket = localStorage.getItem("basket")
    return savedBasket ? JSON.parse(savedBasket) : []
  })

  // Сохранение состояния корзины в `localStorage` при его изменении
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((p) => p.id === product.id)
      if (existingProduct) {
        // Если продукт уже есть в корзине, обновляем количество
        return prevBasket.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      } else {
        // Если продукта нет в корзине, добавляем его
        return [...prevBasket, product]
      }
    })
  }

  const updateProductQuantity = (id: number, quantity: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    )
  }

  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) => prevBasket.filter((product) => product.id !== id))
  }

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, updateProductQuantity, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  )
}
