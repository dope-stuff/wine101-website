import {Workshop} from '@/lib/data/models/workshop'
import {Image} from '@nextui-org/react'
import dayjs from 'dayjs'

interface WorkShopCardProps {
  data: Workshop
}
export default function WorkShopCard({data}: WorkShopCardProps) {
  const {name, description, eventDate, posters} = data
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[200px] bg-primary">
        <Image
          className="w-full max-h-[200px] object-cover !rounded-none"
          removeWrapper
          src={posters}
          alt=""
        />
      </div>
      <div className="text-[14px] gap-2">
        <div className="text-lg]">{name}</div>
        <strong className="font-bold text-[#BE1C2D]">{description}</strong>
        <div>{dayjs(eventDate).format('DD MMMM YYYY')}</div>
      </div>
      <div className="flex-row flex flex-nowrap gap-2 justify-end mt-4">
        <a href={`/workshop/${data.id}`} className="text-[12px]">see more photos</a>
        <a href={`/workshop/${data.id}`}>
          <Image src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp" alt="wine-101-camera" />
        </a>
      </div>
    </div>
  )
}
