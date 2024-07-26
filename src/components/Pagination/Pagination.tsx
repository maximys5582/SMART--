import React from "react"
import "./Pagination.scss"

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="pagination">
      <ul className="pagination_list">
        <li
          className={`pagination_item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <a
            onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
            className="pagination_link"
          >
            ⯇
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination_item ${
              currentPage === number ? "active" : ""
            }`}
          >
            <a onClick={() => paginate(number)} className="pagination_link">
              {number}
            </a>
          </li>
        ))}
        <li
          className={`pagination_item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <a
            onClick={() =>
              currentPage !== pageNumbers.length && paginate(currentPage + 1)
            }
            className="pagination_link"
          >
            ⯈
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
