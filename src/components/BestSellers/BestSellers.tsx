import React from "react"
import "./BestSellers.scss"
import { Link, NavLink } from "react-router-dom"
import { getImageByKey } from "../../getImageByKey"
import ProductCard from "../ProductCard/ProductCard"
import { ArrayProduct } from "../../Array/Array"

interface BestSellersProps {
  title: string
}

const BestSellers: React.FC<BestSellersProps> = ({ title }) => {
  return (
    <section className="Product">
      <div className="Product_header">
        <h2 className="title">{title}</h2>
        <Link to="">Все товары</Link>
      </div>
      <div className="Product_wrapper">
        {ArrayProduct.map((item, index) => (
          <NavLink to={"/product/" + index} key={index}>
            <ProductCard
              image={
                <img src={getImageByKey(item.img)} alt="Gyroscuters Product" />
              }
              typeProduct={item.typeProduct}
              name={item.name}
              comments={item.comments}
              rating={item.rating}
              discount={item.discount}
              priceBefore={item.priceBefore}
            />
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default BestSellers
