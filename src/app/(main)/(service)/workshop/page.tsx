import {Image} from '@nextui-org/react'
import {workshopService} from '@/lib/data/workshop.service'

import WineProfileWorkshopHeader from '@/modules/header/components/workshop'
import ServiceContentCard from '@/modules/card/template/service-content'
import FlasksIcon from '@/modules/common/images/flasks'
import {IMenu} from '@/lib/data/models/navbar'
import Carousel from '@/modules/carousel/template'
import WorkShopCard from '@/modules/card/template/workshop'
import {splitArray} from '@/lib/utils/splitArray'
import Comments from '@/modules/services/components/comments'
import BookNowButton from '@/modules/button/components/booknow'
import {dbHelvethaica} from '@/styles/fonts'

export default async function WineProfileWorkshop() {
  const {data: workshops} = await workshopService.get({
    sort: {eventDate: 'desc'},
    pagination: {pageSize: 10, withCount: false},
  })
  const {data: pageData} = await workshopService.getPageData({populate: '*'})

  return (
    <div className="w-full justify-center flex-col flex items-center mx-auto gap-4">
      <Carousel
        elements={[...pageData.banner, ...pageData.banner].map((b: IMenu, index) => (
          <Image
            key={index}
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
      {/* <WineProfileWorkshopHeader data={pageData.header} /> */}
      <div className="max-w-[2040px] h-full w-full flex-col md:flex-row md:flex-nowrap flex-wrap items-center flex justify-center mt-8 px-4 gap-8">
        <div className="flex-1 flex-col flex items-center text-2xl text-center gap-4">
          <div className={`text-2xl md:text-3xl ${dbHelvethaica.className}`}>
            {pageData.header.heading}
          </div>
          {/* <div className="text-xl md:text-2xl font-semibold uppercase">{pageData.header.alt}</div> */}
          <div className={`text-xl md:text-2xl ${dbHelvethaica.className}`}>
            {pageData.header.subheading}
          </div>
          <div className="text-lg text-center mt-4 px-4">
            <p className={`${dbHelvethaica.className} mx-auto`}>{pageData.header.description}</p>
          </div>

          <div className="max-w-[2040px] w-[90%] flex-col flex mt-4">
            <div className="flex-row flex items-center flex-nowrap gap-4 text-4xl md:text-6xl text-center my-4 mx-auto">
              <FlasksIcon className="mt-[-1rem]" />
              {pageData.detailsTitle}
              <FlasksIcon className="mt-[-1rem]" />
              <BookNowButton
                title={pageData.header.buttonTitle}
                linkTo={pageData.header.linkTo}
                className={dbHelvethaica.className}
              />
            </div>
            {pageData.details.map((e, i) => (
              <ServiceContentCard key={i} index={i} data={e as IMenu} />
            ))}
          </div>
        </div>
        <div className="rotate-6 md:mr-8 md:sticky md:mt-[-500px] md:top-[calc(50%-250px)]">
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
        <div className="uppercase text-4xl my-2 mt-8">our workshop</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {workshops.map((workshop, index) => (
            <WorkShopCard key={index} data={workshop} />
          ))}
        </div>
      </div>
      <div className="max-w-[2040px] w-[90%]">
        <div className="uppercase text-4xl my-4 text-center">how people talk about us</div>
        <Carousel
          elements={splitArray(pageData.testimonials.map((e) => e.heading)).map((e, i) => (
            <Comments key={i} comments={e} />
          ))}
          slidesPerView={1}
          gap={0}
        />
      </div>
      <div className="mb-10" />
    </div>
  )
}
