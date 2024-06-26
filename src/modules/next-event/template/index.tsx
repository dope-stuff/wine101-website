import dayjs from 'dayjs'
import {workshopService} from '@/lib/data/workshop.service'
import NextEventCountDown from '@/modules/next-event/components/count-down'

export default async function NextEvent() {
  const {
    data: [workshop],
  } = await workshopService.get({
    filters: {
      event_date: {
        $gte: dayjs().format('YYYY-MM-DD'),
      },
    },
    pagination: {
      pageSize: 1,
      withCount: false,
    },
  })

  return (
    <div className="w-full flex items-center justify-center bg-primary-2">
      <div className="w-full max-w-7xl flex flex-row p-4 items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="text-4xl">OUR NEXT WORKSHOP</div>
          <div className="text-3xl">{dayjs(workshop.event_date).format('D MMMM YYYY')}</div>
        </div>
        <NextEventCountDown date={workshop.event_date} />
        <button className="h-[50px] rounded-full pt-2 pb-4 px-6 text-[24px] leading-8 text-white bg-primary-1">
          Book Now!
        </button>
      </div>
    </div>
  )
}
