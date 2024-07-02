import {Workshop} from '@/lib/data/models/workshop'
import {workshopService} from '@/lib/data/workshop.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'
import WineCard from '@/modules/card/template/wine'
import Carousel from '@/modules/carousel/template'
import Galleries, {CustomImage} from '@/modules/services/templates/gallery'
import ServiceDetail from '@/modules/services/templates/service-detial'
import {Image} from '@nextui-org/react'
import dayjs from 'dayjs'

async function GetPageData(id: number) {
  const {data: pageData} = await workshopService.getOne({populate: '*'}, Number(id))

  return pageData
}

export const uniqueDimensions = [
  {width: 320, height: 174},
  {width: 320, height: 212},
  {width: 320, height: 213},
  {width: 320, height: 183},
  {width: 240, height: 320},
  {width: 320, height: 190},
  {width: 320, height: 148},
  {width: 248, height: 320},
  {width: 320, height: 113},
  {width: 313, height: 320},
  {width: 320, height: 194},
  {width: 271, height: 320},
  {width: 320, height: 179},
  {width: 320, height: 215},
  {width: 257, height: 320},
  {width: 226, height: 320},
]

export default async function Page({params}: {params: any}) {
  const data: Workshop = await GetPageData(Number(params.id))

  const getRandomElement = (arr: {width: number; height: number}[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const carouselElements = [
    <iframe
      key="video"
      className="w-full h-[300px]"
      src={data.videos}
      title={data.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />,
    <Image
      key="image"
      removeWrapper
      className="max-h-[70vh] w-full rounded-none object-cover"
      src={data.posters}
      alt=""
    />,
  ]
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2">
      <div className="flex-row flex flex-nowrap gap-2 items-center">
        <div>{data.name}</div>
        <div className="h-4 w-[2px] bg-black" />
        <div>{data.description}</div>
      </div>
      <ServiceDetail
        elements={carouselElements}
        data={{
          name: data.name,
          details: {
            theme: data.description,
            location: data.location,
            date: dayjs(data.event_date).format('YYYY MMM DD'),
            'total guest': data.number_of_guests,
          },
        }}
      />
      <div className="max-w-[2040px] w-full flex p-4">
        {/* <Carousel
          elements={data.wine_list.map((product: any, index: number) => (
            <WineCard
              key={index}
              data={{...product}}
              theme={getProductTheme(product.categories ? product.categories[0].name : '')}
            />
          ))}
          slidesPerView={7}
        /> */}
      </div>
      <Galleries
        images={
          data.gallery.split(',\n').map((e) => ({
            src: e,
            original: e,
            // ...getRandomElement(uniqueDimensions),
          })) as CustomImage[]
        }
      />
    </div>
  )
}
