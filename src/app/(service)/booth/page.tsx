import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import FlasksIcon from '@/modules/common/images/flasks'
import AffordableFunIcon from '@/modules/common/images/service/affordable-fun'
import ExploreVarietyWinesIcon from '@/modules/common/images/service/explore-variety-wines'
import WineByGlassIcon from '@/modules/common/images/service/wine-by-glass'

export default function Booth() {
  const banners = [
    <Image
      key="1"
      removeWrapper
      className="max-h-[70vh] w-full rounded-none object-cover"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
    <Image
      key="2"
      removeWrapper
      className="max-h-[70vh] w-full rounded-none object-cover"
      src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
      alt=""
    />,
  ]
  const data = [
    {
      name: 'Wine by the Glass',
      image: <WineByGlassIcon />,
      maxWidth: '70%',
      description: 'เปิดโลกไวน์ได้โดยไม่ต้องเปิดขวด เปิดแค่ใจแล้วชิมไวน์เป็นแก้วกับเรา',
    },
    {
      name: 'Explore a Variety of Wines',
      image: <ExploreVarietyWinesIcon />,
      maxWidth: '600px',
      description:
        'จัดมาให้กับ ไวน์หลากหลายประเภท ทั้ง Sparkling , White , Rosé and Red ต่างรส ต่างองุ่น จากหลากหลายประเทศ ให้ทุกคนได้ค้นหาไวน์ที่ตัวเองชอบ',
    },
    {
      name: 'Affordable Fun',
      image: <AffordableFunIcon />,
      maxWidth: '80%',
      description: 'ไวน์คุณภาพดี ราคาเป็นกันเอง สนุกกับไวน์ได้ สบายกระเป๋าด้วย ',
    },
  ]

  return (
    <>
      <div className="w-full justify-center flex-col flex items-center mx-auto">
        <Carousel elements={banners} slidesPerView={1} arrowColor="white" gap={0} />
        <div className="w-full flex-col flex items-center justify-center mt-8 relative">
          <FlasksIcon width={100} height={100} className="absolute left-10 top-4" />
          <div className="text-[78px] font-semibold uppercase">pop-up booth</div>
          <div className="text-[48px] font-doggy">
            อัพความสนุกกับ wine101 pop-up booth ค้นหาไวน์ที่ชอบ รสชาติที่ใช่
          </div>
        </div>
        <div className="w-[90%] flex-col flex mt-8">
          {data.map((e, i) => (
            <div
              key={i}
              className={`flex-row flex items-center gap-4 ${i === 1 ? 'justify-end ml-auto' : ''}`}
            >
              <div className="max-h-[270px]">{e.image}</div>
              <div className="flex-col flex">
                <div className="text-[44px] uppercase">{e.name}</div>
                <div className="font-doggy text-[27px]" style={{maxWidth: e.maxWidth}}>
                  {e.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-row flex items-center justify-center gap-10">
          <div className="text-[44px] flex flex-col">
            <div className="font-doggy">ติดตามอัพเดท Pop-up booth</div>
            <div className="font-doggy">ของพวกเราได้ที่ หน้า Instagram</div>
          </div>
          <button className="uppercase border border-black bg-[#81CF8A] px-4 py-1 text-[48px] rounded-full">
            click!
          </button>
        </div>
        <div className="mb-10" />
      </div>
      {/* <Footer /> */}
    </>
  )
}
