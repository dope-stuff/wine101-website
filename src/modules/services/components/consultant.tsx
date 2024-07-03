'use client'

import {useState} from 'react'

export default function Consultant() {
  const guestNumbers = ['150', '200', '250', '300', '300++']

  const [type, setType] = useState<string>()
  const [guest, setGuest] = useState<string>()

  const onConsult = () => {
    console.log(guest, type)
  }

  return (
    <div className="w-full h-full flex-row flex items-center flex-wrap md:flex-nowrap justify-evenly gap-10 text-center bg-[#81CF8A] p-4 pb-8 mb-10 md:mb-4 relative">
      <div className="flex-col flex text-center text-4xl">
        <div>1o1 wedding</div>
        <div>consultant</div>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <div className="text-2xl mb-4 uppercase">How many guests?</div>
        <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
          {guestNumbers.map((g, i) => (
            <button
              key={i}
              className="bg-white uppercase border border-black rounded-full py-1 px-10 text-lg"
              onClick={() => setGuest(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="text-2xl mb-4 uppercase">venue style</div>
        <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
          <button
            className="bg-white uppercase border border-black rounded-full py-1 px-10 text-lg"
            onClick={() => setType('indoor')}
          >
            indoor
          </button>
          <button
            className="bg-white uppercase border border-black rounded-full py-1 px-10 text-lg"
            onClick={() => setType('outdoor')}
          >
            outdoor
          </button>
        </div>
        <button
          className="uppercase border border-black bg-primary px-4 py-3 text-white text-3xl rounded-full absolute bottom-[-2rem]"
          onClick={onConsult}
        >
          consult
        </button>
      </div>
    </div>
  )
}
