'use client'
import {Image} from '@nextui-org/react'
import Carousel from '../../../modules/carousel/template'
import FullSupportServiceIcon from '@/modules/common/images/service/full-support-service'
import ClientCard from '../../../modules/card/template/client'
import Service1O1ContactUsIcon from '@/modules/common/images/service/service-1o1-contact-us'
import SmartPhoneImage from '@/modules/common/images/smart-phone'
import InteractiveExperienceIcon from '@/modules/common/images/service/interactive-experience'
import ContentAndStoryIcon from '@/modules/common/images/service/content-and-story'
import {iannDog} from '@/styles/fonts'
import {collaborationService} from '@/lib/data/collaboration.service'
import {useEffect, useState} from 'react'
import {IEvent} from '@/lib/data/models/common'
import {IMenu} from '@/lib/data/models/navbar'
import ContactFlasksButton from '@/modules/button/components/contact-flasks'

export default function Collaboration() {
  const content = [
    {
      heading: 'Content and storytelling',
      image: <ContentAndStoryIcon height={150} className="max-w-[150px]" />,
      maxWidth: 400,
      subheading: 'สร้างสรรค์เรื่องไวน์ให้เข้ากับเรื่องราวของแบรนด์',
    },
    {
      heading: 'Interactive experience for community building',
      image: <InteractiveExperienceIcon height={180} className='max-w-[150px] md:max-w-none'  />,
      subheading: 'เปิดพื้นที่การมีส่วนร่วม เสริมสร้างแบรนด์ให้แข็งแกร่ง',
    },
    {
      heading: 'Full Support & Service',
      image: <FullSupportServiceIcon height={150} className="max-w-[150px]" />,
      maxWidth: 520,
      subheading:
        'Staff support ทีมงานพร้อมช่วยบริการหน้างานแบบครบวงจร Somerlier Service บริการผู้เชี่ยวชาญเรื่องไวน์ (ซอมเมอลิเยร์) ตามความต้องการ',
    },
  ]

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
    const {data: collaborations} = await collaborationService.getCollaboration()
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
              <div className="text-2xl md:text-3xl font-semibold uppercase">
                {pageData.header.heading}
              </div>
              <div className={`text-2xl md:text-3xl w-[80%] ${iannDog.className}`}>
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
          <div className="max-w-[2040px] w-[90%] gap-4 flex-col flex">
            {pageData.details.map((e, i) => (
              <div
                key={i}
                className={`w-full md:w-[80%] flex-row flex items-center gap-4 ${
                  i % 2 !== 0 ? 'md:justify-end md:ml-auto' : ''
                }`}
              >
                <div className="max-h-[270px]">{e.image}</div>
                <div className={`flex-col flex gap-2 ${i % 2 !== 0 ? 'lg:ml-[-30px] -mt-8' : ''}`}>
                  <div className={`text-2xl md:text-3xl uppercase max-w-[420px] `}>{e.heading}</div>
                  <div
                    className={`${iannDog.className} max-w-[${e.maxWidth}] text-lg md:text-xl`}
                    style={{maxWidth: e.maxWidth}}
                  >
                    {e.subheading}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[2040px] flex flex-col w-full px-10 mt-4">
            <div className="uppercase text-4xl my-2">our clients</div>
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
