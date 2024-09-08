import { useState, useEffect } from "react"
import { getImageByKey } from "../getImageByKey"
import "../style/menu.scss"
import { Link } from "react-router-dom"

const Menu = () => {
  const [catalogPhone, setcatalogPhone] = useState<boolean>(() => {
    const savedState = localStorage.getItem("catalogPhone")
    return savedState ? JSON.parse(savedState) : true
  })

  useEffect(() => {
    localStorage.setItem("catalogPhone", JSON.stringify(catalogPhone))
  }, [catalogPhone])

  const handleClickcatalogPhone = () => {
    setcatalogPhone(!catalogPhone)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to={"/"}>{getImageByKey("logo")}</Link>
          </div>
          <div className="tel">
            <p>+7 (812) 660-50-54</p>
            <p>+7 (958) 111-95-03</p>
            <p>Пн-вс: c 10:00 до 21:00</p>
          </div>

          <div className="header-right">
            <div className="search">
              <div className="search-icon">{getImageByKey("loop")}</div>
              <input type="text" className="search-input" placeholder="Поиск" />
            </div>
            <Link to={"/viewed"} className="menu-icon">
              {getImageByKey("eye")}
            </Link>
            <Link to={""} className="menu-icon">
              {getImageByKey("heart")}
            </Link>
            <Link to={""} className="menu-icon">
              {getImageByKey("compare")}
            </Link>
            <Link to={"/basket"} className="menu-icon">
              {getImageByKey("empty")}
            </Link>
            <button type="submit" className="log-in">
              Войти
            </button>
          </div>
        </div>
      </div>
      <nav className="nav">
        <div className="container">
          <div className="nav_row">
            <div className="catalogPhone">
              <button
                className="catalogPhone__btn"
                type="button"
                onClick={handleClickcatalogPhone}
              >
                {getImageByKey("catalogPhone__svg")}Каталог товаров
              </button>
              <div className="nav_list">
                <Link to={""}>О компании</Link>
                <Link to={""}>Акции</Link>
                <Link to={""}>Рассрочка 0|0|18</Link>
                <Link to={""}>Сервис и гарантия</Link>
                <Link to={""}>Опт/дропшиппинг</Link>
                <Link to={""}>Контакты</Link>
              </div>
              {catalogPhone && (
                <ul className="catalogPhone_list">
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Gyroscuters")}Гироскутеры
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("scooter")}Электросамокаты
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("monowheel")}Моноколеса
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Segways")}Сигвеи и мини-сигвеи
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Electric_scooters")}Электроскутеры
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Electric_bicycles")}Электровелосипеды
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Electric_skates")}Электроскейты
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Electric_vehicles")}Электромобили
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Accessories")}Аксессуары
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Smart_toys")}Умные игрушки
                  </Link>
                  <Link className="catalogPhone_list__link" to={""}>
                    {getImageByKey("Smart_Watch")}Smart Watch
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Menu
