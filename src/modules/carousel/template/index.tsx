'use client'
import ArrowRightIcon from '@/modules/common/images/arrow-right'
import {Button} from '@nextui-org/react'
import {useState, ReactElement, useRef, useEffect} from 'react'

interface CarouselProps {
  elements: ReactElement[]
  slidesPerView?: number
  arrowColor?: string
  gap?: number
}

const Carousel = ({elements, slidesPerView = 6, arrowColor, gap = 16}: CarouselProps) => {
  const [itemsPerView, setItemsPerView] = useState(7)
  const containerRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [elementWidth, setElementWidth] = useState(0)

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === elements.length
        ? 0
        : Math.min(
            prevIndex + 1,
            Math.round(elements.length > 0 ? elements.length - 1 : elements.length)
          )
    )
    if (
      Math.round(elements.length - containerRef.current?.clientWidth! / elementWidth) -
        currentIndex ===
      0
    ) {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const getFirstTwoDecimal = () => {
    const value = (elements.length - containerRef.current?.clientWidth! / (elementWidth + gap))
      .toString()
      .split('.')[1]
    if (value) {
      return Number(value.slice(0, 2)) / 100
    }
    return 0
  }

  const getTranslateX = () => {
    return Math.round(elements.length - containerRef.current?.clientWidth! / elementWidth) -
      currentIndex ===
      0
      ? currentIndex * (elementWidth + gap) + elementWidth * getFirstTwoDecimal()
      : currentIndex * (elementWidth + gap)
  }
  return (
    <div className="relative w-full">
      {currentIndex > 0 && (
        <Button
          variant="light"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-transparent"
          onClick={prevSlide}
        >
          <ArrowRightIcon className="rotate-180" color={arrowColor} />
        </Button>
      )}
      <div className="relative w-full mx-auto overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${getTranslateX()}px)`,
            gap,
          }}
        >
          {elements.map((element, index) => (
            <div
              key={index}
              ref={elementRef}
              className="flex-1 flex flex-shrink-0 relative"
              style={{flex: itemsPerView ? `0 0 ${100 / itemsPerView}%` : ''}}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      {elements.length > 1 && (
        <Button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-transparent"
          onClick={nextSlide}
        >
          <ArrowRightIcon color={arrowColor} />
        </Button>
      )}
    </div>
  )
}

export default Carousel
