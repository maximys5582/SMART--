import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import "./style/nullStyle.scss"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import MenuPhone from "./components/MenuPhone"
import { useState } from "react"
import CatalogPhone from "./components/CatalogPhone/CatalogPhone"
import AllNews from "./pages/AllNews"
import News from "./pages/News"
import ProductPage from "./pages/ProductPage"

const App = () => {
  const [isCatalogPhoneVisible, setIsCatalogPhoneVisible] =
    useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("")

  const handleClickCatalogPhone = () => {
    setIsCatalogPhoneVisible(true)
    setActiveSection("catalog")
  }

  const handleClickMorePhone = () => {
    setIsCatalogPhoneVisible(true)
    setActiveSection("more")
  }

  const handleClickSearchPhone = () => {
    setIsCatalogPhoneVisible(true)
    setActiveSection("search")
  }

  const close = () => {
    setIsCatalogPhoneVisible(false)
    setActiveSection("")
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<AllNews />} />
        <Route path={"/news/:id"} element={<News />} />
        <Route path={"/product/:id"} element={<ProductPage />} />
      </Routes>
      <Footer />
      <MenuPhone
        handleClickCatalogPhone={handleClickCatalogPhone}
        handleClickMorePhone={handleClickMorePhone}
        handleClickSearchPhone={handleClickSearchPhone}
      />
      {isCatalogPhoneVisible && (
        <CatalogPhone close={close} activeSection={activeSection} />
      )}
    </>
  )
}

export default App
