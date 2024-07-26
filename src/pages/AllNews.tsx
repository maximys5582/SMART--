import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "../style/AllNews.scss"
import CardNews from "../components/CardNews/CardNews"
import { ArrayNews } from "../Array/Array"
import Pagination from "../components/Pagination/Pagination"

const AllNews = () => {
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = ArrayNews.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <div className="bredcrumbs">
        <Link to="/" className="bredcrumbs_link">
          Главная
        </Link>
        ⯈
        <Link to="/news" className="bredcrumbs_link">
          Новости
        </Link>
      </div>
      <div className="AllNews">
        <h2 className="title">Новости</h2>
        <div className="AllNews_cards">
          {currentItems.map((item, index) => (
            <NavLink to={"/news/" + index} key={index}>
              <CardNews
                key={index}
                img={item.img}
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </NavLink>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={ArrayNews.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default AllNews
