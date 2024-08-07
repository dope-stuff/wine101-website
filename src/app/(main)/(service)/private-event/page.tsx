import {Image} from '@nextui-org/react'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {eventService} from '@/lib/data/event.service'
import {IMenu} from '@/lib/data/models/navbar'
import {dbHelvethaica} from '@/styles/fonts'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'
import FlasksIcon from '@/modules/common/images/flasks'
import EventContactButton from '@/modules/button/components/event-button'

export default async function Page() {
  const [{data: pageData}, {data: events}] = await Promise.all([
    eventService.getPageData({populate: '*'}),
    eventService.get({
      sort: {eventDate: 'desc'},
      filters: {type: 'PRIVATE'},
    }),
  ])

  return (
    <>
      <div className="w-full justify-center flex-col flex items-center mx-auto gap-4">
        <Carousel
          elements={pageData.banner.map((b: IMenu) => (
            <Image
              key={b.id}
              removeWrapper
              className="max-h-[70vh] w-full rounded-none object-cover"
              src={b.mediaUrl}
              alt={b.alt}
            />
          ))}
          slidesPerView={1}
          arrowColor="white"
          gap={0}
        />
        <div className="max-w-[2040px] h-full w-full flex-col md:flex-row md:flex-nowrap flex-wrap items-center flex justify-center mt-8 px-4 gap-8">
          <div className="flex-1 flex-col flex items-center text-2xl text-center gap-2">
            <div className="text-xl md:text-2xl font-semibold uppercase">{pageData.header.alt}</div>
            <div className={`text-xl md:text-2xl ${dbHelvethaica.className}`}>
              {pageData.header.subheading}
            </div>
            <EventContactButton
              title={pageData.header.buttonTitle}
              linkTo={pageData.header.linkTo}
            />
            <div className="max-w-[2040px] w-[90%] flex-col flex mt-4">
              {pageData.details.map((e, i) => (
                <ServiceContentCard key={i} index={i} data={e as IMenu} />
              ))}
            </div>
          </div>
          <div className="rotate-6 md:mr-8 md:sticky md:mt-[-400px] md:top-[calc(50%-250px)]">
            <Image
              removeWrapper
              width={250}
              className="h-full "
              src="https://i.ibb.co/tb6wBXh/wine-101-phone-outline-vertical.webp"
              alt=""
            />
            {!!pageData.header.mediaUrl && (
              <iframe
                className="!absolute top-[5px] left-[8px] w-[233px] h-[98%] rounded-[2rem] z-10"
                src={pageData.header.mediaUrl}
                title={pageData.header.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        {events.length > 0 && (
          <div className="max-w-[2040px] flex flex-col w-full px-10">
            <div className="uppercase text-4xl text-center my-4">our clients</div>
            <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
              {events.map((c, i) => (
                <ClientCard data={c} key={i} />
              ))}
            </div>
          </div>
        )}
        <div className="mb-10" />
      </div>
    </>
  )
}
