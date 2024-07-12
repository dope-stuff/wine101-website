import {memo, useMemo} from 'react'
import {Image} from '@nextui-org/react'
import CardWineButton from './button'

interface WineCardProps {
  data: any
  theme: {
    textColor: string
    bgColor: string
    type: string
  }
}

const WineCard = ({data, theme}: WineCardProps) => {
  const getProductCategories = (data: any): string[] => {
    const result = [
      data.category,
      data.country,
      ...(data.grapes ? data.grapes.split(', ') : []),
      data.type?.value,
      data.tags?.[0]?.value,
      ...(data.categories?.[0]?.name ? data.categories[0].name.split(', ') : []),
      ...(data.variants?.[0]?.material ? data.variants[0].material.split(', ') : []),
    ].filter(Boolean)
    return result
  }

  const categories = useMemo(() => getProductCategories(data), [data])

  const price = useMemo(() => {
    if (data.variants) {
      return (data.variants[0].prices[0].amount / 100).toLocaleString()
    }
    return data.bottlePrice?.toLocaleString() || '-'
  }, [data])

  const currency = useMemo(() => {
    if (data.variants) {
      return data.variants[0].prices[0].currency_code.toUpperCase()
    }
    return 'THB'
  }, [data])

  const handle = useMemo(() => (!!data.handle ? data.handle : data.linkTo), [data])

  return (
    <div className="flex-1 min-w-[250px] h-full flex-col flex gap-2 p-2 border border-[#CFCFCF] bg-white">
      <div
        className="relative w-full h-[160px] flex-row flex justify-center items-center"
        style={{backgroundColor: theme.bgColor}}
      >
        <Image
          width={100}
          height={120}
          className="max-h-[160px] object-contain p-2"
          src={data.thumbnail || data.imageUrl}
          alt={data.imageUrl || ''}
        />
      </div>
      <div className="text-start">{data.title || data.itemDisplayName}</div>
      <div className="max-h-[240px] overflow-hidden flex-row flex flex-wrap items-center gap-2">
        {categories.length > 0 &&
          categories
            .sort((a, b) => a.length - b.length) // Sort categories by length
            .map((c, index) => (
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
            {price} {currency}
          </div>
          <CardWineButton handle={handle} />
        </div>
      </div>
    </div>
  )
}

export default WineCard
