'use client'
import {Image, Link} from '@nextui-org/react'
import {iannDog} from '@/styles/fonts'
import {useEffect, useState} from 'react'

export default function WineProfileWorkshopHeader({thumbnail}: {thumbnail?: string}) {
  const [bookNowLinkTo, setBookNowLinkTo] = useState('')

  const onBookNow = () => {
    window.open(bookNowLinkTo, '_blank')
  }

  useEffect(() => {
    const linkto = localStorage.getItem('bookNowLinkTo')
    if (linkto) {
      setBookNowLinkTo(linkto)
    }
  }, [])
  return (
    <div className="w-full flex-col lg:flex-row lg:flex-nowrap flex-wrap items-center flex justify-center mt-8 gap-8">
      <div className="flex-1 flex-col flex items-center text-3xl text-center pl-4 gap-4">
        <div className={`text-2xl md:text-3xl ${iannDog.className}`}>ที่แรกและที่เดียว กับ</div>
        <div className="text-2xl md:text-3xl font-semibold uppercase">‘wine profile workshop’</div>
        <div className={`text-2xl md:text-3xl ${iannDog.className}`}>
          เปิดประตูสู่โลกของไวน์ ตามหาไวน์ที่ตัวเองชอบ
        </div>
        <div className="text-xl text-center mt-4 px-4">
          <p className={`${iannDog.className} mx-auto`}>
            เมื่อโลกของไวน์ทั้งซับซ้อนและน่าสับสน พันธุ์องุ่น ชื่อไวน์ เขตที่ผลิต
            ไหนจะศัพท์เฉพาะทางที่ทั้งยาก ทั้งอ่านไม่ออก ยิ่งฟังยิ่งไม่เข้าใจ จึงเกิดเป็น Wine
            Workshop ของ wine101 ที่เราจะพาทุกคนไป Explore และ เรียนรู้ Basic ของไวน์
            ในบรรยากาศที่สนุกและเป็นกันเองแบบสุดๆ
          </p>
          <p className={iannDog.className}>
            “เพราะเราเชื่อว่า คำว่าอร่อยแต่ละคนไม่เหมือนกัน
            และไวน์ที่ดีที่สุดคือไวน์ที่อร่อยสำหรับตัวเราเอง
          </p>
        </div>
        <button
          className={`bg-[#81CF8A] rounded-full px-8 py-2 text-2xl text-black mt-6 border-black border-2 ${iannDog.className}`}
          onClick={() => onBookNow()}
        >
          จองที่นั่ง
        </button>
      </div>
      <div className="lg:min-w-[25%] min-w-[25%] rotate-6 flex relative xl:pr-10">
        <Image
          removeWrapper
          width={250}
          className="h-full "
          src="https://i.ibb.co/tb6wBXh/wine-101-phone-outline-vertical.webp"
          alt=""
        />
        {!!thumbnail && (
          <iframe
            className="!absolute top-[5px] left-[8px] w-[233px] h-[98%] rounded-[2rem] z-10"
            src="https://www.youtube.com/embed/kIoGU-JO9tM"
            title="Wine1O1 - 2024 Winelentines Workshop @ Picolo Vicolo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
}
