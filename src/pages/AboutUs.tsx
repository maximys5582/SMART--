import { Link } from "react-router-dom"
import ScrollOnTop from "../components/scrolloOnTop"
import "../style/AboutUs.scss"
import { getImageByKey } from "../getImageByKey"

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <ScrollOnTop />
        <div className="bredcrumbs">
          <Link to="/" className="bredcrumbs_link">
            Главная
          </Link>
          ⯈
          <Link to="/aboutus" className="bredcrumbs_link">
            О нас
          </Link>
        </div>

        <div className="AboutUs">
          <h2 className="AboutUs_title title">О нас</h2>

          <span className="AboutUs_text">
            Официальный представитель производителей эксклюзивного
            электротранспорта и Смарт-Техники, Созданная в 2015 году компания
            Смарт-Техника стала одним из первых дистрибьютеров персонального
            электротранспорта в России и уже более трёх лет является официальным
            представителем таких производителей эксклюзивного электронного
            транспорта, как <strong>Yamato</strong>, <strong>SmartONE</strong>,{" "}
            <strong>HALTEN</strong> и <strong>Kugoo</strong>
          </span>

          <h3 className="title_little">
            Постоянно растущая и развивающаяся Компания
          </h3>

          <span className="AboutUs_text">
            На сегодняшней день Компания Смарт-Техника обладает собственным
            розничным магазинами в г. Санкт-Петербурге, официальными
            представительствами в различных районах г. СПб и Ленобласти, сетью
            складов в Петербурге, Москве и других крупных городах России.
            Мы постоянно растём и развиваемся. Доставка наших товаров
            осуществляется во все регионы Страны!
          </span>

          <h3 className="title_little">
            Самый большой выбор персонального электротранспорта
          </h3>

          <span className="AboutUs_text">
            Самый большой выбор персонального электротранспорта представлен
            в выставочных залах Смарт-Техника по адресам:
            <br />
            <strong>ул. Ленсовета 81;</strong> <br />
            <strong>ул. Дыбенко 23к1;</strong> <br />
            <strong>пр. Энгельса 113 к 2.</strong> <br />
            Расширение ассортимента происходит стабильно раз в полгода,
            и вы всегда найдёте у нас самые эксклюзивные модели электронного
            транспорта нового поколения!
          </span>
        </div>
      </div>

      <div className="inStock">
        <div className="container">
          <h3 className="title_little inStock_title">
            Всегда в наличии большой выбор:
          </h3>

          <div className="inStock_bigFlex">
            <div className="inStock_flex">
              <div className="inStock_icon">
                {getImageByKey("Gyroscuters")} <span>гироскутеров</span>
              </div>
              <div className="inStock_icon">
                {getImageByKey("Segways")} <span>сигвеев и мини сигвеев</span>
              </div>
              <div className="inStock_icon">
                {getImageByKey("scooter")}
                <span>электросамокатов, стандартных и полноприводных</span>
              </div>
            </div>
            <div className="inStock_flex">
              <div className="inStock_icon">
                {getImageByKey("Electric_bicycles")}
                <span>электроскейтов</span>
              </div>
              <div className="inStock_icon">
                {getImageByKey("Electric_skates")}
                <span>электровелосипедов</span>
              </div>
              <div className="inStock_icon">
                {getImageByKey("More_svg")}
                <span>и многое другое</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="title_little">
          Опытный и высококвалифицированный персонал
        </h3>
        <span className="AboutUs_text">
          В компании работают опытные высококвалифицированные сотрудники, всегда
          готовые помочь вам с выбором персонального транспортного средства,
          ответить на все возможные вопросы и научить кататься на выбранной вами
          модели
        </span>

        <h3 className="title_little">Возможность тест драйва</h3>

        <span className="AboutUs_text">
          Благодаря месторасположению и инфраструктуре, прилегающей к магазинам
          территорий, наши посетители могут перед оформлением покупки пройти
          тест-драйв на любом из представленных в зале транспортных средств.
          Для тест-драйва крупной техники необходима предварительная запись.
          Её можно осуществить по телефону:
          <a href="tel"> +7 (812) 509-23-43</a> или{" "}
          <strong>через консультанта в магазине.</strong>
        </span>

        <h3 className="title_little">
          Цель и миссия компании Смарт-Техника.рф
        </h3>

        <span className="AboutUs_text">
          <strong>Цель компании Смарт Техника</strong> — в 2020 году стать самым
          крупным магазином по продаже персонального электротранспорта
          в Санкт-Петербурге. А также открывать свои филиалы во всех крупных
          городах России, что происходит уже сейчас.
        </span>

        <span className="AboutUs_text">
          <strong>Миссия компании Смарт Техника </strong>— познакомить россиян
          с экологически чистыми видами транспорта и улучшить экологию Страны!
          Мы надеемся не просто привить нашей нации любовь к ЭКО-транспорту,
          а создать в стране новую культуру передвижения.
        </span>

        <h2 className="AboutUs_title_bottom title">
          Мы всегда рады взаимовыгодному сотрудничеству.
          <br /> Свои предложения отправляйте{" "}
          <a href="mailto:smartfamily.info@yandex.ru">
            smartfamily.info@yandex.ru
          </a>
        </h2>
      </div>
    </div>
  )
}

export default AboutUs
