import { Image, Link } from "@nextui-org/react";
import Carousel from "../../../../components/carousel";
import SmartPhoneImage from "../../../../components/common/images/smart-phone";
import Way1O1Icon from "../../../../components/common/images/way-1o1";

export default function WineProfileWorkshop() {
  const data = [
    <Image
      key="1"
      removeWrapper
      className="max-h-[40vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
    <Image
      key="2"
      removeWrapper
      className="max-h-[40vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
  ];
  return (
    <div className="w-full max-w-screen-2xl justify-center flex-col flex items-center mx-auto">
      <Carousel elements={data} slidesPerView={1} arrowColor="white" gap="0" />
      <div className="w-full flex-col lg:flex-row items-center flex justify-center mt-8 gap-12">
        <div className="max-w-[70%] flex-col flex items-center text-[30px] text-center pl-4">
          <div className="text-[78px] font-doggy">ที่แรกและที่เดียว กับ</div>
          <div className="text-[65px] font-semibold uppercase">
            ‘wine profile workshop’
          </div>
          <div className="text-[48px] font-doggy">
            เปิดประตูสู่โลกของไวน์ ตามหาไวน์ที่ตัวเองชอบ
          </div>
          <div className="text-[24px] text-center mt-4 px-4">
            <p className="font-doggy mx-auto">
              เมื่อโลกของไวน์ทั้งซับซ้อนและน่าสับสน พันธุ์องุ่น ชื่อไวน์
              เขตที่ผลิต ไหนจะศัพท์เฉพาะทางที่ทั้งยาก ทั้งอ่านไม่ออก
              ยิ่งฟังยิ่งไม่เข้าใจ จึงเกิดเป็น Wine Workshop ของ wine101
              ที่เราจะพาทุกคนไป Explore และ เรียนรู้ Basic ของไวน์
              ในบรรยากาศที่สนุกและเป็นกันเองแบบสุดๆ
            </p>
            <p className="font-doggy">
              “เพราะเราเชื่อว่า คำว่าอร่อยแต่ละคนไม่เหมือนกัน
              และไวน์ที่ดีที่สุดคือไวน์ที่อร่อยสำหรับตัวเราเอง
            </p>
          </div>
          <Link className="bg-primary rounded-full px-8 py-1 text-[30px] text-white mt-6 font-doggy border-black border-2">
            จองที่นั่ง
          </Link>
        </div>
        <SmartPhoneImage className="lg:max-w-[22.5%] max-w-[500px] h-full rotate-6 lg:pr-10" />
      </div>
      <div>
        <Way1O1Icon />
      </div>
    </div>
  );
}
