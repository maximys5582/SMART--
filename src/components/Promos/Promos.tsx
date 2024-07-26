import React from "react"
import "./Promos.scss"

interface PromosProps {
  title: string
  img: React.ReactNode
  text: string
}

const Promos: React.FC<PromosProps> = ({ title, img, text }) => {
  return (
    <div className="Promos">
      <p className="Promos_title">{title}</p>
      <img src={img} alt="" className="Promos-image" />
      <p className="Promos_text">{text}</p>
    </div>
  )
}

export default Promos
