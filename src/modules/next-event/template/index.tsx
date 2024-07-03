import dayjs from 'dayjs'
import {workshopService} from '@/lib/data/workshop.service'
import NextEventCountDown from '@/modules/next-event/components/count-down'
import MiniBookNowButton from '@/modules/button/components/mini-booknow'

export default async function NextEvent() {
  const {
    data: [workshop],
  } = await workshopService.get({
    filters: {
      eventDate: {
        $gte: dayjs().format('YYYY-MM-DD'),
      },
    },
    sort: {
      eventDate: 'asc'
    },
    pagination: {
      pageSize: 1,
      withCount: false,
    },
  })
  const eventDate = dayjs(workshop.eventDate)
console.log(workshop);

  return (
    <div className="w-full flex items-center justify-center bg-primary-2">
      <div className="w-full max-w-7xl flex flex-col md:flex-row p-4 items-center justify-between gap-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl">OUR NEXT WORKSHOP</div>
          <div className="text-2xl">{eventDate.format('D MMMM YYYY')}</div>
        </div>
        <div className="w-full flex flex-1 flex-row justify-evenly">
          <NextEventCountDown date={eventDate.format('D MMMM YYYY HH:mm:ssZ')} />
        </div>
        <MiniBookNowButton />
      </div>
    </div>
  )
}
