import Image from 'next/image'
import {iannDog} from '@/styles/fonts'
import {homeService} from '@/lib/data/home.service'
import NextEvent from '@/modules/next-event/template'
import Carousel from '@/modules/carousel/template'
import FlasksIcon from '@/modules/common/images/flasks'
import ServiceCard from '@/modules/card/template/service'
import WineCard from '@/modules/card/template/wine'
import {productService} from '@/lib/data/product.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'

export default async function Page() {
  const [{data: pageData}, {products}] = await Promise.all([
    homeService.get(),
    productService.get({
      limit: 12,
      expand: 'categories,tags,type,variants.prices',
      collection_id: ['pcol_01HEWFCSQ6AXRQBKA6VPHGN95Q'],
    }),
  ])

  return (
    <>
      <NextEvent />
      <div className="flex flex-col items-center gap-6">
        <div className="w-[300px] text-4xl md:text-5xl text-center mt-4">{pageData.header.heading}</div>
        <div className={`max-w-[100vw] w-[500px] text-2xl text-center px-4 ${iannDog.className}`}>
          {pageData.header.subheading}
        </div>
        <button className="h-[50px] rounded-full pt-2 pb-4 px-6 text-[24px] leading-5 text-white bg-primary-1 border-2 border-black">
          {pageData.header.buttonTitle}
        </button>
        {/** products */}
        <div className="max-w-[100vw] flex flex-row items-center justify-center gap-8">
          <Image width={100} height={100} src="/images/common/wine-2.svg" alt="" />
          <div className="w-[260px] text-4xl md:text-5xl text-center">{pageData.productsTitle}</div>
          <Image width={60} height={60} src="/images/common/glitter-1.svg" alt="" />
        </div>
        <div className="w-full flex p-4">
          <Carousel
            elements={products.map((product: any, index: number) => (
              <WineCard
                key={index}
                data={product}
                theme={getProductTheme(product.categories[0].name)}
              />
            ))}
            slidesPerView={7}
          />
        </div>
        {/** services */}
        <div className="flex-row flex items-center flex-nowrap gap-8 text-4xl md:text-5xl my-4 text-center">
          <FlasksIcon />
          {pageData.servicesTitle}
          <FlasksIcon />
        </div>
        <div className="min-h-[400px] grid grid-cols-2 lg:grid-cols-5 gap-4 px-4 mb-4">
          {pageData.services.map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  )
}
