import React, { useState } from "react"
import YourOrder from "../components/YourOrder/YourOrder"
import "../style/Basket.scss"
import { useBasket } from "../BasketContext"
import { getImageByKey } from "../getImageByKey"
import PickupMap from "../components/PickupMap/PickupMap"
import { pickUpPoint, workingTime } from "../Array/Array"
import CustomSelect from "../CustomSelect/CustomSelect"

const Basket: React.FC = () => {
  const { basket, updateProductQuantity, removeFromBasket } = useBasket()
  const [receiving, setReceiving] = useState(true)
  const [payment, setPayment] = useState(false)
  const [selectedCity, setSelectedCity] = useState(pickUpPoint[0])
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)
  const [deliveryMethod, setDeliveryMethod] = useState<
    "delivery" | "pickup" | null
  >(null)

  const [deliveryStreet, setDeliveryStreet] = useState<string>("")
  const [deliveryApartment, setDeliveryApartment] = useState<string>("")
  const [deliveryComment, setDeliveryComment] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("10:00 - 12:00")
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Наличными")
  const [isPaymentSelected, setIsPaymentSelected] = useState(false)

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

  const handleCitySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = pickUpPoint.find((item) => item.city === event.target.value)
    if (city) {
      setSelectedCity(city)
      setSelectedAddress(null)
    }
  }

  const handleOrderSelection = (method: "delivery" | "pickup") => {
    setDeliveryMethod(method)
  }

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address)
  }

  const handlePaymentSelected = () => {
    setIsPaymentSelected(!isPaymentSelected)
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
                        key={item.id}
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
                  receiving ? "disabled" : "Basket_left_yourOrder_emerging"
                }
              >
                <div className="YourOrder_img">
                  {basket.map((item) => (
                    <img
                      key={item.id}
                      src={getImageByKey(item.img)}
                      alt={"Image"}
                    />
                  ))}
                </div>
                <button
                  className="Basket_nextButton"
                  onClick={() => setReceiving(true)}
                >
                  Изменить
                </button>
              </div>
            </div>

            <button
              className={receiving ? "Basket_nextButton" : "disabled"}
              onClick={() => setReceiving(false)}
            >
              Далее
            </button>

            {!payment && (
              <div className="Basket_plug">
                <h3
                  className={
                    receiving
                      ? "Basket_plug_title"
                      : "Basket_plug_title Basket_plug_title_active"
                  }
                >
                  Способ получения
                </h3>

                {!receiving && (
                  <div className="Basket_choose-city">
                    <p style={{ margin: "10px 0" }}>Ваш город</p>
                    <div className="Basket_choose-city_flex">
                      <div>
                        <select
                          className="city_select"
                          onChange={handleCitySelect}
                        >
                          {pickUpPoint.map((item) => (
                            <option key={item.city} value={item.city}>
                              {item.city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <div
                          className="city_select city_select_order"
                          onClick={() => handleOrderSelection("delivery")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            checked={deliveryMethod === "delivery"}
                            readOnly
                          />
                          <label>Доставка</label>
                        </div>

                        <div
                          className="city_select city_select_order"
                          onClick={() => handleOrderSelection("pickup")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            checked={deliveryMethod === "pickup"}
                            readOnly
                          />
                          <label>Самовывоз</label>
                        </div>
                      </div>
                    </div>
                    <div className="Basket_plug_line line" />
                  </div>
                )}

                {/* Блок для заполнения информации по доставке */}
                {deliveryMethod === "delivery" && !receiving && (
                  <div>
                    <div className="delivery">
                      <div>
                        <p className="delivery_titles">Дата</p>
                        <input type="date" className="city_select" />
                        <p className="delivery_titles">Время</p>
                        <CustomSelect
                          onTimeSelect={setSelectedTime}
                          options={workingTime}
                          defaultValue="10:00 - 12:00"
                        />
                      </div>

                      <div>
                        <p className="delivery_titles">Улица, дом/корпус</p>
                        <input
                          type="text"
                          value={deliveryStreet}
                          onChange={(e) => setDeliveryStreet(e.target.value)}
                        />
                        <p className="delivery_titles">Квартира</p>
                        <input
                          type="text"
                          value={deliveryApartment}
                          onChange={(e) => setDeliveryApartment(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="delivery_titles">Комментарий курьеру</p>
                    <input
                      type="text"
                      className="delivery_comments"
                      value={deliveryComment}
                      onChange={(e) => setDeliveryComment(e.target.value)}
                    />
                  </div>
                )}

                {/* Блок для выбора самовывоза с картой */}
                {deliveryMethod === "pickup" && !receiving && (
                  <div className="Basket_plug_flex">
                    <div className="pick-upPoint">
                      {selectedCity.address.map((addr, index) => (
                        <div className="selectedCity" key={index}>
                          <div>
                            {" "}
                            <input
                              type="radio"
                              id={`pickup-${index}`}
                              name="pickupPoint"
                              value={addr.address}
                              onChange={() => setSelectedAddress(addr.address)}
                            />
                            <label
                              htmlFor={`pickup-${index}`}
                              className="pointsInCity"
                            >
                              {addr.address}
                            </label>
                          </div>

                          <label
                            style={{
                              margin: "0 0 0 22px",
                              color: "rgba(131, 134, 136, 1)",
                            }}
                          >
                            ПН-ВС 09:00 — 22:00
                          </label>
                        </div>
                      ))}
                    </div>

                    <div>
                      <PickupMap
                        points={selectedCity.address}
                        center={selectedCity.coords}
                        onaddressSelect={handleAddressSelect}
                      />
                      {selectedAddress && (
                        <p>Выбранный адрес: {selectedAddress}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Отображение выбранного города и адреса после перехода к оплате */}
            {payment && (
              <div className="Basket_plug">
                <h3 className={"Basket_plug_title"}>Способ получения</h3>

                {deliveryMethod === "delivery" ? (
                  <>
                    <div className="Basket_selectedAddress">
                      <div style={{ display: "flex" }}>
                        <p>г. {selectedCity.city}</p>
                        <p>
                          , {deliveryStreet}, {deliveryApartment}
                        </p>
                      </div>
                      <div>
                        <button
                          className="Basket_nextButton"
                          onClick={() => setPayment(false)}
                        >
                          Изменить
                        </button>
                      </div>
                    </div>
                    <p>Время: {selectedTime}</p>
                  </>
                ) : (
                  <div className="Basket_selectedAddress">
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <p>г. {selectedCity.city}</p>
                          <p>, {selectedAddress}</p>
                        </div>
                        <label
                          style={{
                            fontSize: "16px",
                            color: "rgba(131, 134, 136, 1)",
                          }}
                        >
                          ПН-ВС 09:00 — 22:00
                        </label>
                      </div>

                      <div>
                        <button
                          className="Basket_nextButton"
                          onClick={() => setPayment(false)}
                        >
                          Изменить
                        </button>
                      </div>
                    </>
                  </div>
                )}
              </div>
            )}

            <button
              className={
                !receiving &&
                deliveryMethod &&
                (selectedAddress || deliveryStreet) &&
                !payment
                  ? "Basket_nextButton"
                  : "disabled"
              }
              onClick={() => setPayment(true)}
            >
              Далее
            </button>

            <div className="Basket_plug">
              <h3 className={"Basket_plug_title"}>Способ оплаты</h3>

              {payment &&
                (isPaymentSelected ? (
                  <div
                    className="Basket_plug_flex"
                    style={{ margin: "30px 0 0 0;", fontSize: "24px" }}
                  >
                    <p style={{ fontWeight: "600" }}>{selectedPaymentMethod}</p>
                    <button
                      className="Basket_nextButton"
                      onClick={() => setIsPaymentSelected(false)}
                    >
                      Изменить
                    </button>
                  </div>
                ) : (
                  <div style={{ margin: "30px 0 0 0;" }}>
                    <CustomSelect
                      onTimeSelect={(value) => {
                        setSelectedPaymentMethod(value)
                        setIsPaymentSelected(true)
                      }}
                      options={["Картой", "Наличными"]}
                      defaultValue={selectedPaymentMethod}
                    />
                  </div>
                ))}
            </div>

            <button
              className={isPaymentSelected ? "Basket_nextButton" : "disabled"}
              onClick={handlePaymentSelected}
            >
              Далее
            </button>

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
