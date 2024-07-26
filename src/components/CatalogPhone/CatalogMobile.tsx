import { getImageByKey } from "../../getImageByKey"
import { Link } from "react-router-dom"

const CatalogMobile = () => {
  return (
    <>
      <ul className="catalogPhonePhone_list">
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
          {" "}
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
    </>
  )
}

export default CatalogMobile
