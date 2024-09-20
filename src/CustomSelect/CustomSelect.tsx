import React, { useState } from "react"
import "./CustomSelect.scss"
import { getImageByKey } from "../getImageByKey"

interface CustomSelectProps {
  onTimeSelect: (time: string) => void
  options: string[]
  defaultValue: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onTimeSelect,
  options,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    onTimeSelect(option) // Передаем выбранное время в родительский компонент
    setIsOpen(false)
  }

  return (
    <div className="custom-select">
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption} {getImageByKey("arrow")}
      </div>
      {isOpen && (
        <ul className="options">
          {options && options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="option"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="option">No options available</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect
