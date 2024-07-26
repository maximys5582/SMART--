import { useState, useEffect } from "react"
import "../../style/SearchMobile.scss"

const SearchMobile = () => {
  const [placeholder, setPlaceholder] = useState(
    "Введите запрос, например «Smart balance»"
  )

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth <= 320) {
        setPlaceholder("Введите запрос")
      } else {
        setPlaceholder("Введите запрос, например «Smart balance»")
      }
    }

    updatePlaceholder()
    window.addEventListener("resize", updatePlaceholder)

    return () => {
      window.removeEventListener("resize", updatePlaceholder)
    }
  }, [])

  return (
    <div className="SearchMobile">
      <input
        className="SearchMobile_input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchMobile
