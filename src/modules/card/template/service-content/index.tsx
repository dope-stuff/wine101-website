import {IMenu} from '@/lib/data/models/navbar'
import {dbHelvethaica} from '@/styles/fonts'
import {Image} from '@nextui-org/react'

interface ServiceContentCardProps {
  index: number
  data: IMenu
}
export default function ServiceContentCard({data, index}: ServiceContentCardProps) {
  return (
    <div
      className={`flex-row flex items-center flex-wrap sm:flex-nowrap justify-center md:justify-normal gap-4 my-2 ${
        index % 2 !== 0 ? 'md:justify-end md:ml-auto' : ''
      }`}
    >
      <div className="max-h-[200px]">
        {data.image || (
          <Image
            height={120}
            removeWrapper
            src={data.mediaUrl}
            alt={data.alt}
            className="max-w-[120px] max-h-[120px]"
          />
        )}
      </div>
      <div className={`w-full max-w-sm xl:max-w-md flex-col flex md:text-start gap-2`}>
        <div className="text-xl md:text-2xl uppercase text-primary-1">{data.heading}</div>
        <div
          className={`${dbHelvethaica.className} text-lg md:text-xl max-w-xl lg:max-w-2xl`}
          // style={{maxWidth: data.maxWidth}}
        >
          {data.subheading}
        </div>
      </div>
    </div>
  )
}
