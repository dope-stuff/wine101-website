'use client'
import ArrowRightIcon from '@/modules/common/images/arrow-right'
import {useState, ReactElement, useRef} from 'react'

interface CarouselProps {
  elements: ReactElement[]
  slidesPerView?: number
  arrowColor?: string
  gap?: number
}

const Carousel = ({elements, slidesPerView = 7.5, arrowColor, gap = 16}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        elements.length > slidesPerView && elements.length > 7
          ? elements.length + 1
          : elements.length - slidesPerView
      )
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <div className="relative w-full">
      {currentIndex > 0 && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          onClick={prevSlide}
        >
          <ArrowRightIcon className="rotate-180" color={arrowColor} />
        </button>
      )}
      <div className="relative w-full mx-auto overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / slidesPerView) * 100}%)`,
            gap: gap,
          }}
        >
          {elements.map((element, index) => (
            <div
              key={index}
              className="w-full flex flex-shrink-0 relative"
              style={{flex: `0 0 ${100 / slidesPerView}%`}}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      {currentIndex < elements.length - 1 && currentIndex <= elements.length - slidesPerView && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <ArrowRightIcon color={arrowColor} />
        </button>
      )}
    </div>
  )
}

export default Carousel