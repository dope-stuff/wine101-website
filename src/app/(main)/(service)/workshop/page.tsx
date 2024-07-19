import {Image} from '@nextui-org/react'
import {workshopService} from '@/lib/data/workshop.service'

import WineProfileWorkshopHeader from '@/modules/header/components/workshop'
import ServiceContentCard from '@/modules/card/template/service-content'
import FlasksIcon from '@/modules/common/images/flasks'
import {IMenu} from '@/lib/data/models/navbar'
import Carousel from '@/modules/carousel/template'
import WorkShopCard from '@/modules/card/template/workshop'
import { splitArray } from '@/lib/utils/splitArray'
import Comments from '@/modules/services/components/comments'

export default async function WineProfileWorkshop() {
  const {data: workshops} = await workshopService.get({
    sort: { eventDate: 'desc' },
    pagination: {pageSize: 10, withCount: false},
  })
  const {data: pageData} = await workshopService.getPageData({populate: '*'})

  return (
    <div className="w-full justify-center flex-col flex items-center mx-auto gap-4">
      <Carousel
        elements={[...pageData.banner,...pageData.banner].map((b: IMenu,index) => (
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
      <WineProfileWorkshopHeader data={pageData.header} />
      <div className="max-w-[2040px] w-[90%] flex-col flex mt-4">
        <div className="flex-row flex items-center flex-nowrap gap-8 text-4xl md:text-6xl text-center my-4 mx-auto">
          <FlasksIcon className="mt-[-1rem]" />
          {pageData.detailsTitle}
          <FlasksIcon className="mt-[-1rem]" />
        </div>
        {pageData.details.map((e, i) => (
          <ServiceContentCard key={i} index={i} data={e as IMenu} />
        ))}
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
