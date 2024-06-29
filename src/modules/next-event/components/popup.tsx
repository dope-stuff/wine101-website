import dayjs from 'dayjs'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {Modal, ModalBody, ModalContent, useDisclosure} from '@nextui-org/react'

interface NextEventPopupProps {
  date: string
  countDown: {days: string; hours: string; minutes: string; seconds: string}
}

export default function NextEventPopup({date, countDown}: NextEventPopupProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  useEffect(() => {
    onOpen()

    const linkto = localStorage.getItem('bookNowLinkTo')
    if (linkto) {
      setBookNowLinkTo(linkto)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [bookNowLinkTo, setBookNowLinkTo] = useState('')

  const onBookNow = () => {
    window.open(bookNowLinkTo, '_blank')
  }

  return (
    <>
      <Modal hideCloseButton backdrop="blur" size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="border-dashed border-5 border-black">
          <ModalBody>
            <div className="relative flex flex-col items-center text-2xl pb-8 gap-4">
              <Image width={140} height={140} src="/images/common/logo-dark.svg" alt="" />
              <Image
                width={40}
                height={40}
                className="absolute right-0 mt-[60px]"
                src="/images/common/glitter-1.svg"
                alt=""
              />
              <div>The world of wine won`t be complicated anymore!</div>
              <div className="relative w-full flex flex-col items-center">
                <div className="text-4xl">join our next workshop</div>
                <div>{dayjs(date).format('DD MMM YYYY')}</div>
                <Image
                  width={80}
                  height={80}
                  className="absolute left-0"
                  src="/images/common/waiter-1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-row gap-10 my-4 py-4 px-10 rounded-full text-white bg-primary-1 border-4 border-black">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl">{countDown.days}</div>
                  <div className="text-2xl">DAY</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl">{countDown.hours}</div>
                  <div className="text-2xl">HOUR</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl">{countDown.minutes}</div>
                  <div className="text-2xl">MINUTE</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl">{countDown.seconds}</div>
                  <div className="text-2xl">SECOND</div>
                </div>
              </div>
              <div className="relative w-full flex flex-col items-center">
                <Image
                  width={40}
                  height={40}
                  className="absolute mt-[-10px] mr-[180px]"
                  src="/images/common/glitter-1.svg"
                  alt=""
                />
                <button
                  className="h-[50px] pt-2 pb-2 px-6 text-2xl leading-8 text-white bg-black"
                  onClick={onBookNow}
                >
                  Book!
                </button>
                <Image
                  width={100}
                  height={100}
                  className="absolute right-0 mt-[-50px] mr-[-24px]"
                  src="/images/common/wine-1.svg"
                  alt=""
                />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
