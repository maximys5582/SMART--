import { Link, useParams } from "react-router-dom"
import ScrollOnTop from "../components/scrolloOnTop"
import { ArrayPromos } from "../Array/Array"
import React from "react"

interface PromoItem {
  id: number
  BDbigImg: string
  title: string
  text: string
  ulText?: string[]
}

const StocksPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const promosItem: PromoItem | undefined = ArrayPromos.find(
    (item) => item.id === parseInt(id || "0")
  )

  return (
    <div className="container">
      <ScrollOnTop />
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈
        <Link to="/stocks" className="bredcrumbs_link">
          Акции
        </Link>
        ⯈<span className="bredcrumbs_link">{promosItem?.title}</span>
      </div>

      <div className="StocksPage">
        <h2 className="title">{promosItem?.title}</h2>

        <div className="StocksPage_content">
          <div className="StocksPage_information">
            <p>{promosItem?.text}</p>

            <h4 className="StocksPage_title">Условия Акции:</h4>

            {promosItem?.ulText && promosItem.ulText.length > 0 ? (
              <ul>
                {promosItem.ulText.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Условия акции не указаны.</p>
            )}
          </div>

          <div className="StocksPage_image">
            <img src={promosItem?.BDbigImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StocksPage
