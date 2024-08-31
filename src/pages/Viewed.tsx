import { Link } from "react-router-dom"
import ScrollOnTop from "../components/scrolloOnTop"

const Viewed = () => {
  return (
    <div className="container">
      <ScrollOnTop />
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈<span className="bredcrumbs_link">Просмотренные товары</span>
      </div>
    </div>
  )
}

export default Viewed
