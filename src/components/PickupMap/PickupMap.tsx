import React, { useEffect, useRef, useState } from "react"

interface PickupMapProps {
  onaddressSelect: (address: string) => void
  points: Array<{ coords: [number, number]; address: string }>
  center: [number, number]
}

const PickupMap: React.FC<PickupMapProps> = ({
  onaddressSelect,
  points,
  center,
}) => {
  const mapRef = useRef<any>(null)
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  useEffect(() => {
    if (!window.ymaps) return

    const ymaps = window.ymaps

    ymaps.ready(() => {
      if (!mapRef.current) {
        mapRef.current = new ymaps.Map("map", {
          center: center,
          zoom: 10,
        })
      } else {
        mapRef.current.setCenter(center)
      }

      mapRef.current.geoObjects.removeAll()

      points.forEach((point) => {
        const placemark = new ymaps.Placemark(
          point.coords,
          {
            hintContent: point.address,
          },
          {
            preset:
              point.address === selectedPoint
                ? "islands#redIcon" // Измените стиль для активной точки
                : "islands#blueIcon", // Стиль для остальных точек
          }
        )

        placemark.events.add("click", () => {
          setSelectedPoint(point.address) // Устанавливаем выбранную точку
          onaddressSelect(point.address) // Передаем адрес в родительский компонент
        })

        mapRef.current.geoObjects.add(placemark)
      })
    })
  }, [onaddressSelect, points, center, selectedPoint])

  return <div id="map" style={{ width: "317px", height: "329px" }} />
}

export default PickupMap
