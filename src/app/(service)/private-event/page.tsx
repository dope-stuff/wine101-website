import {Image} from '@nextui-org/react'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {eventService} from '@/lib/data/event.service'
import {IMenu} from '@/lib/data/models/navbar'
import {iannDog} from '@/styles/fonts'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'

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
        <div className="max-w-[2040px] w-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-8">
          <div className="max-w-[90%] md:max-w-[60%] lg:h-full flex-col flex items-center text-3xl text-center pl-4 gap-8">
            <div className="text-2xl md:text-3xl font-semibold uppercase max-w-[600px]">
              {pageData.header.heading}
            </div>
            <div className={`text-xl md:text-2xl max-w-[700px] ${iannDog.className}`}>
              {pageData.header.subheading}
            </div>
            <div className="my-auto">
              <ContactFlasksButton
                title={pageData.header.buttonTitle}
                linkTo={pageData.header.linkTo}
              />
            </div>
          </div>
          {pageData.header && (
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
        <div className="max-w-[2040px] w-[90%] flex-col flex">
          {pageData.details.map((e: IMenu, i: number) => (
            <ServiceContentCard key={i} index={i} data={e} />
          ))}
        </div>
        <div className="max-w-[2040px] flex flex-col w-full px-10">
          <div className="uppercase text-4xl text-center my-4">our clients</div>
          <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
            {events.map((c, i) => (
              <ClientCard data={c} key={i} />
            ))}
          </div>
        </div>
        <div className="mb-10" />
      </div>
    </>
  )
}
