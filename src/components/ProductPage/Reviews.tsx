import React from "react"
import { getImageByKey } from "../../getImageByKey"

interface ReviewsProduct {
  id: number
  img: string
  typeProduct: string
  name: string
  comments: ReviewsType[]
  rating: number
  discount: number
  priceBefore: number
}

interface ReviewsType {
  id: number
  CustomerName: string
  date: string
  description?: string
  reviews: string
}

interface ReviewsTypeProps {
  product: ReviewsProduct
}

const Reviews: React.FC<ReviewsTypeProps> = ({ product }) => {
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

  return (
    <>
      {product.comments.map((comment, index) => (
        <div className="Reviews" key={index}>
          <div className="Reviews_top">
            <div className="Reviews_top_left">
              <p className="Reviews_top_avatar">
                {comment.CustomerName.charAt(0)}
              </p>
              <p className="Reviews_top_name">{comment.CustomerName}</p>
              <p className="Reviews_top_name">{comment.date}</p>
            </div>

            <div className="Reviews_top_right">
              <div className="rating">{renderStars(product.rating)}</div>
              <p className="numbOfnumb">({product.rating} из 5)</p>
            </div>
          </div>

          <div className="Reviews_bottom">
            <p className="Reviews_bottom_reviews">{comment.reviews}</p>
            <p className="Reviews_bottom_description">{comment.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Reviews
