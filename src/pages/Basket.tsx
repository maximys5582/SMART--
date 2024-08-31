// Basket.tsx

import React from "react"
import YourOrder from "../components/YourOrder/YourOrder"
import "../style/Basket.scss"
import { getImageByKey } from "../getImageByKey"
import { useBasket } from "../BasketContext"

const Basket: React.FC = () => {
  const { basket, updateProductQuantity, removeFromBasket } = useBasket()

  const increment = (id: number) => {
    const product = basket.find((p) => p.id === id)
    if (product) {
      updateProductQuantity(product.id, (product.quantity || 1) + 1)
    } else {
      console.error(`Product with id ${id} not found in the basket.`)
    }
  }

  const decrement = (id: number) => {
    const product = basket.find((p) => p.id === id)
    if (product && (product.quantity || 1) > 1) {
      updateProductQuantity(product.id, (product.quantity || 1) - 1)
    } else if (!product) {
      console.error(`Product with id ${id} not found in the basket.`)
    }
  }

  const handleRemove = (productId: number) => {
    removeFromBasket(productId)
  }

  const grandTotal = basket.reduce((total, product) => {
    const priceAfterDiscount =
      product.priceBefore * (1 - product.discount / 100)
    return total + priceAfterDiscount * (product.quantity || 1)
  }, 0)

  return (
    <div className="Basket">
      <div className="container">
        <h3 className="title">Оформление заказа</h3>
        <div className="Basket_container">
          <div className="Basket_left">
            <div className="Basket_left_yourOrder">
              <h4 className="CardNews_title">Ваш заказ</h4>
              {basket.map((item, index) => (
                <YourOrder
                  key={index} // Убедитесь, что item.id уникален
                  image={<img src={getImageByKey(item.img)} alt="Product" />}
                  index={item.id}
                  name={item.name}
                  priceBefore={item.priceBefore}
                  discount={item.discount}
                  increment={() => increment(item.id)}
                  decrement={() => decrement(item.id)}
                  count={item.quantity || 1}
                />
              ))}
            </div>
          </div>
          <div className="Basket_right">
            <h3 className="CardNews_title">Итого</h3>
            <div>
              <div className="Basket_right_content">
                <p style={{ color: "rgba(131, 134, 136, 1)" }}>
                  {basket.length} товара на сумму
                </p>
                <span>{grandTotal.toFixed(2)} ₽</span>
              </div>

              <div className="Basket_right_content">
                <p style={{ color: "rgba(131, 134, 136, 1)" }}>
                  Стоимость доставки
                </p>
                <p>бесплатно</p>
              </div>

              <div className="Basket_right_price">
                <p>Итог</p>
                <p>{grandTotal.toFixed(2)} ₽</p>
              </div>

              <button className="Basket_right_btn">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
