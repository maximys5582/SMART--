import { getImageByKey } from "../../getImageByKey"
import "../../style/CatalogPhone.scss"
import CatalogMobile from "./CatalogMobile"
import MoreMobile from "./MoreMobile"
import SearchMobile from "./SearchMobile"

interface CatalogPhoneProps {
  activeSection: string
  close: () => void
}

const CatalogPhone: React.FC<CatalogPhoneProps> = ({
  activeSection,
  close,
}) => {
  return (
    <>
      <div className="CatalogPhone" onClick={close} />
      <div className="CatalogPhone_container">
        <h2 className="title catalog-title">
          {activeSection === "catalog" ? "Каталог" : ""}
          {activeSection === "more" ? "Ещё" : ""}
          {activeSection === "search" ? "Поиск" : ""}
        </h2>

        <span className="closeMenu" onClick={close}>
          {getImageByKey("x")}
        </span>

        {activeSection === "catalog" && <CatalogMobile />}
        {activeSection === "more" && <MoreMobile />}
        {activeSection === "search" && <SearchMobile />}
      </div>
    </>
  )
}

export default CatalogPhone
