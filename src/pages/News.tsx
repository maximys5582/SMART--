import "../style/News.scss"
import { Link, useParams } from "react-router-dom"
import { ArrayNews } from "../Array/Array"
import { getImageByKey } from "../getImageByKey"
import ScrollOnTop from "../components/scrolloOnTop"

const News = () => {
  const { id } = useParams<{ id: string }>()
  const newsItem = id ? ArrayNews[parseInt(id, 10)] : null

  return (
    <div className="container">
      <ScrollOnTop />
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈
        <Link to="/news" className="bredcrumbs_link">
          Новости
        </Link>
        ⯈<span className="bredcrumbs_link">{newsItem?.title}</span>
      </div>

      <div className="News">
        <h2 className="title">{newsItem?.title}</h2>
        <div className="News_wrapper">
          <div>
            <p className="News_text">
              {newsItem?.firstBlockWithText?.firstTextInside}
            </p>
            <p className="News_text">
              {newsItem?.firstBlockWithText?.secondTextInside}
            </p>
            <p className="News_text">
              {newsItem?.firstBlockWithText?.triedTextInside}
            </p>

            <h3 className="title_news">{newsItem?.titleInside}</h3>

            <p className="News_text">
              {newsItem?.secondBlockWithText?.firstTextInside}
            </p>
            <p className="News_text">
              {newsItem?.secondBlockWithText?.secondTextInside}
            </p>
          </div>
          <div className="News_img">
            {<img src={getImageByKey(newsItem?.img)} alt="News" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
