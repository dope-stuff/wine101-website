import {Image} from '@nextui-org/react'

interface ClientCardProps {
  data: {
    title: string
    image: string
    date?: string
    guest?: number
    order?: string[]
    venue?: string
  }
  withDetail?: boolean
}
export default function ClientCard({data, withDetail}: ClientCardProps) {
  const {title, image} = data
  return (
    <div className="min-w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <div className="relative w-full h-[150px] bg-primary" />
      <div>
        <div>{title}</div>
        {withDetail && (
          <>
            <div>{data.date}</div>
            <div className="text-[12px] leading-4">
              <div className="!font-sans">Guest : {data.guest}</div>
              <div className="!font-sans">
                Wine : {data.order.map((o, i) => o + (i !== data.order.length - 1 && '/'))}
              </div>
              <div className="!font-sans">Guest : {data.venue}</div>
            </div>
            <div className="flex-row flex flex-nowrap gap-2 justify-end mt-4">
              <div className="text-[12px]">see more photos</div>
              <a href="https://imgbb.com/">
                <Image src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp" alt="wine-101-camera" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
