import React from "react"
import { getImageByKey } from "../../getImageByKey"
import { useBasket } from "../../BasketContext"

interface ProductCardProps {
  image: React.ReactNode
  typeProduct: string
  name: string
  rating: number
  comments: any
  priceBefore: number
  discount: number
  product: Product // Добавляем продукт
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  typeProduct,
  name,
  rating,
  comments,
  priceBefore,
  discount,
  product,
}) => {
  const { addToBasket } = useBasket()

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

  const priceAfter: number = priceBefore * (1 - discount / 100)
  const discountAmount: number = priceBefore - priceAfter

  return (
    <div className="Product-card">
      <div className="Product-card__top-wrap">{image}</div>
      <p className="product-card__brand">{typeProduct}</p>
      <p className="product-card__name">{name}</p>
      <div className="rating">
        {renderStars(rating)}
        <div className="message">
          {getImageByKey("message")} ({comments})
        </div>
      </div>
      <div className="price-middle_wrap">
        <div className="price">
          <p className="price-before">{priceBefore} ₽</p>
          <p className="price-after">{priceAfter} ₽</p>
          <div className="price-discont">
            <p className="discount">{discount}%</p> - {discountAmount} ₽
          </div>
        </div>

        <div className="price-save">
          <button className="saveBtn">{getImageByKey("heart")}</button>
          <button className="saveBtn">{getImageByKey("compare")}</button>
        </div>
      </div>

      <div className="price-bottom_wrap">
        <button className="purchaseButton">Купить в 1 клик</button>
        <button className="Product_basket" onClick={() => addToBasket(product)}>
          {getImageByKey("white_basket")}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
