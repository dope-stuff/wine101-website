import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {Link} from '@nextui-org/react'

export default function WineProfileWorkshopHeader() {
  return (
    <div className="w-full flex-col lg:flex-row items-center flex justify-center mt-8 gap-12">
      <div className="max-w-[70%] flex-col flex items-center text-[30px] text-center pl-4">
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
      <SmartPhoneImage className="lg:max-w-[22.5%] max-w-[500px] h-full rotate-6 lg:pr-10" />
    </div>
  )
}
