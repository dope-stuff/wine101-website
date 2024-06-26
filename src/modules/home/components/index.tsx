'use client'
import {useEffect, useState} from 'react'
import dayjs from 'dayjs'

import Banner from './banner'
import Carousel from '../../carousel/template'
import WineCard from '../../card/template/wine'
import ServiceCard from '../../card/template/service'
import Event from './event'

import OurHighLightsIcon from '@/modules/common/images/our-highlights'
import FlasksIcon from '@/modules/common/images/flasks'

import {homeService} from '@/lib/data/home.service'
import {productService} from '@/lib/data/product.service'
import {workshopService} from '@/lib/data/workshop.service'

import {IProduct} from '@/lib/data/models/product'
import {IWorkshopEvent} from '@/lib/data/models/workshop'
import { IHome } from '@/lib/data/models/common'

export default function Home() {
  const [wines, setWines] = useState([])
  const [pageData, setPageData] = useState<IHome>()
  const [events, setEvents] = useState<IWorkshopEvent>()

  const getData = async () => {
    const [{data: home}, {data: event}, products] = await Promise.all([
      homeService.get(),
      workshopService.getWorkshopEvent(dayjs().format('YYYY-MM-DD')),
      productService.getProduct(),
    ])

    if (home) {
      setPageData(home)
    }
    if (event) {
      setEvents(event[0])
    }
    if (products) {
      setWines(
        products.products.map((e: IProduct, i: number) => {
          let theme = {
            textColor: '#B23A57',
            bgColor: '#961937',
            type: 'red',
          }
          switch (e.categories[0].name) {
            case 'Red Wine':
              theme = {
                textColor: '#B23A57',
                bgColor: '#961937',
                type: 'red',
              }
              break
            case 'White Wine':
              theme = {
                textColor: '#AEC5A4',
                bgColor: '#90AD83',
                type: 'white',
              }
              break
            case 'Sparkling Wine (Champagne)':
              theme = {
                textColor: '#ECCB7B',
                bgColor: '#D3AF61',
                type: 'sparkling',
              }
              break
            case 'Rosé Wine':
              theme = {
                textColor: '#F88D97',
                bgColor: '#F16471',
                type: 'rose',
              }
              break
            case 'Ice Wine':
              theme = {
                textColor: '#8AB5CD',
                bgColor: '#6690A7',
                type: 'ice',
              }
              break
            default:
              theme = {
                textColor: '#5C5C5C',
                bgColor: '#2F2F2F',
                type: 'other',
              }
              break
          }
          return <WineCard key={i} data={e} theme={theme} />
        })
      )
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    pageData && (
      <div className="w-screen flex flex-col items-center gap-4">
        {events && <Event data={events} />}
        <Banner data={pageData.header} />
        <div>
          <OurHighLightsIcon width={500} height={200} />
        </div>
        <div className="w-full hidden 2xl:block px-4 py-2">
          <Carousel elements={wines} slidesPerView={7} />
        </div>
        <div className="w-full hidden sm:block 2xl:hidden px-4 py-2">
          <Carousel elements={wines} slidesPerView={5} />
        </div>
        <div className="w-full sm:hidden px-4 py-2">
          <Carousel elements={wines} slidesPerView={4} />
        </div>
        <div className="flex-row flex items-center flex-nowrap gap-8 text-[50px] my-4">
          <FlasksIcon />
          {pageData.servicesTitle}
          <FlasksIcon />
        </div>
        <div className="w-full min-h-[300px] h-full grid grid-cols-2 md:grid-cols-5 gap-4 px-4 mb-4">
          {pageData.services.map((data, i) => (
            <ServiceCard key={i} data={data} />
          ))}
        </div>
      </div>
    )
  )
}
