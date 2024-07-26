import React from "react"
import { Link } from "react-router-dom"
import "./Promos.scss"

interface PromosProps {
  titleF: string
  imgF: React.ReactNode
  textF: string
  titleS: string
  imgS: React.ReactNode
  textS: string
}

const PromosNews: React.FC<PromosProps> = ({
  titleF,
  imgF,
  textF,
  titleS,
  imgS,
  textS,
}) => {
  return (
    <div className="Product">
      <div className="Product_header">
        <h2 className="title title-news">Новости</h2>
        <Link to="/news">Читать все</Link>
      </div>

      <div className="PromosNews_flex">
        <div className="PromosNews">
          <p className="PromosNews_title">{titleF}</p>
          <div className="Promos-image">{imgF}</div>
          <p className="PromosNews_text">{textF}</p>

          <div className="PromosNews_footer">
            <Link to="/">Подробнее</Link>
            <p className="PromosNews_date">05 июня 2021</p>
          </div>
        </div>

        <div className="PromosNews">
          <p className="PromosNews_title">{titleS}</p>
          <div className="Promos-image">{imgS}</div>
          <p className="PromosNews_text">{textS}</p>

          <div className="PromosNews_footer">
            <Link to="/">Подробнее</Link>
            <p className="PromosNews_date">05 июня 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromosNews
