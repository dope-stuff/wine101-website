import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {Image, Link} from '@nextui-org/react'

export default function WineProfileWorkshopHeader({thumbnail}: {thumbnail?: string}) {
  return (
    <div className="w-full flex-col lg:flex-row lg:flex-nowrap flex-wrap items-center flex justify-center mt-8 gap-12">
      <div className="flex-1 flex-col flex items-center text-[30px] text-center pl-4">
        <div className="text-[78px] font-doggy">ที่แรกและที่เดียว กับ</div>
        <div className="text-[65px] font-semibold uppercase">‘wine profile workshop’</div>
        <div className="text-[48px] font-doggy">เปิดประตูสู่โลกของไวน์ ตามหาไวน์ที่ตัวเองชอบ</div>
        <div className="text-[24px] text-center mt-4 px-4">
          <p className="font-doggy mx-auto">
            เมื่อโลกของไวน์ทั้งซับซ้อนและน่าสับสน พันธุ์องุ่น ชื่อไวน์ เขตที่ผลิต
            ไหนจะศัพท์เฉพาะทางที่ทั้งยาก ทั้งอ่านไม่ออก ยิ่งฟังยิ่งไม่เข้าใจ จึงเกิดเป็น Wine
            Workshop ของ wine101 ที่เราจะพาทุกคนไป Explore และ เรียนรู้ Basic ของไวน์
            ในบรรยากาศที่สนุกและเป็นกันเองแบบสุดๆ
          </p>
          <p className="font-doggy">
            “เพราะเราเชื่อว่า คำว่าอร่อยแต่ละคนไม่เหมือนกัน
            และไวน์ที่ดีที่สุดคือไวน์ที่อร่อยสำหรับตัวเราเอง
          </p>
        </div>
        <Link className="bg-[#81CF8A] rounded-full px-8 py-1 text-[30px] text-black mt-6 font-doggy border-black border-2">
          จองที่นั่ง
        </Link>
      </div>
      <div className="lg:min-w-[22.5%] min-w-[22.5%] min-h-[650px] h-[650px] flex relative xl:pr-10">
        {/* <SmartPhoneImage className="w-full h-full object-cover" /> */}
        <Image removeWrapper className='w-[400px] h-full' src='https://i.ibb.co/RcZKwKB/wine-101-phone-outline.webp' alt='' />
        {thumbnail && (
          <iframe
            className="!absolute origin-top-left rotate-[5.8deg] top-[29px] left-[72px] w-[314px] h-[90%] rounded-bl-[2.6rem] rounded-br-[3rem] rounded-t-[1rem] z-10"
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
