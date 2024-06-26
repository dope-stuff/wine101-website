'use client'
import ArrowRightIcon from '@/modules/common/images/arrow-right'
import {useState, ReactElement, useRef, useEffect} from 'react'

interface CarouselProps {
  elements: ReactElement[]
  slidesPerView?: number
  arrowColor?: string
  gap?: number
}

const Carousel = ({elements, slidesPerView = 8, arrowColor, gap = 16}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [elementWidth, setElementWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const elementWidth = containerWidth / slidesPerView
      setElementWidth(elementWidth)
    }
  }, [slidesPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, elements.length + 1))
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
          className="flex-row flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * elementWidth}px)`,
            gap,
          }}
        >
          {elements.map((element, index) => (
            <div key={index} className="flex-1 flex-shrink-0" style={{width: elementWidth}}>
              {element}
            </div>
          ))}
        </div>
      </div>
      {slidesPerView > 6 && currentIndex <= elements.length - slidesPerView && (
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
