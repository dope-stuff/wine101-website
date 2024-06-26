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

export default function WineEvent() {
  // const banners = [
  //   <Image
  //     key="1"
  //     removeWrapper
  //     className="max-h-[70vh] w-full rounded-none object-cover"
  //     src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
  //     alt=""
  //   />,
  //   <Image
  //     key="2"
  //     removeWrapper
  //     className="max-h-[70vh] w-full rounded-none object-cover"
  //     src="https://lh3.googleusercontent.com/pw/AP1GczNiyir4OYX1Sx9XpKHfUWG_qS-PUiDXk0qll6S-ymQaAIOPHPpWo7l8SJXu1Ic8w99B7BHiAkNDytKM0TTWIl-PcxTPsqV0_XbI6L6fTItsuiteS5Cc6FFDlxbufLBevgG57YY1dx8NlCAjwLmvzrfuYA=w1209-h907-s-no-gm?authuser=0"
  //     alt=""
  //   />,
  // ]
  const [content, setContent] = useState([
    {
      heading: 'help you choose quality wines',
      image: <BeginnerFriendlyIcon />,
      maxWidth: '70%',
      subheading:
        'มากกว่า 70 ไวน์ลิสต์ที่มี เราช่วยคัดสรรไวน์คุณภาพจากทั่วทุกมุมโลกให้คุ้มค่ากับงบประมาณ',
    },
    {
      heading: 'Customize for Your Event ',
      image: <ExploreTastebudsIcon />,
      maxWidth: 580,
      subheading:
        'ยกระดับอีเวนต์ให้พิเศษยิ่งขึ้น ด้วย Wine Activity ที่ match กับ theme อีเว้นต์ของงาน',
    },
    {
      heading: 'Full Support & Service',
      image: <FullSupportServiceIcon />,
      maxWidth: '80%',
      subheading:
        'Staff support ทีมงานพร้อมช่วยบริการหน้างานแบบครบวงจร Somerlier Service บริการผู้เชี่ยวชาญเรื่องไวน์ (ซอมเมอลิเยร์) ตามความต้องการ',
    },
    {
      heading: 'variety of service',
      image: <VarietyOfServiceIcon />,
      maxWidth: 560,
      subheading: 'สามารถจัดเป็น private event, company party หรือ กิจกกรมสำหรับ team building',
    },
  ])

  const clients = [
    {title: 'ascott bangkok', image: ''},
    {title: 'oscatt bangkok', image: ''},
    {title: 'gurukaka bangkok', image: ''},
    {title: 'dokdak bangkok', image: ''},
    {title: 'bangkokgugu', image: ''},
    {title: 'urukela bangkok', image: ''},
    {title: 'toktok bangkok', image: ''},
  ]

  const [event, setEvent] = useState<IEvent>()

  const getData = async () => {
    const {data: events} = await eventService.getEvent()
    if (events) {
      setEvent(events)
      setContent(
        content.map((c, i) => ({
          ...c,
          subheading: events.details[i].heading,
          heading: events.details[i].heading,
        }))
      )
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    event && (
      <>
        <div className="w-full justify-center flex-col flex items-center mx-auto">
          {
            <Carousel
              elements={event.banner.map((b: IMenu) => (
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
          }
          <div className="w-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-12">
            <div className="max-w-[60%] flex-col flex items-center text-[30px] text-center pl-4">
              <div className="text-[78px] font-semibold uppercase">{event.header.heading}</div>
              <div className="text-[48px] font-doggy w-[80%]">{event.header.subheading}</div>
              <Service1O1ContactUsIcon className="cursor-pointer" />
            </div>
            <SmartPhoneImage className="max-w-[320px] flex-1 h-full" />
          </div>
          <div className="w-[90%] flex-col flex">
            {content.map((e, i) => (
              <div
                key={i}
                className={`flex-row flex items-center gap-4 ${i % 2 !== 0 ? 'justify-end' : ''}`}
              >
                <div className="max-h-[280px]">{e.image}</div>
                <div className="flex-col flex">
                  <div className="text-[44px] uppercase">{e.heading}</div>
                  <div className="font-doggy text-[27px]" style={{maxWidth: e.maxWidth}}>
                    {e.subheading}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full pl-10">
            <div className="uppercase text-[36px] my-2">our clients</div>
            <div className="w-full flex-row flex flex-nowrap gap-4 overflow-auto">
              {clients.map((c, i) => (
                <ClientCard data={c} key={i} />
              ))}
            </div>
          </div>
          <div className="mb-10" />
        </div>
        {/* <Footer /> */}
      </>
    )
  )
}
