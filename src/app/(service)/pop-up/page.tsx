import {Image} from '@nextui-org/react'
import FlasksIcon from '@/modules/common/images/flasks'
import {iannDog} from '@/styles/fonts'
import {popUpBoothService} from '@/lib/data/booth.service'
import {IMenu} from '@/lib/data/models/navbar'
import ServiceContentCard from '@/modules/card/template/service-content'
import PopUpBoothButton from '@/modules/button/components/pop-up-booth'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'
import {eventService} from '@/lib/data/event.service'

export default async function Page() {
  const [{data: pageData}, {data: events}] = await Promise.all([
    popUpBoothService.getPageData({populate: '*'}),
    eventService.get({filters: {type: 'POP-UP'}}),
  ])

  return (
    <>
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
      <div className="max-w-[2040px] w-full justify-center flex-col flex items-center mx-auto">
        <div className="max-w-[90%] md:max-w-[60%] w-full flex-col flex text-center items-center justify-center mt-8 relative gap-4">
          <FlasksIcon width={100} height={100} className="hidden md:flex absolute left-0 top-20" />
          <div className="text-2xl md:text-3xl font-semibold uppercase">
            {pageData.header.heading}
          </div>
          <div
            className={`max-w-xl lg:max-w-2xl xl:max-w-none text-2xl md:text-3xl ${iannDog.className}`}
          >
            {pageData.header.subheading}
          </div>
        </div>
        <div className="w-[90%] flex-col flex mt-8">
          {pageData.details.map((e, i) => (
            <ServiceContentCard key={i} index={i} data={e} />
          ))}
        </div>
        <div className="flex-row flex items-center justify-center gap-10">
          <div className={`text-4xl max-w-lg text-center ${iannDog.className}`}>
            {pageData.cta.heading}
          </div>
          <PopUpBoothButton title={pageData.cta.buttonTitle} linkTo={pageData.cta.linkTo} />
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
