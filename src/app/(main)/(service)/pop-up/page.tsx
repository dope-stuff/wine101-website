import {Image} from '@nextui-org/react'
import FlasksIcon from '@/modules/common/images/flasks'
import {dbHelvethaica} from '@/styles/fonts'
import {popUpBoothService} from '@/lib/data/booth.service'
import {IMenu} from '@/lib/data/models/navbar'
import ServiceContentCard from '@/modules/card/template/service-content'
import PopUpBoothButton from '@/modules/button/components/pop-up-booth'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'
import {eventService} from '@/lib/data/event.service'
import SmartPhoneImage from '@/modules/common/images/smart-phone'

export default async function Page() {
  const [{data: pageData}, {data: events}] = await Promise.all([
    popUpBoothService.getPageData({populate: '*'}),
    eventService.get({
      sort: {eventDate: 'desc'},
      filters: {type: 'POP-UP'},
    }),
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
        <div className="relative flex-row flex w-full justify-center"></div>
        <div className="max-w-[2040px] h-full w-full flex-col md:flex-row md:flex-nowrap flex-wrap items-center flex justify-center mt-8 px-4 gap-8">
          <div className="flex-1 flex-col flex items-center text-2xl text-center gap-4">
            <div className="w-full h-full flex-col flex items-center text-3xl text-center gap-4 relative">
              <FlasksIcon
                width={100}
                height={100}
                className="hidden md:flex absolute right-4 lg:right-8 top-20"
              />
              <div className="max-w-[90%] md:max-w-[60%] w-full flex-col flex text-center items-center justify-center mt-8 relative gap-4">
                <div className="text-2xl md:text-3xl font-semibold uppercase">
                  {pageData.header.heading}
                </div>
                <div
                  className={`max-w-xl lg:max-w-2xl xl:max-w-none text-2xl md:text-3xl ${dbHelvethaica.className}`}
                >
                  {pageData.header.subheading}
                </div>
              </div>
            </div>
            <div className="max-w-[2040px] w-[90%] flex-col flex mt-4">
              {pageData.details.map((e, i) => (
                <ServiceContentCard key={i} index={i} data={e as IMenu} />
              ))}
            </div>
            <div className="flex-row flex items-center justify-center gap-104">
              <div className={`text-4xl max-w-lg text-center ${dbHelvethaica.className}`}>
                {pageData.cta.heading}
              </div>
              <PopUpBoothButton title={pageData.cta.buttonTitle} linkTo={pageData.cta.linkTo} />
            </div>
          </div>
          <div className="rotate-6 md:mr-8 md:sticky md:mt-[-200px] md:top-[calc(50%-250px)]">
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

        <div className="max-w-[2040px] flex flex-col w-full px-10">
          <div className="uppercase text-4xl my-4 text-center">our clients</div>
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
