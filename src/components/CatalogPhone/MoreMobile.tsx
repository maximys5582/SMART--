import { Link } from "react-router-dom"
import "../../style/MoreMobile.scss"
import { getImageByKey } from "../../getImageByKey"
import { useState } from "react"

const MoreMobile = () => {
  const [like, setLike] = useState(false)

  const handleClickCLike = () => {
    setLike(!like)
  }

  return (
    <div className="MoreMobile">
      <div className="MoreMobile_icons">
        <Link to={""} className="MoreMobile-icon">
          {getImageByKey("eye")}
        </Link>
        <Link to={""} onClick={handleClickCLike} className={"MoreMobile-icon"}>
          {like === false ? getImageByKey("heart") : getImageByKey("red_heart")}
        </Link>
        <Link to={""} className="MoreMobile-icon">
          {getImageByKey("compare")}
        </Link>
      </div>
      <div className="MoreMobile_list">
        <Link to={""} className="MoreMobile_link">
          О компании
        </Link>
        <div className="line" />
        <Link to={""} className="MoreMobile_link">
          Акции
        </Link>
        <div className="line" />
        <Link to={""} className="MoreMobile_link">
          Рассрочка 0–0-12
        </Link>
        <div className="line" />
        <Link to={""} className="MoreMobile_link">
          Сервис и ремонт
        </Link>
        <div className="line" />
        <Link to={""} className="MoreMobile_link">
          Опт/дропшиппинг
        </Link>
        <div className="line" />
        <Link to={""} className="MoreMobile_link">
          Контакты
        </Link>
        <div className="line" />
      </div>
    </div>
  )
}

export default MoreMobile
