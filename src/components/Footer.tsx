import { Link } from "react-router-dom"
import { getImageByKey } from "../getImageByKey"
import "../style/Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer_wrapper">
          <div className="Footer_contact">
            {getImageByKey("logo")}

            <div className="Footer_contact_tel">
              <p className="">+7 (958) 111-95-03</p>
              <p className="">+7 (812) 660-50-54</p>
              <p className="time-work">Пн-вс: c 10:00 до 21:00</p>
            </div>

            <p className="street">
              Проспект Стачек 67 к.5 Лиговский проспект 205 Гражданский
              проспект, 116 к.5
            </p>
          </div>

          <div className="Footer_for-client">
            <h4 className="Footer_title">Для клиента</h4>

            <div className="links">
              <Link to={""}>Как купить</Link>
              <Link to={""}>Доставка и оплата</Link>
              <Link to={""}>Кредит</Link>
              <Link to={""}>Политика конфиденциальности</Link>
              <Link to={""}>Вопросы и ответы (F.A.Q.)</Link>
              <Link to={""}>Сервис и гарантия</Link>
            </div>
          </div>

          <div className="Footer_aboutUs">
            <div className="Footer_title">О магазине</div>

            <div className="links">
              <Link to={""}>Отзывы</Link>
              <Link to={""}>Наши преимущества</Link>
              <Link to={""}>История компании</Link>
              <Link to={""}>Сотрудничество</Link>
              <Link to={""}>Партнёрская программа</Link>
              <Link to={""}>Вакансии</Link>
            </div>
          </div>

          <div className="Footer_cooperation">
            <div className="Footer_title">Сотрудничество</div>

            <div className="links">
              <Link to={""}>Оптом</Link>
              <Link to={""}>Дропшиппинг</Link>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="Footer_bottom">
          <p className="protection">SmartТехника © 2021 Все права защищены</p>

          <div className="socialNetwork"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
