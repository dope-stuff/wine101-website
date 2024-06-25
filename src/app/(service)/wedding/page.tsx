import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import ExploreTastebudsIcon from '@/modules/common/images/service/explore-tastebuds'
import VarietyOfServiceIcon from '@/modules/common/images/service/variety-of-service'
import FullSupportServiceIcon from '@/modules/common/images/service/full-support-service'
import ClientCard from '../../../modules/card/template/client'
import Service1O1ContactUsIcon from '@/modules/common/images/service/service-1o1-contact-us'
import BeginnerFriendlyIcon from '@/modules/common/images/service/beginner-friendly'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import Footer from '@/modules/layout/components/footer'
import HandpickQualityWinesIcon from '@/modules/common/images/service/handpick-quality-wines'
import FullSupportService2Icon from '@/modules/common/images/service/full-support-service-2'
import WorryFreeIcon from '@/modules/common/images/service/worry-free'
import FreeWeddingWineAdviceIcon from '@/modules/common/images/service/free-wedding-wine-advice'
import Way1O1Icon from '@/modules/common/images/service/way-1o1'
import PackageInfoIcon from '@/modules/common/images/package-info'
import WineBottlesIcon from '@/modules/common/images/wine-bottles'
import WineCornerIcon from '@/modules/common/images/wine-corner'

export default function WineWedding() {
  const banners = [
    <Image
      key="1"
      removeWrapper
      className="max-h-[50vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
    <Image
      key="2"
      removeWrapper
      className="max-h-[50vh] w-full rounded-none"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
  ]
  const data = [
    {
      name: 'Free Wedding Wine Advice',
      image: <FreeWeddingWineAdviceIcon />,
      maxWidth: '70%',
      description:
        'มากกว่า 70 ไวน์ลิสต์ที่มี เราช่วยคัดสรรไวน์คุณภาพจากทั่วทุกมุมโลกให้คุ้มค่ากับงบประมาณ',
    },
    {
      name: 'Handpick quality wines to match your special day ',
      image: <HandpickQualityWinesIcon />,
      maxWidth: 580,
      description:
        'ยกระดับอีเวนต์ให้พิเศษยิ่งขึ้น ด้วย Wine Activity ที่ match กับ theme อีเว้นต์ของงาน',
    },
    {
      name: 'Worry-Free',
      image: <WorryFreeIcon />,
      maxWidth: '80%',
      description:
        'Staff support ทีมงานพร้อมช่วยบริการหน้างานแบบครบวงจร Somerlier Service บริการผู้เชี่ยวชาญเรื่องไวน์ (ซอมเมอลิเยร์) ตามความต้องการ',
    },
    {
      name: 'Add on Special Wine Corner with Personalized service ',
      image: <VarietyOfServiceIcon />,
      maxWidth: 560,
      description: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
    },
    {
      name: 'Full Support & Service',
      image: <FullSupportService2Icon />,
      maxWidth: 560,
      description: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
    },
  ]

  const clients = [
    {
      title: 'CHANG&GAM',
      image: '',
      date: '27 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'yok',
      image: '',
      date: '28 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'nan',
      image: '',
      date: '29 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'gaame',
      image: '',
      date: '30 april',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'nine',
      image: '',
      date: '31 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'mhee',
      image: '',
      date: '32 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
    {
      title: 'hohoho',
      image: '',
      date: '33 april 2024',
      guest: 300,
      order: ['Red 40', 'White 15', 'Sparkling 20'],
      venue: 'xx hotel',
    },
  ]

  const panels = ['101 wedding guide', 'our package', 'quick consult', 'our client’s review']

  const guestNumbers = ['150', '200', '250', '300', '300++']
  return (
    <>
      <div className="w-full max-w-screen-2xl justify-center flex-col flex items-center mx-auto">
        <div className='flex-row flex flex-nowrap gap-4 text-[24px] p-4'>
          {panels.map((panel, i) => (
            <div key={i}>{panel}</div>
          ))}
        </div>
        <Carousel elements={banners} slidesPerView={1} arrowColor="white" gap="0" />
        <div className="w-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-12">
          <div className="max-w-[60%] flex-col flex items-center text-[30px] text-center pl-4">
            <div className="text-[44px] font-semibold uppercase">
              It’s not just about wine—it’s about creating cherished moments.
            </div>
            <div className="text-[36px] font-doggy w-full">
              สร้างความทรงจำให้วันพิเศษกับ wine101 thewedding
            </div>
            <Way1O1Icon className="my-4" />
          </div>
          <SmartPhoneImage className="max-w-[320px] flex-1 h-full" />
        </div>
        <div className="w-[90%] flex-col flex xl:mt-[-8rem] 2xl:mt-[-10rem]">
          {data.map((e, i) => (
            <div
              key={i}
              className={`w-[80%] flex-row flex items-center gap-4 ${
                i % 2 !== 0 ? 'justify-end ml-auto' : ''
              }`}
            >
              <div className="max-h-[280px]">{e.image}</div>
              <div className="flex-col flex">
                <div className="text-[44px] uppercase  xl:max-w-[650px]">{e.name}</div>
                <div className="font-doggy text-[27px]" style={{maxWidth: e.maxWidth}}>
                  {e.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <PackageInfoIcon />
        <div className="w-full flex-row flex gap-10 text-center my-8">
          <div className="flex-1 flex-col flex items-center">
            <WineBottlesIcon />
            <div className="font-bold text-[48px]">3 types of wine</div>
            <div className="font-doggy text-[24px] max-w-[600px]">
              พร้อมคำแนะนำเรื่อง จำนวนปริมาณของไวน์แต่ละชนิดที่เหมาะสมกับรูปแบบงาน ปริมาณแขก
              และวัยของแขกที่มา
            </div>
          </div>
          <div className="flex-1 flex-col flex items-center">
            <WineCornerIcon />
            <div className="font-bold text-[48px]">wine corner</div>
            <div className="font-doggy text-[24px] max-w-[600px]">
              รองรับแขกในงาน ถึง 4 ชั่วโมง ไม่รวมการติดตั้งบูธ แก้วไวน์ทีมบ่าว
              ทีมสาวสำหรับแขกมาให้สนุกกับงานแต่ง
              กิจกรรมแนะนำชิมไวน์สำหรับแขกในช่วงก่อนงานเริ่มและหลังงานจบ
              ตกแต่งตามธีมงานแต่งของแต่ละคู่
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex-row flex items-center flex-wrap md:flex-nowrap justify-evenly gap-10 text-center bg-[#81CF8A] p-8 pb-12 mb-10 md:mb-4 relative">
        <div className="flex-col flex text-center text-[54px]">
          <div>1o1 wedding</div>
          <div>consultant</div>
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <div className="text-[30px] mb-4 uppercase">How many guests?</div>
          <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
            {guestNumbers.map((g, i) => (
              <div
                key={i}
                className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]"
              >
                {g}
              </div>
            ))}
          </div>
          <div className="text-[30px] mb-4 uppercase">venue style</div>
          <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
            <div className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]">
              indoor
            </div>
            <div className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]">
              outdoor
            </div>
          </div>
          <button className="uppercase border border-black bg-primary px-4 py-1 text-white text-[48px] rounded-full absolute bottom-[-2.7rem]">
            consult
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full pl-10">
        <div className="uppercase text-[36px] my-2">our clients</div>
        <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
          {clients.map((c, i) => (
            <ClientCard data={c} key={i} withDetail />
          ))}
        </div>
      </div>
      <div className="mb-10" />
      {/* <Footer /> */}
    </>
  )
}
