import React from "react"
import { getImageByKey } from "../../getImageByKey"

interface ProductCardProps {
  id: number
  img: string // Expecting a string for the image URL
  typeProduct: string
  name: string
  comments: Array<{
    id: number
    CustomerName: string
    date: string
    reviews: string
    description: string
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
  quantity?: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
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
    <>
      <div className="Product-card__top-wrap">
        <img src={img} alt={name} />
      </div>
      <p className="product-card__brand">{typeProduct}</p>
      <p className="product-card__name">{name}</p>
      <div className="rating">
        {renderStars(rating)}
        <div className="message">
          {getImageByKey("message")} ({comments.length})
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
    </>
  )
}

export default ProductCard
