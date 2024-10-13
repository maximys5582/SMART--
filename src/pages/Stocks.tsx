import { Link, NavLink } from "react-router-dom"
import ScrollOnTop from "../components/scrolloOnTop"
import Promos from "../components/Promos/Promos"
import "../style/Stocks.scss"
import { ArrayPromos } from "../Array/Array"

const Stocks = () => {
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
      </div>

      <div className="Stocks">
        <h2 className="title">Акции</h2>

        <div className="Promos_wrap Stocks_promos">
          {ArrayPromos.map((item, index) => (
            <NavLink to={"/stocks/" + index} key={index}>
              <Promos title={item.title} img={item.img} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stocks
