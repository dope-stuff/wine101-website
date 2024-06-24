'use client'

import {useEffect, useState} from 'react'
import {Image} from '@nextui-org/react'
import {navbarService} from '@/lib/data/navbar.service'
import {IMenu, IFooter} from '@/lib/data/models/navbar'

const List = ({title, list}: {title: string; list: {buttonTitle: string; linkTo: string}[]}) => {
  return (
    <div>
      <div className="text-[24px]">{title.toUpperCase()}</div>
      <div className="flex-col flex">
        {list.map((e, i) => (
          <a key={i} href={e.linkTo}>
            {e.buttonTitle}
          </a>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  const data = [
    {
      title: 'About you',
      list: [
        {label: 'Favorite wine', value: 'Favorite wine'},
        {label: 'Orders', value: 'Orders'},
        {label: 'Your history', value: 'Your history'},
      ],
    },
    {
      title: 'our service',
      list: [
        {label: 'Wine Workshop', value: 'Wine Workshop'},
        {label: 'Event ', value: 'Event '},
        {label: 'Collaboration', value: 'Collaboration'},
        {label: 'Pop-up', value: 'Pop-up'},
        {label: 'Wedding ', value: 'Wedding '},
      ],
    },
    {
      title: 'our wines',
      list: [
        {label: 'All wines', value: 'All wines'},
        {label: 'Best Seller', value: 'Best Seller'},
        {label: 'Sparkling Wine', value: 'Sparkling Wine'},
        {label: 'Rose  Wine', value: 'Rose  Wine'},
        {label: 'White  Wine', value: 'White  Wine'},
        {label: 'Red  Wine', value: 'Red  Wine'},
      ],
    },
  ]
  const [footerData, setFooterData] = useState<IFooter>()
  const getData = async () => {
    const {data} = await navbarService.getFooter()
    if (data) {
      setFooterData(data)
    }
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onNewTab = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    footerData && (
      <div className="bg-[#BE1C2D] text-white w-full flex-row flex justify-evenly gap-4 flex-wrap p-4">
        {footerData.logo.mediaUrl ? (
          <Image
            width={150}
            removeWrapper
            src={footerData.logo.mediaUrl}
            alt={footerData.logo.alt}
          />
        ) : (
          <p className="font-UQY text-[40px] my-auto">Wine101</p>
        )}
        {/* {data.map((e, i) => (
        <List key={i} title={e.title} list={e.list} />
      ))} */}
        <List title={footerData.aboutTitle} list={footerData.about} />
        <List title={footerData.serviceTitle} list={footerData.service} />
        <List title={footerData.winesTitle} list={footerData.wines} />
        <div className="flex-col flex items-center">
          <div>{footerData.contact.heading}</div>
          <div>{footerData.contact.subheading}</div>
          <div>{footerData.contact.description}</div>
          <div className="flex-row flex items-center mt-2">
            {footerData.social.map((e, i) => (
              <button key={i} onClick={() => onNewTab(e.linkTo)}>
                <Image
                  width={40}
                  src={e.mediaUrl}
                  alt={e.alt}
                  className="max-h-[30px] object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default Footer
