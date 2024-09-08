import { FC, useEffect, useState } from "react"
import { ArrayProduct } from "../Array/Array"
import { Link, useParams } from "react-router-dom"
import { getImageByKey } from "../getImageByKey"
import "../style/ProductPage.scss"
import ProductSlider from "../components/Slider/ProductSlider"
import BestSellers from "../components/BestSellers/BestSellers"
import Description from "../components/ProductPage/Description"
import Specifications from "../components/ProductPage/Specifications"
import Reviews from "../components/ProductPage/Reviews"
import ScrollOnTop from "../components/scrolloOnTop"
import { useBasket } from "../BasketContext"

const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  const [activeItemTab, setActiveItemTab] = useState(() => {
    return localStorage.getItem("activeItemMenu") || "description"
  })

  useEffect(() => {
    const savedActiveItemTab = localStorage.getItem("activeItemMenu")
    if (savedActiveItemTab) {
      setActiveItemTab(savedActiveItemTab)
    }
  }, [])

  const handleClickTab = (item: string) => {
    setActiveItemTab(item)
    localStorage.setItem("activeItemMenu", item)
  }

  if (!id) {
    return <div>ID не указан</div>
  }

  const productId = parseInt(id, 10)
  const productItem = ArrayProduct.find((item) => item.id === productId)

  if (!productItem) {
    return <div>Продукт не найден</div>
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          {getImageByKey("star")}
        </span>
      )
    }
    return stars
  }

  const priceAfter: number =
    productItem.priceBefore * (1 - productItem.discount / 100)
  const discountAmount: number = productItem.priceBefore - priceAfter

  const { addToBasket } = useBasket()

  return (
    <div className="container ProductPage_container">
      <ScrollOnTop />
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈
        <Link to="/products" className="bredcrumbs_link">
          Продукты
        </Link>
        ⯈<span className="bredcrumbs_link">{productItem.name}</span>
      </div>

      <div className="ProductPage">
        <div className="ProductPage_wrap">
          <ProductSlider
            img1={productItem.img}
            img2={productItem.img}
            img3={productItem.img}
          />
          <div className="ProductPage_content">
            <div className="ProductPage_title">
              <h2 className="title">{productItem.name}</h2>
            </div>
            <div className="ProductPage_purchaseBlock">
              <div className="ProductPage_purchaseBlock__flex">
                <div className="rating ProductPage-rating">
                  {renderStars(productItem.rating)}
                  <div className="message">
                    {getImageByKey("message")} ({productItem.comments.length})
                  </div>
                </div>

                <div className="price-save ProductPage-price-save">
                  <button className="saveBtn">{getImageByKey("heart")}</button>
                  <button className="saveBtn">
                    {getImageByKey("compare")}
                  </button>
                </div>
              </div>

              <div className="ProductPage-price__flex">
                <div>
                  <div className="price ProductPage-price">
                    <p className="price-before">{productItem.priceBefore} ₽</p>
                    <div className="price-discont ProductPage-discount">
                      <p className="discount">{productItem.discount}%</p>
                      <p>-</p>
                      {discountAmount} ₽
                    </div>
                  </div>
                  <p className="price-after ProductPage-price-after">
                    {priceAfter} ₽
                  </p>
                </div>

                <div>
                  <div className="price-bottom_wrap ProductPage_price-bottom_wrap">
                    <button
                      className="Product_basket ProductPage-Product_basket"
                      onClick={() => addToBasket(productItem)}
                    >
                      В корзину
                    </button>

                    <button className="purchaseButton">Купить в 1 клик</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="deliveryAndPayment">
              <div className="deliveryAndPayment_delivery">
                <span className="deliveryAndPayment-title">
                  {getImageByKey("delivey")}
                  Доставка
                </span>

                <p className="deliveryAndPayment-text">
                  Доставим по Санкт-Петербургу в течение 2 часов и бесплатно.
                  Стоимость доставки в другие города уточняйте у менеджера.
                </p>
              </div>

              <div className="deliveryAndPayment_payment">
                <span className="deliveryAndPayment-title">
                  {getImageByKey("payment")}
                  Оплата
                </span>

                <p className="deliveryAndPayment-text">
                  Принимаем к оплате как наличный, так и безналичный расчёт.
                  Возможна оплата электронными кошельками.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ProductPage_tabs">
          <span
            className={
              activeItemTab === "description"
                ? "ProductPage_tabs-title_active"
                : "ProductPage_tabs-title"
            }
            onClick={() => handleClickTab("description")}
          >
            Описание
          </span>
          <span
            className={
              activeItemTab === "specifications"
                ? "ProductPage_tabs-title_active"
                : "ProductPage_tabs-title"
            }
            onClick={() => handleClickTab("specifications")}
          >
            Характеристики
          </span>
          <span
            className={
              activeItemTab === "reviews"
                ? "ProductPage_tabs-title_active"
                : "ProductPage_tabs-title"
            }
            onClick={() => handleClickTab("reviews")}
          >
            Отзывы ({productItem.comments.length})
          </span>
        </div>

        <div className="ProductPage_content-section">
          {activeItemTab === "description" && (
            <div className="ProductPage_description">
              <h3 className="ProductPage_description-title">
                Описание {productItem.name}
              </h3>
              <div className="ProductPage_description-description">
                <Description />
              </div>
            </div>
          )}

          {activeItemTab === "specifications" && productItem.specifications && (
            <div className="ProductPage_description">
              <h3 className="ProductPage_description-title">
                Характеристики {productItem.name}
              </h3>
              <div className="ProductPage_description-description">
                <Specifications product={productItem.specifications} />
              </div>
            </div>
          )}

          {activeItemTab === "reviews" && productItem.comments && (
            <div className="ProductPage_description">
              <h3 className="ProductPage_description-title">
                Отзывы на {productItem.name}
              </h3>
              <div className="ProductPage_description-reviwes">
                <Reviews product={productItem} />
              </div>
            </div>
          )}
        </div>

        <BestSellers title="Рекомендуем" />
      </div>
    </div>
  )
}

export default ProductPage
