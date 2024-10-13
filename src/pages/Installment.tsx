import { Link } from "react-router-dom"
import ScrollOnTop from "../components/scrolloOnTop"
import { getImageByKey } from "../getImageByKey"
import "../style/Installment.scss"

const Installment = () => {
  return (
    <div className="container">
      <ScrollOnTop />
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈<span className="bredcrumbs_link">Рассрочка 0|0|18</span>
      </div>

      <div className="Installments">
        <h2 className="title">Рассрочка 0|0|18</h2>

        <div className="Installments__content">
          <div className="Installments__mainImage">
            <img src={getImageByKey("Installment")} alt="" />
          </div>
          <h4 className="StocksPage_title">Как работает рассрочка</h4>
          <div className="Installments__mainText">
            <p>
              ТЕПЕРЬ КАРТУ ХАЛВА МОЖНО ОФОРМИТЬ В СЕТИ НАШИХ МАГАЗИНОВ
              СОВЕРШЕННО БЕСПЛАТНО. Это займёт не более 10 минут. С собой
              необходимо иметь лишь паспорт.
            </p>

            <p>
              С картой «Халва» сотрудничают более 200 000 партнёров
              от продуктовых магазинов до компаний продающих крупную бытовую
              технику и даже мебель, у которых покупки можно делать в бесплатную
              рассрочку. Сумма каждой такой покупки делится на равные части
              (по количеству месяцев рассрочки у партнёра). Раз в месяц «части»
              по всем покупкам суммируются и выставляются единым Платежом
              по рассрочке (дата выставления платежа равна дате оформления
              карты).
            </p>
          </div>

          <p className="Installments__mainText Installments__YellowBg">
            Проценты по вашей рассрочке за покупку в нашем магазине платит
            за вас НАШ МАГАЗИН
          </p>

          <div className="Installments__exampleImage">
            <img src={getImageByKey("Example")} alt="" />
          </div>
          <div className="Installments__description">
            <p>
              Подключите подписку "Халва Десятка" и делайте любые покупки у
              партнеров с единым увеличенным сроком рассрочки 10 месяцев.
            </p>
            <p>Можно расширить срок до 18-ти месяцев.</p>
          </div>
          <div className="Installments__making">
            <form action="" className="Installments__form">
              <h4 className="StocksPage_title Installments__form_title">
                Оформить РАССРОЧКУ
              </h4>

              <div>
                <p className="delivery_titles">Имя</p>
                <input
                  type="text"
                  className="Installments_inp"
                  placeholder="Например, Иван"
                  onChange={(e) => setName(e.target.value)}
                />

                <p className="delivery_titles">Номер телефона</p>
                <input
                  type="text"
                  className="Installments_inp"
                  placeholder="+7 (9__) ___-__-__"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <button className="Installments__button">Отправить</button>
            </form>

            <div className="Installments__making_description">
              <h4 className="StocksPage_title Installments__form_title">
                Мобильное приложение «Совкомбанк – Халва»
              </h4>

              <p>Мобильный банковский офис, который всегда с вами:</p>

              <ul>
                <li>контроль вашей карты «Халва»</li>
                <li>наиболее востребованные банковские функции</li>
                <li>круглосуточный чат с поддержкой</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Installment
