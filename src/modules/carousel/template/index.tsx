'use client'

import {useState, ReactElement, useRef, useEffect} from 'react'
import {Button} from '@nextui-org/react'
import ArrowRightIcon from '@/modules/common/images/arrow-right'

interface CarouselProps {
  elements: ReactElement[]
  slidesPerView?: number
  arrowColor?: string
  gap?: number
}

const Carousel = ({elements, slidesPerView, arrowColor = 'black', gap = 16}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [elementWidth, setElementWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setElementWidth(elementRef.current.clientWidth)
      }
    }

    handleResize() // Set initial width
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateMaxIndex = () => {
    const containerWidth = containerRef.current?.clientWidth || 0
    const maxIndex = elements.length - Math.floor(containerWidth / (elementWidth + gap))
    return maxIndex < 0 ? 0 : maxIndex
  }

  const handleNextSlide = () => {
    const maxIndex = calculateMaxIndex()
    if (currentIndex < calculateMaxIndex()) {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0))
    } else {
      setCurrentIndex(0)
    }
  }

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const getTranslateX = () => {
    return currentIndex * (elementWidth + gap)
  }

  return (
    <div className="relative w-full">
      {currentIndex > 0 && (
        <Button
          variant="light"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-transparent"
          onClick={handlePrevSlide}
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
              className="flex flex-shrink-0 relative"
              style={{flex: slidesPerView ? `0 0 ${100 / slidesPerView}%` : '0 0 0'}}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      {currentIndex < calculateMaxIndex() && (
        <Button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-transparent"
          onClick={handleNextSlide}
        >
          <ArrowRightIcon color={arrowColor} />
        </Button>
      )}
    </div>
  )
}

export default Carousel
