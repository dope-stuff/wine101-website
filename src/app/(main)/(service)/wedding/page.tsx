import {Image} from '@nextui-org/react'
import Carousel from '@/modules/carousel/template'
import ClientCard from '@/modules/card/template/client'
import {dbHelvethaica} from '@/styles/fonts'
import {weddingService} from '@/lib/data/wedding.service'
import {IMenu} from '@/lib/data/models/navbar'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'
import {eventService} from '@/lib/data/event.service'
import Package from '@/modules/services/components/package'
import WeddingNavigator from '@/modules/services/components/wedding-navigator'
import {packageService} from '@/lib/data/package.service'
import FlasksIcon from '@/modules/common/images/flasks'

export default async function Page() {
  const [{data: pageData}, {data: events}, {data: packages}] = await Promise.all([
    weddingService.getPageData({populate: '*'}),
    eventService.get({
      sort: {eventDate: 'desc'},
      filters: {type: 'WEDDING'},
    }),
    packageService.getPageData({filters: {eventType: 'WEDDING'}}),
  ])

  return (
    <div>
      <div className="max-w-[2040px] w-full sm:flex-row sm:flex grid grid-cols-2 sm:flex-nowrap gap-4 justify-evenly items-center text-center mx-auto p-4">
        <WeddingNavigator />
      </div>
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
      <div className="max-w-[2040px] w-full justify-center flex-col flex items-center mx-auto gap-4">
        <div className="max-w-[2040px] h-full w-full md:flex-row md:flex-nowrap flex-wrap items-center flex justify-center mt-8 px-4 gap-4 flex-col-reverse">
          <div className="flex-1 flex-col flex items-center text-2xl text-center gap-2">
            <div className="text-xl md:text-2xl font-semibold uppercase md:flex hidden">
              {pageData.header.heading}
            </div>
            <div className={`text-xl md:text-2xl md:flex hidden ${dbHelvethaica.className}`}>
              {pageData.header.subheading}
            </div>
            <div
              id="guide"
              className="flex-row flex items-center flex-nowrap gap-4 text-3xl md:text-4xl text-center"
            >
              <FlasksIcon className="max-w-[75px] max-h-[75px] w-full h-full mb-[-2rem]" />
              {pageData.detailsTitle}
              <FlasksIcon className="max-w-[75px] max-h-[75px] w-full h-full mt-[-2rem]" />
            </div>
            <div className="max-w-[90%] w-full flex-col flex">
              {pageData.details.map((e, i) => (
                <ServiceContentCard key={i} index={i} data={e} />
              ))}
            </div>
          </div>
          <div className="rotate-6 md:mr-8 md:sticky md:mt-[-300px] md:top-[calc(50%-250px)]">
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
          <div className={`text-xl md:text-2xl text-center md:hidden ${dbHelvethaica.className}`}>
            {pageData.header.subheading}
          </div>
          <div className="text-xl md:text-2xl text-center font-semibold uppercase md:hidden">
            {pageData.header.alt}
          </div>
        </div>
        <div id="package" />
        <ContactFlasksButton
          title={pageData.packagesTitle.buttonTitle}
          linkTo={pageData.packagesTitle.linkTo}
          bgColor="#E8C85E"
        />
        <div className="w-full flex-row flex md:flex-nowrap flex-wrap gap-4 text-center my-8">
          {pageData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-1 min-w-[300px] flex-col flex items-center gap-8 relative"
            >
              <Image
                removeWrapper
                className="max-w-[400px] max-h-[300px] w-full h-full"
                src={pkg.mediaUrl}
                alt={pkg.alt}
              />
              <div className="font-bold text-2xl">{pkg.heading}</div>
              <div className={`${dbHelvethaica.className} text-xl max-w-[600px]`}>
                {pkg.subheading}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="wedding-consult" />
      <Package packages={packages} consult={pageData.consult} />
      <div id="reviews" className="max-w-[2040px] flex flex-col w-full mx-auto px-10">
        <div className="uppercase text-4xl my-2 mt-8">our clients</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {events.map((c, i) => (
            <ClientCard data={c} key={i} withDetail />
          ))}
        </div>
      </div>
      <div className="mb-10" />
    </div>
  )
}
