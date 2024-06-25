import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
import EventDialog from '../dialog'
import BookNowButton from '../../../button/components/booknow'
import {IWorkshopEvent} from '@/lib/data/models/workshop'

type EventProps = {
  data: IWorkshopEvent
}
export default function Event({data}: EventProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getTimeDifference = (givenDate: string) => {
    const now = dayjs()
    const givenDay = dayjs(givenDate)

    // Calculate the difference in milliseconds
    const diffInMilliseconds = givenDay.diff(now)

    // Calculate the difference in seconds, minutes, hours, and days
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000)
    const seconds = diffInSeconds % 60

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    const minutes = diffInMinutes % 60

    const diffInHours = Math.floor(diffInMinutes / 60)
    const hours = diffInHours % 24

    const days = Math.floor(diffInHours / 24)

    return {days, hours, minutes, seconds}
  }

  useEffect(() => {
    setTime(getTimeDifference(data.event_date))

    const timer = setInterval(() => {
      setTime(getTimeDifference(data.event_date))
    }, 1000)

    return () => clearInterval(timer)
  }, [data.event_date])

  setTime
  return (
    data && (
      <div className="w-full flex-col lg:flex-row flex justify-between items-center bg-[#E8C85E] px-10 py-4 gap-4">
        <div className="flex-col flex text-center">
          <div className="uppercase text-[40px]">{data.name}</div>
          <div className="text-[28px]">{dayjs(data.event_date).format('DD MMM YYYY')}</div>
        </div>
        <div className="flex-1 lg:max-w-[50%] flex-row flex justify-evenly items-center gap-10 text-[24px] text-center mx-auto">
          <div className="flex-col flex">
            <div className="text-[48px]">{time.days}</div>
            <div>Day</div>
          </div>
          <div className="flex-col flex">
            <div className="text-[48px]">{time.hours}</div>
            <div>Hour</div>
          </div>
          <div className="flex-col flex">
            <div className="text-[48px]">{time.minutes}</div>
            <div>Minute</div>
          </div>
          <div className="flex-col flex">
            <div className="text-[48px]">{time.seconds}</div>
            <div>Second</div>
          </div>
        </div>
        <BookNowButton />
        <EventDialog data={data} time={time} />
      </div>
    )
  )
}
