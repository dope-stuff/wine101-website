import {Image} from '@nextui-org/react'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {iannDog} from '@/styles/fonts'
import {collaborationService} from '@/lib/data/collaboration.service'
import {IMenu} from '@/lib/data/models/navbar'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'
import {eventService} from '@/lib/data/event.service'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'
import ServiceContentCard from '@/modules/card/template/service-content'

export default async function Collaboration() {
  const [{data: pageData}, {data: events}] = await Promise.all([
    collaborationService.getPageData({populate: '*'}),
    eventService.get({filters: {type: 'COLLABORATION'}}),
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
          <div className="max-w-[90%] md:max-w-[60%] lg:h-full flex-col flex items-center text-3xl text-center gap-8">
            <div className="text-2xl md:text-3xl font-semibold uppercase">
              {pageData.header.heading}
            </div>
            <div className={`text-xl md:text-2xl w-[80%] ${iannDog.className}`}>
              {pageData.header.subheading}
            </div>
            <div className="my-auto">
              <ContactFlasksButton
                title={pageData.header.buttonTitle}
                linkTo={pageData.header.linkTo}
              />
            </div>
          </div>
          <SmartPhoneImage className="max-w-[250px] flex-1 h-full" />
        </div>
        <div className="max-w-[2040px] w-[90%] gap-4 flex-col flex">
          {pageData.details.map((e: IMenu, i: number) => (
            <ServiceContentCard key={i} index={i} data={e} />
          ))}
        </div>
        <div className="max-w-[2040px] flex flex-col w-full px-10">
          <div className="uppercase text-4xl my-4">our clients</div>
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
