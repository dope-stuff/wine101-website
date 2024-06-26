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

export default function Collaboration() {
  const content = [
    {
      heading: 'Content and storytelling',
      image: <ContentAndStoryIcon />,
      maxWidth: '70%',
      subheading: 'สร้างสรรค์เรื่องไวน์ให้เข้ากับเรื่องราวของแบรนด์',
    },
    {
      heading: 'Interactive experience for community building',
      image: <InteractiveExperienceIcon />,
      subheading: 'เปิดพื้นที่การมีส่วนร่วม เสริมสร้างแบรนด์ให้แข็งแกร่ง',
    },
    {
      heading: 'Full Support & Service',
      image: <FullSupportServiceIcon />,
      maxWidth: '90%',
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
          <div className="w-full flex-col lg:flex-row flex lg:items-start items-center justify-center mt-8 gap-12">
            <div className="max-w-[60%] flex-col flex items-center text-[30px] text-center pl-4">
              <div className="text-[78px] font-semibold uppercase">{pageData.header.heading}</div>
              <div className={`text-[48px] w-[80%] ${iannDog.className}`}>
                {pageData.header.subheading}
              </div>
              <Service1O1ContactUsIcon className="cursor-pointer" />
            </div>
            <SmartPhoneImage className="max-w-[320px] flex-1 h-full" />
          </div>
          <div className="w-[90%] flex-col flex">
            {pageData.details.map((e, i) => (
              <div
                key={i}
                className={`w-[80%] flex-row flex items-center gap-4 ${
                  i % 2 !== 0 ? 'justify-end ml-auto' : ''
                }`}
              >
                <div className="max-h-[270px]">{e.image}</div>
                <div className="flex-col flex">
                  <div
                    className={`text-[44px] uppercase max-w-[650px] ${
                      i % 2 !== 0 ? 'ml-[-50px]' : ''
                    }`}
                  >
                    {e.heading}
                  </div>
                  <div
                    className={`${iannDog.className} text-[27px]`}
                    style={{maxWidth: e.maxWidth}}
                  >
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
