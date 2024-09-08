import React, { useState } from "react"
import YourOrder from "../components/YourOrder/YourOrder"
import "../style/Basket.scss"
import { useBasket } from "../BasketContext"
import { getImageByKey } from "../getImageByKey"
import PickupMap from "../components/PickupMap/PickupMap"
import { pickUupPoint } from "../Array/Array"

const Basket: React.FC = () => {
  const { basket, updateProductQuantity, removeFromBasket } = useBasket()
  const [receiving, setReceiving] = useState(true)
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

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

  const handleReceiving = () => {
    setReceiving(!receiving)
  }

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address)
  }

  return (
    <div className="Basket">
      <div className="container">
        <h3 className="title">Оформление заказа</h3>
        <div className="Basket_container">
          <div className="Basket_left">
            <div className="Basket_left_yourOrder">
              <h4 className="CardNews_title">Ваш заказ</h4>
              {receiving && (
                <>
                  {basket.length > 0 ? (
                    basket.map((item) => (
                      <YourOrder
                        key={item.id} // Убедитесь, что используется уникальный ключ
                        img={item.img}
                        index={item.id}
                        name={item.name}
                        priceBefore={item.priceBefore}
                        discount={item.discount}
                        increment={() => increment(item.id)}
                        decrement={() => decrement(item.id)}
                        handleRemove={() => handleRemove(item.id)}
                        count={item.quantity || 1}
                      />
                    ))
                  ) : (
                    <p>Ваша корзина пуста</p>
                  )}
                </>
              )}

              <div
                className={
                  receiving === false
                    ? "Basket_left_yourOrder_emerging"
                    : "disabled"
                }
              >
                <div className="YourOrder_img">
                  {basket.map((item) => (
                    <>
                      <img src={getImageByKey(item.img)} alt={"Image"} />
                    </>
                  ))}
                </div>

                <button className="Basket_nextButton" onClick={handleReceiving}>
                  Изменить
                </button>
              </div>
            </div>

            <button
              className={receiving ? "Basket_nextButton" : "disabled"}
              onClick={handleReceiving}
            >
              Далее
            </button>

            <div className="Basket_plug">
              <h3
                className={
                  receiving
                    ? "Basket_plug_title "
                    : "Basket_plug_title Basket_plug_title_active"
                }
              >
                Способ получения
              </h3>
              {!receiving && (
                <div className="Basket_plug_flex">
                  <div className="pick-upPoint">
                    {pickUupPoint.map((item, index) => (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "baseline" }}
                      >
                        <input
                          type="radio"
                          id={`pickup-${index}`}
                          name="pickupPoint"
                          value={item.address}
                          onChange={() => setSelectedAddress(item.address)}
                        />
                        <div className="adressPoint">
                          <label
                            htmlFor={`pickup-${index}`}
                            style={{ fontSize: "20px" }}
                          >
                            {item.address}
                          </label>

                          <label
                            className="workTime"
                            style={{ marginTop: "10px" }}
                          >
                            {item.workTime}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <PickupMap
                      onAddressSelect={handleAddressSelect}
                      points={pickUupPoint}
                    />
                    {selectedAddress && (
                      <p>Выбранный адрес: {selectedAddress}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="Basket_plug">
              <h3 className="Basket_plug_title">Способ оплаты</h3>
            </div>

            <div className="Basket_plug">
              <h3 className="Basket_plug_title">Получатель</h3>
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

              <div className="Basket_line line" />

              <div className="Basket_right_toBePaid">
                <span className="Basket_right_toBePaid_lTitle">К оплате</span>
                <span className="title">{grandTotal.toFixed(0)} ₽</span>
              </div>

              <button className="Basket_right_button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
