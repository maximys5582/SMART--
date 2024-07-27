import React from "react"
import "./BestSellers.scss"
import { Link, NavLink } from "react-router-dom"
import { getImageByKey } from "../../getImageByKey"
import ProductCard from "../ProductCard/ProductCard"

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
        {/* <NavLink to={"/product" + index} key={index}> */}
        <ProductCard
          image={
            <img
              src={getImageByKey("GyroscutersProduct")}
              alt="Gyroscuters Product"
            />
          }
          typeProduct="Сигвеи"
          name="Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)"
          comments={17}
          rating={5}
          discount={20}
          priceBefore={5400}
        />
        {/* </NavLink> */}

        <ProductCard
          image={
            <img
              src={getImageByKey("GyroscutersProduct")}
              alt="Gyroscuters Product"
            />
          }
          typeProduct="Сигвеи"
          name="Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)"
          comments={17}
          rating={4}
          discount={20}
          priceBefore={5400}
        />

        <ProductCard
          image={
            <img
              src={getImageByKey("GyroscutersProduct")}
              alt="Gyroscuters Product"
            />
          }
          typeProduct="Сигвеи"
          name="Гироскутер Smart Balance "
          comments={17}
          rating={5}
          discount={0}
          priceBefore={13690}
        />

        <ProductCard
          image={
            <img
              src={getImageByKey("GyroscutersProduct")}
              alt="Gyroscuters Product"
            />
          }
          typeProduct="Сигвеи"
          name="Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)"
          comments={17}
          rating={5}
          discount={20}
          priceBefore={5400}
        />
      </div>
    </section>
  )
}

export default BestSellers
