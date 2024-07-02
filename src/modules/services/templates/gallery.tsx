'use client'
import {useState} from 'react'
import {Gallery} from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import {Image} from 'react-grid-gallery'
import {ThumbnailImageProps} from 'react-grid-gallery'

export interface CustomImage extends Image {
  original: string
}

// const ImageComponent = (props: ThumbnailImageProps) => {
//   const [show, setShow] = useState(false);

//   if (show) {
//     return <img {...props.imageProps} />;
//   }

//   return (
//     <div style={{ ...props.imageProps.style, textAlign: "center" }} onMouseOver={() => setShow(true)}>
//       Hover to show
//     </div>
//   );
// };

export default function Galleries({images}: {images: CustomImage[]}) {
  const [index, setIndex] = useState(-1)

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number, item: CustomImage) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        // thumbnailImageComponent={ImageComponent}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}
