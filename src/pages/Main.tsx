import BestSellers from "../components/BestSellers/BestSellers"
import Slider from "../components/Slider/slider"
import Promos from "../components/Promos/Promos"
import { getImageByKey } from "../getImageByKey"
import PromosNews from "../components/Promos/PromosNews"
import ScrollOnTop from "../components/scrolloOnTop"

const Main = () => {
  return (
    <div className="container">
      <ScrollOnTop />
      <Slider />
      <BestSellers title="Хиты продаж" />
      <BestSellers title="Новинки" />

      <div className="Promos_wrap">
        <Promos
          title="Скидки до 30% на сигвеи"
          img={getImageByKey("GyroscuterPromo")}
        />
        <Promos title="Неделя смарт часов" img={getImageByKey("appleWath")} />
      </div>

      <BestSellers title="Сигвеи" />
      <BestSellers title="Моноколеса" />

      <div className="Promos_wrap">
        <Promos
          title="Скидки до 30% на сигвеи"
          img={getImageByKey("percentPromo")}
        />
        <Promos
          title="Smart Balance Premium по специальной цене"
          img={getImageByKey("gyroPromo")}
        />
      </div>

      <BestSellers title="Электровелосипеды" />

      <PromosNews
        titleF="Открытие нового магазина"
        textF="Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения"
        imgF={getImageByKey("")}
        titleS="Работа в праздничные дни"
        textS="Принимая во внимание показатели успешности, социально-экономическое развитие играет определяющее значение для вывода текущих активов"
        imgS={getImageByKey("")}
      />
    </div>
  )
}

export default Main
