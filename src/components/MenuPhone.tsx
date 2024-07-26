import { Link } from "react-router-dom"
import { getImageByKey } from "../getImageByKey"
import "../style/MenuPhone.scss"

interface MenuPhoneProps {
  handleClickCatalogPhone: () => void
  handleClickMorePhone: () => void
  handleClickSearchPhone: () => void
}

const MenuPhone: React.FC<MenuPhoneProps> = ({
  handleClickCatalogPhone,
  handleClickMorePhone,
  handleClickSearchPhone,
}) => {
  return (
    <div className="MenuPhone MenuPhone-visible">
      <Link to="/">
        <div className="MenuPhone_btn">
          {getImageByKey("house")}
          <span>Главная</span>
        </div>
      </Link>
      <div className="MenuPhone_btn" onClick={handleClickCatalogPhone}>
        {getImageByKey("catalogPhone__svg")}
        <span>Каталог</span>
      </div>
      <div className="MenuPhone_btn">
        {getImageByKey("white_basket")}
        <span>Корзина</span>
      </div>
      <div className="MenuPhone_btn" onClick={handleClickSearchPhone}>
        {getImageByKey("white_loop")}
        <span>Поиск</span>
      </div>
      <div className="MenuPhone_btn" onClick={handleClickMorePhone}>
        {getImageByKey("more")}
        <span>Ещё</span>
      </div>
    </div>
  )
}

export default MenuPhone
