import {Workshop, WorkShopProfile} from '@/lib/data/models/workshop'
import {workshopService} from '@/lib/data/workshop.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'
import BookNowButton from '@/modules/button/components/booknow'
import WorkshopProfileButton from '@/modules/button/components/workshop-profile'
import WineCard from '@/modules/card/template/wine'
import WorkShopCard from '@/modules/card/template/workshop'
import Carousel from '@/modules/carousel/template'
import Galleries from '@/modules/services/templates/gallery'
import ServiceDetail from '@/modules/services/templates/service-detial'
import {Image} from '@nextui-org/react'
import dayjs from 'dayjs'

export default async function Page({params}: {params: any}) {
  const {data: workshop} = await workshopService.getOne(
    {populate: {wineList: '*'}},
    Number(params.id)
  )
  const {data: workshops} = await workshopService.get({
    filters: {id: {$ne: Number(params.id)}},
    sort: {eventDate: 'desc'},
    pagination: {pageSize: 10, withCount: false},
  })
  const {data: profiles} = await workshopService.getProfile({
    'filters[workshop][id]': params.id,
  })

  const carouselElements = !!workshop.videos
    ? [
        ...workshop.videos
          .split(',')
          .map((e, i) => (
            <iframe
              key={i}
              className="w-full h-[450px]"
              src={e}
              title={workshop.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )),
        !!workshop.posters && (
          <Image
            key="poster"
            removeWrapper
            className="max-h-[450px] w-full rounded-none object-contain bg-primary"
            src={workshop.posters}
            alt=""
          />
        ),
      ]
    : [
        !!workshop.posters ? (
          <Image
            key="poster"
            removeWrapper
            className="max-h-[450px] w-full rounded-none object-contain bg-primary"
            src={workshop.posters}
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
        <div>{workshop.name}</div>
        <div className="h-4 w-[2px] bg-black" />
        <div>{workshop.description}</div>
      </div>
      <ServiceDetail
        elements={carouselElements as JSX.Element[]}
        data={{
          id: workshop.id,
          name: workshop.name,
          details: {
            theme: workshop.description,
            location: workshop.location,
            date: dayjs(workshop.eventDate).format('YYYY MMM DD'),
            'total guest': workshop.numberOfGuests,
          },
        }}
      />
      <div className="w-full flex p-4 relative">
        <Carousel
          elements={workshop.wineList.map((product: any, index: number) => (
            <WineCard
              key={index}
              data={{...product}}
              theme={getProductTheme(
                !!product.categories ? product.categories : product.category || ''
              )}
            />
          ))}
        />
      </div>
      <div className="w-full flex flex-col relative">
        <Galleries images={`${workshop.gallery}`.split(',\n')} />
        <BookNowButton title="book now! Click!" className="mx-auto mt-[-2rem] relative z-50" />
      </div>
      <div className="flex flex-col w-full px-10">
        <div className="uppercase text-4xl my-4">our workshop</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {workshops.map((workshop, index) => (
            <WorkShopCard key={index} data={workshop} />
          ))}
        </div>
      </div>
      <div className="w-full flex p-4 relative">
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {profiles.map((guest: WorkShopProfile, index: number) => (
            <div key={index} className="w-full flex flex-col gap-2 bg-[#EFEFEF] p-4 rounded-xl">
              <div className="text-xl">
                {guest.guest_name} {!!guest.guest_nickname ? `(${guest.guest_nickname})` : ''}
              </div>
              <div className="mx-auto">
                <WorkshopProfileButton id={workshop.id} email={guest.guest_email} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
