interface SpecificationsType {
  type?: string
  max_speed?: number
  engine_power?: number
  mileage_on_a_single_charge?: number
  type_of_brake?: string
  cruise_control?: string
}

interface SpecificationsProps {
  product: SpecificationsType
}

const Specifications: React.FC<SpecificationsProps> = ({ product }) => {
  return (
    <div className="ProductPage_description-specifications">
      <>
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Тип</p>
          <p className="specifications_discription">{product.type}</p>
        </div>
        <div className="line" />
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Макс. скорость до (км/ч):</p>
          <p className="specifications_discription">{product.max_speed}</p>
        </div>
        <div className="line" />
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Мощность двигателя</p>
          <p className="specifications_discription">{product.engine_power}</p>
        </div>
        <div className="line" />
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Пробег на одном заряде</p>
          <p className="specifications_discription">
            {product.mileage_on_a_single_charge}
          </p>
        </div>
        <div className="line" />
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Тип переднего тормоза</p>
          <p className="specifications_discription">{product.type_of_brake}</p>
        </div>
        <div className="line" />
        <div className="ProductPage_description-specifications_flex">
          <p className="specifications_titles">Круиз-контроль</p>
          <p className="specifications_discription">{product.cruise_control}</p>
        </div>
      </>
    </div>
  )
}

export default Specifications
