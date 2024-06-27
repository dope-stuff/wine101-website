'use client'
import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import VarietyOfServiceIcon from '@/modules/common/images/service/variety-of-service'
import ClientCard from '../../../modules/card/template/client'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import HandpickQualityWinesIcon from '@/modules/common/images/service/handpick-quality-wines'
import FullSupportService2Icon from '@/modules/common/images/service/full-support-service-2'
import WorryFreeIcon from '@/modules/common/images/service/worry-free'
import FreeWeddingWineAdviceIcon from '@/modules/common/images/service/free-wedding-wine-advice'
import Consultant from '@/modules/services/components/consultant'
import {iannDog} from '@/styles/fonts'
import {useEffect, useState} from 'react'
import {Wedding} from '@/lib/data/models/common'
import {weddingService} from '@/lib/data/wedding.service'
import {IMenu} from '@/lib/data/models/navbar'
import FlasksIcon from '@/modules/common/images/flasks'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'

export default function WineWedding() {
  const content = [
    {
      heading: 'Free Wedding Wine Advice',
      image: <FreeWeddingWineAdviceIcon />,
      maxWidth: '70%',
      subheading:
        'มากกว่า 70 ไวน์ลิสต์ที่มี เราช่วยคัดสรรไวน์คุณภาพจากทั่วทุกมุมโลกให้คุ้มค่ากับงบประมาณ',
    },
    {
      heading: 'Handpick quality wines to match your special day ',
      image: <HandpickQualityWinesIcon />,
      maxWidth: 580,
      subheading:
        'ยกระดับอีเวนต์ให้พิเศษยิ่งขึ้น ด้วย Wine Activity ที่ match กับ theme อีเว้นต์ของงาน',
    },
    {
      heading: 'Worry-Free',
      image: <WorryFreeIcon />,
      maxWidth: 600,
      subheading:
        'Staff support ทีมงานพร้อมช่วยบริการหน้างานแบบครบวงจร Somerlier Service บริการผู้เชี่ยวชาญเรื่องไวน์ (ซอมเมอลิเยร์) ตามความต้องการ',
    },
    {
      heading: 'Add on Special Wine Corner with Personalized service ',
      image: <VarietyOfServiceIcon />,
      maxWidth: 560,
      subheading: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
    },
    {
      heading: 'Full Support & Service',
      image: <FullSupportService2Icon />,
      maxWidth: 560,
      subheading: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
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

  const [pageData, setPageData] = useState<Wedding>()

  const getData = async () => {
    const {data: collaborations} = await weddingService.getWedding()
    if (collaborations) {
      setPageData({
        ...collaborations,
        details: content.map((c, i) => ({
          ...c,
          subheading: collaborations.details[i].subheading,
          heading: collaborations.details[i].heading,
        })),
      })
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    pageData && (
      <>
        <div className="w-full justify-center flex-col flex items-center mx-auto">
          <div className="w-full flex-row flex flex-nowrap gap-4 justify-evenly items-center text-2xl p-4">
            {panels.map((panel, i) => (
              <>
                <div key={i}>{panel}</div>
                {i !== panels.length - 1 && <div className="w-[2px] h-8 bg-black" />}
              </>
            ))}
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
          <div className="w-full h-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-12">
            <div className="max-w-[60%] flex-col flex items-center text-3xl text-center pl-4">
              <div className="text-6xl md:text-7xl font-semibold uppercase">
                {pageData.header.heading}
              </div>
              <div className={`text-4xl md:text-5xl ${iannDog.className} w-full`}>
                {pageData.header.subheading}
              </div>
              <div className="flex-row flex items-center flex-nowrap gap-8 text-6xl md:text-7xl text-center my-16">
                <FlasksIcon width={150} height={150} />
                {pageData.detailsTitle}
                <FlasksIcon width={150} height={150} />
              </div>
            </div>
            <SmartPhoneImage className="max-w-[320px] flex-1 h-full" />
          </div>
          <div className="w-[90%] flex-col flex xl:mt-[-8rem] 2xl:mt-[-10rem]">
            {pageData.details.map((e, i) => {
              const data = {
                heading: e.heading,
                subheading: e.subheading,
                image: e.image,
                maxWidth: e.maxWidth,
              }
              return <ServiceContentCard key={i} index={i} data={data} />
            })}
          </div>
          <div className="my-auto">
            <ContactFlasksButton
              title={pageData.packagesTitle.buttonTitle}
              linkTo={pageData.packagesTitle.linkTo}
              bgColor='#E8C85E'
            />
          </div>
          <div className="w-full flex-row flex gap-10 text-center my-8">
            {pageData.packages.map((pkg) => (
              <div key={pkg.id} className="flex-1 flex-col flex items-center">
                <Image width={400} height={300} src={pkg.mediaUrl} alt={pkg.alt} />
                <div className="font-bold text-5xl">{pkg.heading}</div>
                <div className={`${iannDog.className} text-2xl max-w-[600px]`}>
                  {pkg.subheading}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Consultant />
        <div className="flex flex-col w-full pl-10">
          <div className="uppercase text-4xl my-2">our clients</div>
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
  )
}
