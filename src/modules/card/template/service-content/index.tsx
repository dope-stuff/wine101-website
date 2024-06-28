import {iannDog} from '@/styles/fonts'

interface ServiceContentCardProps {
  index: number
  data: {image?: JSX.Element; heading: string; subheading: string; maxWidth?: string | number}
}
export default function ServiceContentCard({data, index}: ServiceContentCardProps) {
  return (
    <div className={`flex-row flex items-center gap-4 ${index % 2 !== 0 ? 'justify-end ml-auto' : ''}`}>
      <div className="max-h-[250px]">{data.image}</div>
      <div className={`flex-col flex gap-2 ${index % 2 !== 0 ? 'max-w-xl' : ''}`}>
        <div className="text-2xl md:text-3xl uppercase">{data.heading}</div>
        <div
          className={`${iannDog.className} text-lg md:text-xl`}
          style={{maxWidth: data.maxWidth}}
        >
          {data.subheading}
        </div>
      </div>
    </div>
  )
}
