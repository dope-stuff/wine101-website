import {splitArray} from '@/lib/utils/splitArray'
import Carousel from '@/modules/carousel/template'
import FlasksIcon from '@/modules/common/images/flasks'
import Comments from './comments'
import Galleries from '../templates/gallery'
import ServiceDetail from '../templates/service-detial'
import ClientCard from '@/modules/card/template/client'
import {Event} from '@/lib/data/models/event'
import {Image} from '@nextui-org/react'

interface OurClientProps {
  data: Event
  events: Event[]
  details: any
  subdetails: any
  hideSplash?: boolean
}
export default function OurClient({data, events, details, subdetails, hideSplash}: OurClientProps) {
  const galleries = data.gallery

  const poster = (
    <Image
      key="poster"
      removeWrapper
      className="max-h-[450px] w-full rounded-none object-contain bg-primary"
      src={data.posters}
      alt=""
    />
  )

  const carouselElements = !!data.videos
    ? [
        ...data.videos
          .split(',')
          .map((e, i) => (
            <iframe
              key={i}
              className="w-full h-[450px]"
              src={e}
              title={data.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )),
        !!data.posters && poster,
      ]
    : [
        !!data.posters ? (
          poster
        ) : (
          <Image
            key="logo"
            removeWrapper
            className="max-h-[450px] w-full rounded-none object-contain bg-primary"
            src="https://i.ibb.co/V9XQK7z/wine-1-O1-Logo-Sq.webp"
            alt=""
          />
        ),
      ]

  const getRandomElement = (arr: {width: number; height: number}[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2">
      <div className="flex-row flex flex-nowrap gap-2 items-center">
        <div>{data.name}</div>
        <div className="h-4 w-[2px] bg-black" />
        <div>{data.owner}</div>
      </div>
      <ServiceDetail
        hideSplash
        elements={carouselElements as JSX.Element[]}
        data={{
          ...data,
          details: details,
          subdetails: subdetails,
        }}
      />
      {data.testimonials.length > 0 && (
        <div className="max-w-[2040px] w-full flex flex-col p-4 relative">
          <div className="flex-row flex items-center gap-2">
            <div className="uppercase text-4xl my-4">how lovebirds talk about us</div>
            <FlasksIcon width={100} height={100} />
          </div>
          <Carousel
            elements={splitArray(data.testimonials.map((e) => e.heading)).map((e, i) => (
              <Comments key={i} comments={e} />
            ))}
            slidesPerView={1}
            gap={0}
          />
        </div>
      )}
      {!!data.gallery && <Galleries images={`${galleries}`.split(',')} />}
      {events.length > 0 ? (
        <div className="max-w-[2040px] flex flex-col w-full mx-auto px-10 relative">
          <div className="uppercase text-4xl mx-auto my-4">Explore more</div>
          <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
            {events.map((c, i) => (
              <ClientCard data={c} key={i} withDetail />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
