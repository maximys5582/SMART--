import React from "react"
import "./BestSellers.scss"
import { Link, NavLink } from "react-router-dom"
import { getImageByKey } from "../../getImageByKey"
import ProductCard from "../ProductCard/ProductCard"
import { ArrayProduct } from "../../Array/Array"
import { useBasket } from "../../BasketContext"

interface BestSellersProps {
  title: string
}

const BestSellers: React.FC<BestSellersProps> = ({ title }) => {
  const { addToBasket } = useBasket()
  return (
    <section className="Product">
      <div className="Product_header">
        <h2 className="title">{title}</h2>
        <Link to="">Все товары</Link>
      </div>
      <div className="Product_wrapper">
        {ArrayProduct.map((item) => (
          <div className="Product-card" key={item.id}>
            <NavLink to={"/product/" + item.id}>
              <ProductCard
                id={item.id}
                img={getImageByKey(item.img)}
                typeProduct={item.typeProduct}
                name={item.name}
                comments={item.comments}
                rating={item.rating}
                discount={item.discount}
                priceBefore={item.priceBefore}
                specifications={item.specifications}
                quantity={item.quantity}
              />
            </NavLink>
            <div className="price-bottom_wrap">
              <button className="purchaseButton">Купить в 1 клик</button>
              <button
                className="Product_basket"
                onClick={() => addToBasket(item)}
              >
                {getImageByKey("white_basket")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellers
