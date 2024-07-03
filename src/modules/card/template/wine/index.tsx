import {Image} from '@nextui-org/react'
// import {Product} from '@/lib/data/models/product'
// import {WorkshopProduct} from '@/lib/data/models/workshop'
import CardWineButton from './button'

interface WineCardProps {
  data: any
  theme: {
    textColor: string
    bgColor: string
    type: string
  }
}
export default function WineCard({data, theme}: WineCardProps) {
  const categories = [
    data.category,
    data.country,
    data.grapes,
    data.type ? data.type.value : undefined,
    data.tags ? data.tags[0].value : undefined,
    data.categories ? data.categories[0].name : undefined,
  ].filter((e) => !!e)

  return (
    <div className="w-[250px] h-full flex-col flex gap-2 p-2 border border-[#CFCFCF] bg-white">
      <div
        className="relative w-full h-[160px] flex-row flex justify-center items-center"
        style={{backgroundColor: theme.bgColor}}
      >
        <Image
          width={100}
          height={120}
          className="max-h-[160px] object-contain p-2"
          src={data.thumbnail || data.imageUrl}
          alt={data.imageUrl}
        />
      </div>
      <div>{data.title || data.itemDisplayName}</div>
      <div className="flex-row flex flex-wrap items-center gap-2">
        {categories.length > 0 &&
          categories.map((c, index) => (
            <div
              key={index}
              className="text-[14px] px-2 py-1 rounded-full whitespace-nowrap text-white"
              style={{backgroundColor: theme.bgColor}}
            >
              {c}
            </div>
          ))}
      </div>
      <div className="ml-auto mt-auto">
        <div className="flex-row flex whitespace-nowrap items-center gap-2">
          <div>
            {data.variants
              ? (data.variants[0].prices[0].amount / 100).toLocaleString()
              : data.bottlePrice.toLocaleString() || '-'}{' '}
            {data.variants ? data.variants[0].prices[0].currency_code.toUpperCase() : 'THB'}
          </div>
          <CardWineButton handle={data.handle} />
        </div>
      </div>
    </div>
  )
}
