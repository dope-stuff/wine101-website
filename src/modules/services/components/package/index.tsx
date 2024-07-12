'use client'
import {useState} from 'react'
import PackageModal from './modal'
import {Package} from '@/lib/data/models/package'

interface PackageProps {
  packages: Package[]
}

export default function WeddingPackages({packages}: PackageProps) {
  const guestNumbers = [
    {title: '150', value: 150},
    {title: '200', value: 200},
    {title: '250', value: 250},
    {title: '300', value: 300},
    {title: '300++', value: 301},
  ]
  const types = ['indoor', 'outdoor']
  const [type, setType] = useState('')
  const [guest, setGuest] = useState(0)

  return (
    <div className="w-full h-full flex-row flex items-center flex-wrap md:flex-nowrap justify-evenly gap-10 text-center bg-[#81CF8A] p-4 pb-8 md:mb-4 relative">
      <div className="flex-col flex text-center text-4xl">
        <div>1o1 wedding</div>
        <div>consultant</div>
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="text-2xl mb-4 uppercase">How many guests?</div>
        <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
          {guestNumbers.map((guestNumber, index) => (
            <button
              id={`${guestNumber}-button`}
              key={index}
              className={`${
                guestNumber.value === guest ? 'bg-primary text-white' : 'bg-white'
              } uppercase border border-black rounded-full py-1 px-10 text-lg`}
              onClick={() => setGuest(guestNumber.value === guest ? 0 : guestNumber.value)}
            >
              {guestNumber.title}
            </button>
          ))}
        </div>
        <div className="text-2xl my-4 uppercase">venue style</div>
        <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
          {types.map((typeElement, index) => (
            <button
              id={`${typeElement}-button`}
              key={index}
              className={`${
                typeElement === type ? 'bg-primary text-white' : 'bg-white'
              } uppercase border border-black rounded-full py-1 px-10 text-lg`}
              onClick={() => setType(typeElement === type ? '' : typeElement)}
            >
              {typeElement}
            </button>
          ))}
        </div>
        <PackageModal data={packages} filters={{guest, type}} />
      </div>
    </div>
  )
}
