'use client'
import {useState} from 'react'
import {Image} from '@nextui-org/react'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export default function Galleries({images}: {images: string}) {
  const [index, setIndex] = useState(-1)
  const galleries = images.split(',\n')
  const currentImage = galleries[index]
  const nextIndex = (index + 1) % galleries.length
  const nextImage = galleries[nextIndex] || currentImage
  const prevIndex = (index + galleries.length - 1) % galleries.length
  const prevImage = galleries[prevIndex] || currentImage

  const handleClick = (index: number) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div className="relative z-10">
      <div className="flex flex-wrap justify-center">
        {galleries.map((image, index) => (
          <div key={index} className="m-[2px] select-none relative bg-gray-400 p-0">
            <Image
              removeWrapper
              src={image}
              alt={image}
              height={180}
              className="max-h-[180px] object-contain max-w-[320px] rounded-none"
              onClick={() => handleClick(index)}
            />
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
