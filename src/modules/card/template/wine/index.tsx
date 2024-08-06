import {Image} from '@nextui-org/react'
import CardWineButton from './button'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

interface WineCardProps {
  data: any
  theme: {
    textColor: string
    bgColor: string
    type: string
  }
}
export default function WineCard({data, theme}: WineCardProps) {
  const getProductCategories = (data: any): string[] => {
    const result = [
      data.category,
      data.country,
      data.type?.value,
      data.tags?.[0]?.value,
      ...(data.grapes ? data.grapes.split(', ') : []),
      ...(data.categories?.[0]?.name ? data.categories[0].name.split(', ') : []),
      ...(data.variants?.[0]?.material ? data.variants[0].material.split(', ') : []),
    ].filter(Boolean)
    return result
  }
  const categories = getProductCategories(data)

  return (
    <div className="flex-1 max-w-[240px] min-w-[180px] h-full flex-col flex gap-2 p-2 border border-[#CFCFCF] bg-white">
      <div
        className="relative w-[180px] h-[180px] mx-auto flex-row flex justify-center items-center"
        style={{backgroundColor: theme.bgColor}}
      >
        <Image
          width={120}
          height={160}
          removeWrapper
          loading="lazy"
          className="max-h-[160px] object-contain p-2"
          src={data.thumbnail || data.imageUrl}
          alt={data.imageUrl || ''}
        />
      </div>
      <div className="text-start text-[12px]">{data.title || data.itemDisplayName}</div>
      <div className="max-h-[240px] overflow-hidden flex-row flex flex-wrap items-center gap-2">
        {categories.length > 0 &&
          categories
            .sort((a, b) => a.length - b.length) // Sort categories by length
            .map((c, index) => (
              <div
                key={index}
                className={`text-[12px] px-2 py-1 rounded-full whitespace-nowrap text-white ${inter.className}`}
                style={{backgroundColor: theme.bgColor}}
              >
                {c}
              </div>
            ))}
      </div>
      <div className="ml-auto mt-auto">
        <div className="flex-row flex text-[12px] whitespace-nowrap items-center gap-2">
          <div>
            {data.variants
              ? (data.variants[0].prices[0].amount / 100).toLocaleString()
              : data.bottlePrice.toLocaleString() || '-'}{' '}
            {data.variants ? data.variants[0].prices[0].currency_code.toUpperCase() : 'THB'}
          </div>
          <CardWineButton handle={!!data.handle ? data.handle : data.linkTo} />
        </div>
      </div>
    </div>
  )
}
