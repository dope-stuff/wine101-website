'use client'
import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import ExploreTastebudsIcon from '@/modules/common/images/service/explore-tastebuds'
import VarietyOfServiceIcon from '@/modules/common/images/service/variety-of-service'
import FullSupportServiceIcon from '@/modules/common/images/service/full-support-service'
import ClientCard from '../../../modules/card/template/client'
import Service1O1ContactUsIcon from '@/modules/common/images/service/service-1o1-contact-us'
import BeginnerFriendlyIcon from '@/modules/common/images/service/beginner-friendly'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import {eventService} from '@/lib/data/event.service'
import {useEffect, useState} from 'react'
import {IMenu} from '@/lib/data/models/navbar'
import {IEvent} from '@/lib/data/models/common'
import {iannDog} from '@/styles/fonts'
import ServiceContentCard from '@/modules/card/template/service-content'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'

export default function WineEvent() {
  const content = [
    {
      heading: 'help you choose quality wines',
      image: <BeginnerFriendlyIcon height={150} className="max-w-[150px]" />,
      maxWidth: 450,
      subheading:
        'มากกว่า 70 ไวน์ลิสต์ที่มี เราช่วยคัดสรรไวน์คุณภาพจากทั่วทุกมุมโลกให้คุ้มค่ากับงบประมาณ',
    },
    {
      heading: 'Customize for Your Event ',
      image: <ExploreTastebudsIcon height={150} className="max-w-[150px]" />,
      maxWidth: 500,
      subheading:
        'ยกระดับอีเวนต์ให้พิเศษยิ่งขึ้น ด้วย Wine Activity ที่ match กับ theme อีเว้นต์ของงาน',
    },
    {
      heading: 'Full Support & Service',
      image: <FullSupportServiceIcon height={150} className="max-w-[150px]" />,
      maxWidth: 640,
      subheading:
        'Staff support ทีมงานพร้อมช่วยบริการหน้างานแบบครบวงจร Somerlier Service บริการผู้เชี่ยวชาญเรื่องไวน์ (ซอมเมอลิเยร์) ตามความต้องการ',
    },
    {
      heading: 'variety of service',
      image: <VarietyOfServiceIcon height={150} className="max-w-[150px]" />,
      maxWidth: 450,
      subheading: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
    },
  ]
  const [contents, setContents] = useState(content)

  const clients = [
    {title: 'ascott bangkok', image: ''},
    {title: 'oscatt bangkok', image: ''},
    {title: 'gurukaka bangkok', image: ''},
    {title: 'dokdak bangkok', image: ''},
    {title: 'bangkokgugu', image: ''},
    {title: 'urukela bangkok', image: ''},
    {title: 'toktok bangkok', image: ''},
  ]

  const [pageData, setPageData] = useState<IEvent>()

  const getData = async () => {
    const {data: events} = await eventService.getEvent()
    if (events) {
      setPageData(events)
      setContents(
        content.map((c, i) => ({
          ...c,
          subheading: events.details[i].subheading,
          heading: events.details[i].heading,
        }))
      )
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onOpenLink = (linkto: string) => {
    window.open(linkto, '_blank')
  }
  return (
    pageData && (
      <>
        <div className="w-full justify-center flex-col flex items-center mx-auto gap-4">
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
          <div className="w-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-8">
            <div className="max-w-[60%] lg:h-full flex-col flex items-center text-3xl text-center pl-4 gap-8">
              <div className="text-2xl md:text-3xl font-semibold uppercase max-w-[600px]">
                {pageData.header.heading}
              </div>
              <div className={`text-xl md:text-2xl max-w-[700px] ${iannDog.className}`}>
                {pageData.header.subheading}
              </div>
              <div className="my-auto">
                <ContactFlasksButton
                  title={pageData.header.buttonTitle}
                  linkTo={pageData.header.linkTo}
                />
              </div>
            </div>
            <SmartPhoneImage className="max-w-[250px] flex-1 h-full" />
          </div>
          <div className="w-[90%] flex-col flex">
            {contents.map((e, i) => (
              <ServiceContentCard key={i} index={i} data={e} />
            ))}
          </div>
          <div className="flex flex-col w-full pl-10">
            <div className="uppercase text-4xl text-center my-4">our clients</div>
            <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
              {clients.map((c, i) => (
                <ClientCard data={c} key={i} />
              ))}
            </div>
          </div>
          <div className="mb-10" />
        </div>
      </>
    )
  )
}
