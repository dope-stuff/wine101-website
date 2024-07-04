'use client'
import ArrowRightIcon from '@/modules/common/images/arrow-right'
import {useState, ReactElement, useRef, useEffect} from 'react'

interface CarouselProps {
  elements: ReactElement[]
  slidesPerView?: number
  arrowColor?: string
  gap?: number
}

const Carousel = ({elements, slidesPerView = 7, arrowColor, gap = 16}: CarouselProps) => {
  const [itemsPerView, setItemsPerView] = useState(7)
  const containerRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [elementWidth, setElementWidth] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    setItemsPerView(slidesPerView)

    if (elementRef.current) {
      const handleResize = () => {
        const containerWidth = elementRef.current?.clientWidth || 0
        setElementWidth(containerWidth)
      }
      handleResize() // Set initial width
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [elementRef, elementWidth, gap, slidesPerView])

  useEffect(() => {
    const wide = elementWidth * elements.length
    setPageCount(Math.ceil(wide / elementWidth) - Math.ceil(elements.length / itemsPerView))
  }, [elementWidth, elements.length, itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + 1,
        // elements.length > itemsPerView ? elements.length + 1 : elements.length + 1 - itemsPerView
        pageCount
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
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50"
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
            transform: `translateX(-${currentIndex * (elementWidth + gap)}px)`,
            gap,
          }}
        >
          {elements.map((element, index) => (
            <div
              key={index}
              ref={elementRef}
              className="w-full flex flex-shrink-0 relative"
              style={{flex: `0 0 ${100 / itemsPerView}%`}}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      {/* {currentIndex < elements.length - 1 && currentIndex <= elements.length - itemsPerView && ( */}
      {currentIndex < pageCount && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50"
          onClick={nextSlide}
        >
          <ArrowRightIcon color={arrowColor} />
        </button>
      )}
    </div>
  )
}

export default Carousel
