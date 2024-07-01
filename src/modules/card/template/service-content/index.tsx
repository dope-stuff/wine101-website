import {IMenu} from '@/lib/data/models/navbar'
import {iannDog} from '@/styles/fonts'
import {Image} from '@nextui-org/react'

interface ServiceContentCardProps {
  index: number
  data: IMenu
}
export default function ServiceContentCard({data, index}: ServiceContentCardProps) {
  return (
    <div
      className={`flex-row flex items-center gap-4 my-2 ${
        index % 2 !== 0 ? 'md:justify-end md:ml-auto' : ''
      }`}
    >
      <div className="max-h-[250px]">
        {data.image || (
          <Image
            height={150}
            removeWrapper
            src={data.mediaUrl}
            alt={data.alt}
            className="max-w-[150px] max-h-[150px]"
          />
        )}
      </div>
      <div className={`flex-col flex gap-2 ${index % 2 !== 0 ? 'max-w-xl' : ''}`}>
        <div className="text-xl md:text-2xl uppercase">{data.heading}</div>
        <div
          className={`${iannDog.className} text-lg md:text-xl max-w-[700px]`}
          // style={{maxWidth: data.maxWidth}}
        >
          {data.subheading}
        </div>
      </div>
    </div>
  )
}
