import {eventService} from '@/lib/data/event.service'
import {Event} from '@/lib/data/models/event'
import Galleries, {CustomImage} from '@/modules/services/templates/gallery'
import ServiceDetail from '@/modules/services/templates/service-detial'
import {uniqueDimensions} from '../../workshop/[id]/page'
import {Image} from '@nextui-org/react'
import Comments from '@/modules/services/components/comments'
import Carousel from '@/modules/carousel/template'
import {splitArray} from '@/lib/utils/splitArray'
import FlasksIcon from '@/modules/common/images/flasks'

async function GetPageData(id: number) {
  const {data: pageData} = await eventService.getOne({populate: '*'}, Number(id))

  return pageData
}

export default async function Page({params}: {params: any}) {
  const data: Event = await GetPageData(Number(params.id))

  const galleries = data.gallery as string
  const details = {
    'total guest': data.totalGuests || '-',
    venue: data.venue || '-',
    'theme color': data.themeColor || '-',
    'total wine':
      (data.redWineUsed || 0) +
      (data.roseWineUsed || 0) +
      (data.sparklingWineUsed || 0) +
      (data.whiteWineUsed || 0),
  }
  const subdetails = {
    rose: data.roseWineUsed,
    sparkling: data.sparklingWineUsed,
    white: data.whiteWineUsed,
    red: data.redWineUsed,
  }
  const getRandomElement = (arr: {width: number; height: number}[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const carouselElements = [
    <iframe
      key="video"
      className="w-full h-[350px]"
      src={data.videos}
      title={data.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />,
    <Image
      key="image"
      removeWrapper
      className="max-h-[350px] w-full rounded-none object-cover"
      src={data.posters}
      alt=""
    />,
  ]
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2">
      <div className="flex-row flex flex-nowrap gap-2 items-center">
        <div>{data.name}</div>
        <div className="h-4 w-[2px] bg-black" />
        <div>{data.owner}</div>
      </div>
      <ServiceDetail
        elements={carouselElements}
        data={{
          ...data,
          details: details,
          subdetails: subdetails,
        }}
      />
      <div className="max-w-[2040px] w-full flex flex-col p-4">
        <div className="flex-row flex items-center gap-2">
          <div className="uppercase text-4xl my-4">how lovebirds talk about us</div>
          <FlasksIcon width={100} height={100} />
        </div>
        {data.testimonials.length > 0 && (
          <Carousel
            elements={splitArray(data.testimonials.map((e) => e.heading)).map((e, i) => (
              <Comments key={i} comments={e} />
            ))}
            slidesPerView={1}
            gap={0}
          />
        )}
      </div>
      <Galleries
        images={
          galleries.split(',').map((e) => ({
            src: e,
            original: e,
            ...getRandomElement(uniqueDimensions),
          })) as CustomImage[]
        }
      />
    </div>
  )
}
