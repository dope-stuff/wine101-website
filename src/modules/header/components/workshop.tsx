'use client'
import {Image, Link} from '@nextui-org/react'
import {iannDog} from '@/styles/fonts'
import {IMenu} from '@/lib/data/models/navbar'

export default function WineProfileWorkshopHeader({data}: {data: IMenu}) {
  const onBookNow = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="max-w-[2040px] w-full flex-col lg:flex-row lg:flex-nowrap flex-wrap items-center flex justify-center mt-8 px-4 gap-8">
      <div className="flex-1 flex-col flex items-center text-3xl text-center gap-4">
        <div className={`text-2xl md:text-3xl ${iannDog.className}`}>{data.heading}</div>
        <div className="text-2xl md:text-3xl font-semibold uppercase">{data.alt}</div>
        <div className={`text-2xl md:text-3xl ${iannDog.className}`}>{data.subheading}</div>
        <div className="text-xl text-center mt-4 px-4">
          <p className={`${iannDog.className} mx-auto`}>{data.description}</p>
        </div>
        <button
          className={`bg-[#81CF8A] rounded-full px-8 py-2 text-2xl text-black mt-6 border-black border-2 ${iannDog.className}`}
          onClick={() => onBookNow(data.linkTo)}
        >
          {data.buttonTitle}
        </button>
      </div>
      <div className="rotate-6 flex relative mr-8">
        <Image
          removeWrapper
          width={250}
          className="h-full "
          src="https://i.ibb.co/tb6wBXh/wine-101-phone-outline-vertical.webp"
          alt=""
        />
        {!!data.mediaUrl && (
          <iframe
            className="!absolute top-[5px] left-[8px] w-[233px] h-[98%] rounded-[2rem] z-10"
            src={data.mediaUrl}
            title={data.alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
}
