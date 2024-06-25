import {IWorkshop} from '@/lib/data/models/workshop'
import {Image} from '@nextui-org/react'
import dayjs from 'dayjs'

interface WorkShopCardProps {
  data: IWorkshop
}
export default function WorkShopCard({data}: WorkShopCardProps) {
  const {name, description, event_date, posters} = data
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[150px] bg-primary">
        <Image
          className="w-full max-h-[180px] !rounded-none"
          removeWrapper
          src={posters}
          alt=""
        />
      </div>
      <div className="text-[14px]">
        <div className="text-[18px]">{name}</div>
        <div>{description}</div>
        <div>{dayjs(event_date).format('DD MMMM YYYY')}</div>
      </div>
      <div className="flex-row flex flex-nowrap gap-2 justify-end mt-4">
        <div className="text-[12px]">see more photos</div>
        <a href="https://imgbb.com/">
          <Image src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp" alt="wine-101-camera" />
        </a>
      </div>
    </div>
  )
}
