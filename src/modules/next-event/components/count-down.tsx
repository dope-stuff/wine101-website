'use client'
import dayjs from 'dayjs'
import {useEffect, useState, useCallback} from 'react'
import NextEventPopup from '@/modules/next-event/components/popup'

interface NextEventCountDownProps {
  date: string
}

export default function NextEventCountDown({date}: NextEventCountDownProps) {
  const [countDown, setCountDown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const updateCountDown = useCallback(() => {
    const curDate = dayjs()
    const desDate = dayjs(date)

    const diffInMilliseconds = desDate.diff(curDate)

    if (diffInMilliseconds <= 0) {
      setCountDown({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      })
      return
    }

    const seconds = Math.floor((diffInMilliseconds / 1000) % 60)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0')
    const hours = Math.floor((diffInMilliseconds / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0')
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0')

    setCountDown({days, hours, minutes, seconds})
  }, [date])

  useEffect(() => {
    updateCountDown() // Initial call to set the countdown immediately
    const timer = setInterval(updateCountDown, 1000)
    return () => clearInterval(timer)
  }, [updateCountDown])

  return (
    <>
      <NextEventPopup date={date} countDown={countDown} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">{countDown.days}</div>
        <div className="text-xl">DAY</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">{countDown.hours}</div>
        <div className="text-xl">HOUR</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">{countDown.minutes}</div>
        <div className="text-xl">MINUTE</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl">{countDown.seconds}</div>
        <div className="text-xl">SECOND</div>
      </div>
    </>
  )
}
