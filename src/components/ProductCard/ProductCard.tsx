import React from "react"
import { getImageByKey } from "../../getImageByKey"

interface ProductCardProps {
  image: React.ReactNode
  typeProduct: string
  name: string
  rating: number
  comments: number
  priceBefore: number
  discount: number
}
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  typeProduct,
  name,
  rating,
  comments,
  priceBefore,
  discount,
}) => {
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
          <p className="price-discont">
            <div className="discount">{discount}%</div> - {discountAmount} ₽
          </p>
        </div>

        <div className="price-save">
          <button className="saveBtn">{getImageByKey("heart")}</button>
          <button className="saveBtn">{getImageByKey("compare")}</button>
        </div>
      </div>

      <div className="price-bottom_wrap">
        <button className="purchaseButton">Купить в 1 клик</button>
        <button className="Product_basket">
          {getImageByKey("white_basket")}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
