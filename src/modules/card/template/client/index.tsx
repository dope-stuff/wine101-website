'use client'
import {Event} from '@/lib/data/models/event'
import {Image} from '@nextui-org/react'
import {usePathname, useRouter} from 'next/navigation'

interface ClientCardProps {
  data: Event
  withDetail?: boolean
}
export default function ClientCard({data, withDetail}: ClientCardProps) {
  const pathname = usePathname()
  const router = useRouter()
  const order = {
    Sparkling: data.sparklingWineUsed,
    Red: data.whiteWineUsed,
    White: data.roseWineUsed,
  }
  return (
    <div
      className="min-w-[240px] w-[240px] flex-col flex gap-2 p-2 border border-[#CFCFCF]"
      onClick={() => (!withDetail ? router.push(`/${pathname.split('/')[1]}/${data.id}`) : null)}
    >
      <Image
        removeWrapper
        src={data.posters}
        alt=""
        className={`relative w-full max-h-[150px] min-h-[150px] !object-cover !rounded-none ${
          !withDetail ? 'cursor-pointer' : ''
        }`}
      />
      <div className="flex flex-col h-full">
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
            <div className="flex-row flex flex-nowrap gap-2 justify-end mt-auto">
              <a href={`/${pathname.split('/')[1]}/${data.id}`} className="text-[12px]">see more photos</a>
              <a href={`/${pathname.split('/')[1]}/${data.id}`}>
                <Image src="https://i.ibb.co/k2c7m2S/wine-101-camera.webp" alt="wine-101-camera" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
