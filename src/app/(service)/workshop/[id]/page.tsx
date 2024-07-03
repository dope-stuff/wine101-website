import {Workshop} from '@/lib/data/models/workshop'
import {workshopService} from '@/lib/data/workshop.service'
import BookNowButton from '@/modules/button/components/booknow'
import WorkShopCard from '@/modules/card/template/workshop'
import Galleries, {CustomImage} from '@/modules/services/templates/gallery'
import ServiceDetail from '@/modules/services/templates/service-detial'
import {Image} from '@nextui-org/react'
import dayjs from 'dayjs'

async function GetPageData(id: number) {
  const {data: pageData} = await workshopService.getOne({populate: '*'}, Number(id))

  return pageData
}

// export const uniqueDimensions = [
//   {width: 320, height: 174},
//   {width: 320, height: 212},
//   {width: 320, height: 213},
//   {width: 320, height: 183},
//   {width: 240, height: 320},
//   {width: 320, height: 190},
//   {width: 320, height: 148},
//   {width: 248, height: 320},
//   {width: 320, height: 113},
//   {width: 313, height: 320},
//   {width: 320, height: 194},
//   {width: 271, height: 320},
//   {width: 320, height: 179},
//   {width: 320, height: 215},
//   {width: 257, height: 320},
//   {width: 226, height: 320},
// ]

export default async function Page({params}: {params: any}) {
  const data: Workshop = await GetPageData(Number(params.id))
  const {data: workshops} = await workshopService.get({
    pagination: {pageSize: 10, withCount: false},
  })

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
        !!data.posters && (
          <Image
            key="poster"
            removeWrapper
            className="max-h-[450px] w-full rounded-none object-contain bg-primary"
            src={data.posters}
            alt=""
          />
        ),
      ]
    : [
        !!data.posters ? (
          <Image
            key="poster"
            removeWrapper
            className="max-h-[450px] w-full rounded-none object-contain bg-primary"
            src={data.posters}
            alt=""
          />
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

  return (
    <div className="min-w-[240px] flex-col flex gap-4 p-2">
      <div className="flex-row flex flex-nowrap gap-2 items-center">
        <div>{data.name}</div>
        <div className="h-4 w-[2px] bg-black" />
        <div>{data.description}</div>
      </div>
      <ServiceDetail
        elements={carouselElements as JSX.Element[]}
        data={{
          name: data.name,
          details: {
            theme: data.description,
            location: data.location,
            date: dayjs(data.eventDate).format('YYYY MMM DD'),
            'total guest': data.numberOfGuests,
          },
        }}
      />
      {/* <div className="max-w-[2040px] w-full flex p-4">
        <Carousel
          elements={data.wine_list.map((product: any, index: number) => (
            <WineCard
              key={index}
              data={{...product}}
              theme={getProductTheme(product.categories ? product.categories[0].name : '')}
            />
          ))}
          slidesPerView={7}
        />
      </div> */}
      <div className="w-full flex-col flex relative">
        <Galleries
          images={
            data.gallery.split(',\n').map((e) => ({
              src: e,
              original: e,
              // ...getRandomElement(uniqueDimensions),
            })) as CustomImage[]
          }
        />
        <BookNowButton title="book now! Click!" className="mx-auto mt-[-2rem] relative z-50" />
      </div>
      <div className="max-w-[2040px] flex flex-col w-full px-10">
        <div className="uppercase text-4xl my-2 mt-8">our workshop</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {workshops.map((workshop, index) => (
            <WorkShopCard key={index} data={workshop} />
          ))}
        </div>
      </div>
    </div>
  )
}
