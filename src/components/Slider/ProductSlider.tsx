// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import "./ProductSlider.scss"

import React, { useState } from "react" // <-- Import useState here
import { getImageByKey } from "../../getImageByKey"

interface ProductSliderProps {
  img1: string
  img2: string
  img3: string
}

const ProductSlider: React.FC<ProductSliderProps> = ({ img1, img2, img3 }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null) // Now useState is defined
  return (
    <div className="ProductSlider">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="ProductSlider"
      >
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img1)} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img2)} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img3)} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onClick={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="ProductSlider_pagination"
      >
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img1)} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img2)} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="ProductSlider">
          <img src={getImageByKey(img3)} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSlider
