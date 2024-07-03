'use client'
import {iannDog} from '@/styles/fonts'
import {useEffect, useState} from 'react'
interface BookNowButtonProps {
  title: string
  linkTo?: string
  className?:string
}
export default function BookNowButton({title, linkTo,className}: BookNowButtonProps) {
  const [bookNowLinkTo, setBookNowLinkTo] = useState('')

  const onBookNow = (url?: string) => {
    window.open(url || bookNowLinkTo, '_blank')
  }

  useEffect(() => {
    const linkto = localStorage.getItem('bookNowLinkTo')
    if (linkto) {
      setBookNowLinkTo(linkto)
    }
  }, [])
  return (
    <button
      className={`bg-[#81CF8A] uppercase rounded-full px-8 py-2 text-3xl text-black mt-6 border-black border-2 ${className}`}
      onClick={() => onBookNow(linkTo)}
    >
      {title}
    </button>
  )
}
