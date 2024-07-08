/* eslint-disable @next/next/no-img-element */
'use client'
import {useState, useEffect} from 'react'
import {Card, Image, Skeleton} from '@nextui-org/react'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default function Galleries({images}: {images: string[]}) {
  const [index, setIndex] = useState(-1)
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false))

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev]
      newLoadedImages[index] = true
      return newLoadedImages
    })
  }

  return (
    <div className="relative z-10">
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, idx) => (
          <div key={idx} className="select-none relative p-0">
            {!loadedImages[idx] ? (
              <Card className="w-[200px] space-y-5" radius="none">
                <Skeleton isLoaded={false} className="rounded-none">
                  <div className="h-[240px] rounded-lg bg-secondary"></div>
                </Skeleton>
              </Card>
            ) : (
              <Image
                removeWrapper
                src={image}
                alt={image}
                height={240}
                className="h-full max-h-[240px] object-cover max-w-[320px] rounded-none cursor-pointer"
                onClick={() => handleClick(idx)}
              />
            )}
            <img src={image} alt={image} onLoad={() => handleImageLoad(idx)} className="hidden" />
          </div>
        ))}
      </div>
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage}
          mainSrcThumbnail={currentImage}
          nextSrc={nextImage}
          nextSrcThumbnail={nextImage}
          prevSrc={prevImage}
          prevSrcThumbnail={prevImage}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}
