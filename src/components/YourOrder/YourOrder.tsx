import React from "react"
import "./YourOrder.scss"
import { NavLink } from "react-router-dom"
import { getImageByKey } from "../../getImageByKey"

interface YourOrderProps {
  image: React.ReactNode
  name: string
  priceBefore: number
  discount: number
  increment: () => void
  decrement: () => void
  count: number
  index: number
  updateTotalCost?: (index: number, newTotalCost: number) => void // Make this optional
}

const YourOrder: React.FC<YourOrderProps> = ({
  image,
  name,
  priceBefore,
  discount,
  increment,
  decrement,
  count,
  index,
}) => {
  const priceAfter: number = priceBefore * (1 - discount / 100)

  return (
    <div className="YourOrder">
      <NavLink to={`/product/${index}`} key={index}>
        <div className="YourOrder_nav">
          <div className="YourOrder_img">{image}</div>
          <span className="YourOrder_title">{name}</span>
        </div>
      </NavLink>

      <div className="YourOrder_counter">
        <button
          className="decrement"
          disabled={count === 1}
          onClick={decrement}
        >
          —
        </button>
        <span className="count">{count}</span>
        <button className="increment" onClick={increment}>
          ＋
        </button>
      </div>

      <div className="price">
        <p className="price-before">{priceBefore} ₽</p>
        <p className="price-after">{priceAfter.toFixed(2)} ₽</p>
      </div>

      <div className="YourOrder_delete">{getImageByKey("delete")}</div>
    </div>
  )
}

export default YourOrder
