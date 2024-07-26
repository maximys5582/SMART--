import React, { FC } from "react"
import { getImageByKey } from "../../getImageByKey"
import { Link } from "react-router-dom"

interface CardNewsProps {
  img: string
  title: string
  text: string
  date: string
}

const CardNews: FC<CardNewsProps> = ({ img, title, text, date }) => {
  return (
    <div className="CardNews">
      <img src={getImageByKey(img)} alt="News" className="CardNews_img" />
      <div className="CardNews_content">
        <h4 className="CardNews_title">{title}</h4>
        <p className="CardNews_text">{text}</p>
        <div className="CardNews_footer">
          <Link to="/">Подробнее ⯈</Link>
          <p className="CardNews_footer__date">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default CardNews
