import React, { useEffect, useRef } from "react"

interface PickupMapProps {
  onAddressSelect: (address: string) => void
  points: Array<{ coords: [number, number]; address: string }>
}

const PickupMap: React.FC<PickupMapProps> = ({ onAddressSelect, points }) => {
  const mapInitialized = useRef(false)

  useEffect(() => {
    if (mapInitialized.current || !window.ymaps) return

    mapInitialized.current = true
    const ymaps = window.ymaps

    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [59.938784, 30.314997], // Центр карты (например, Санкт-Петербург)
        zoom: 10,
      })

      // Добавляем метки из переданного массива points
      points.forEach((point) => {
        const placemark = new ymaps.Placemark(point.coords, {
          hintContent: point.address,
        })

        placemark.events.add("click", () => {
          onAddressSelect(point.address)
        })

        map.geoObjects.add(placemark)
      })
    })
  }, [onAddressSelect, points])

  return <div id="map" style={{ width: "317px", height: "329px" }} />
}

export default PickupMap
