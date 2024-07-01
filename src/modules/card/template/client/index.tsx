import {Event} from '@/lib/data/models/event'
import {Image} from '@nextui-org/react'

interface ClientCardProps {
  data: Event
  withDetail?: boolean
}
export default function ClientCard({data, withDetail}: ClientCardProps) {
  const order = {
    Sparkling: data.sparklingWineUsed,
    Red: data.whiteWineUsed,
    White: data.roseWineUsed,
  }
  return (
    <div className="w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]">
      <Image removeWrapper src={data.posters} alt="" className="relative w-full h-[150px] object-cover !rounded-none" />
      <div>
        <div>{data.name}</div>
        {withDetail && (
          <>
            <div>{data.eventDate}</div>
            <div className="text-[12px] leading-4">
              <div className="!font-sans">Guest : {data.totalGuests}</div>
              <div className="!font-sans">
                Wine :{' '}
                {order &&
                  Object.keys(order).map(
                    (o, i) =>
                      `${o} ${order[o as keyof typeof order]} ${
                        o + (i !== Object.keys(order).length - 1 && '/')
                      }`
                  )}
              </div>
              <div className="!font-sans">Guest : {data.venue}</div>
            </div>
            <div className="flex-row flex flex-nowrap gap-2 justify-end mt-4">
              <div className="text-[12px]">see more photos</div>
              <a href="#">
                <Image src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp" alt="wine-101-camera" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
