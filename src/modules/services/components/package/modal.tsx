'use client'

import {useEffect, useState} from 'react'
import {Button, Modal, ModalBody, ModalContent, useDisclosure} from '@nextui-org/react'
import {tanHarmoni, ukijqolYantu} from '@/styles/fonts'
import BottleOfWineIcon from '@/modules/common/images/bottle-of-wine'
import {Package} from '@/lib/data/models/package'
import FlasksIcon from '@/modules/common/images/flasks'
import WaitressServeIcon from '@/modules/common/images/waitress-serve'

interface PackageModalProps {
  data: Package[]
  filters: {guest: number; type: string}
}

export default function PackageModal({data, filters}: PackageModalProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [pageData, setPageData] = useState<Package>()

  useEffect(() => {
    if (filters && data)
      setPageData(
        data.find(
          (e) =>
            e.minPax <= filters.guest &&
            e.maxPax >= filters.guest &&
            e.locationType.toLowerCase() === filters.type.toLowerCase()
        )
      )
  }, [data, filters])

  const wineList = [
    {name: 'Sparkling', quantity: pageData?.sparklingWineQuantity},
    {name: 'Rose', quantity: pageData?.roseWineQuantity},
    {name: 'White', quantity: pageData?.whiteWineQuantity},
    {name: 'Red', quantity: pageData?.redWineQuantity},
  ]

  const onOpenNewTab = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <>
      <Button
        className="uppercase border border-black bg-primary px-4 py-3 h-[60px] text-white text-2xl rounded-full absolute bottom-[-2rem]"
        onPress={onOpen}
      >
        consult
      </Button>
      <Modal size="2xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="border-dashed border-5 border-black">
          <ModalBody className='px-4 sm:px-6 h-full'>
            <div className="flex flex-col items-center text-xl pb-4">
              <div className="relative w-full py-4">
                <div className={`text-4xl text-center ${ukijqolYantu.className}`}>Wine1O1</div>
                <BottleOfWineIcon
                  width={40}
                  hanging={80}
                  className="max-h-[100px] right-4 bottom-[-3rem] absolute hidden sm:flex"
                />
              </div>
              {pageData ? (
                <div className="w-full flex-col flex items-center text-[18px] gap-4">
                  <div className="w-full flex-row flex flex-wrap justify-evenly gap-4">
                    <div className="w-[40%] min-w-[150px] flex-col flex items-center h-full relative">
                      <div className="uppercase text-3xl">Package</div>
                      <div
                        className={`text-[140px] leading-[160px] uppercase ${tanHarmoni.className}`}
                      >
                        {pageData.name}
                      </div>
                      <div className="uppercase text-3xl mt-[-20px]">{pageData.locationType}</div>
                      <FlasksIcon width={50} height={50} className="absolute right-0 bottom-8 hidden sm:flex" />
                    </div>
                    <div className="flex-1 min-w-[150px] flex-col items-center text-center sm:text-start flex gap-2 sm:gap-4">
                      <div>
                        <span className="align-middle">~</span>{pageData.maxPax} Guests
                        <div>
                          {wineList.reduce((acc, cur) => (acc += cur.quantity || 0), 0)} bottles of
                          wine
                        </div>
                        <div className="text-sm">{pageData.notes}</div>
                      </div>
                      <div className="text-sm text-start">
                        {wineList.map((e, index) => (
                          e.quantity && e.quantity > 0? 
                          <div key={index} className="flex-row flex items-center gap-2 sm:gap-4">
                            <div className="w-[80px] sm:w-[100px] uppercase">{e.name}</div>
                            <div className='whitespace-nowrap'>{e.quantity} Bottles</div>
                          </div> : null
                        ))}
                      </div>
                      <div className="w-full flex-col flex items-center rounded-full py-1 px-2 text-lg text-white bg-primary-1 border-4 border-black">
                        <div className="text-xl">{pageData.price.toLocaleString()}</div>
                        <div className="text-sm mt-[-5px]">THB</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-black w-3/4" />
                  <div className="w-full flex-row flex flex-wrap justify-evenly gap-4">
                    <div className="w-[40%] min-w-[150px] flex-col flex items-center text-center gap-4 h-full relative">
                      <FlasksIcon width={50} height={50} className="absolute left-0 top-2 hidden sm:flex" />
                      <div className="uppercase text-3xl">Add-On</div>
                      <div
                        className={`text-[40px] sm:text-[50px] leading-[40px] sm:leading-[50px] max-w-[200px] uppercase ${tanHarmoni.className}`}
                      >
                        Wine corner
                      </div>
                    </div>
                    <div className="flex-1 min-w-[150px] flex-col text-center sm:text-start flex gap-4 text-sm sm:text-md">
                      <ul style={{listStyle: 'disc'}}>
                        <li>4 hours (half day) exclude setup</li>
                        <li>Bride & Groom wine glass team</li>
                        <li>Wine tasting activity for guest</li>
                        <li>Corner decoration with Bride&Groom Poster</li>
                      </ul>
                      <div className="relative flex flex-row w-full">
                        <div className="w-full flex-col flex items-center rounded-full py-1 px-2 text-lg text-white bg-primary-1 border-4 border-black">
                          <div className="text-xl">{pageData.addonPrice.toLocaleString()}</div>
                          <div className="text-sm mt-[-5px]">THB</div>
                        </div>
                        <WaitressServeIcon
                          width={70}
                          height={100}
                          className="absolute left-[-4.5rem] bottom-[-1.5rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="whitespace-nowrap py-4 px-8 bg-black text-white text-2xl mt-4"
                    onClick={() => onOpenNewTab(pageData.buttonLinkTo)}
                  >
                    {pageData.buttonTitle}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="py-2 text-lg">Looking for a Customized Package?</div>
                  <div className="py-4 text-sm">
                    Please contact us for a customized package. Let us help you on what you may need for your special event!
                  </div>
                  <button
                    className="whitespace-nowrap py-4 px-8 bg-black text-white text-2xl mt-4"
                    onClick={() => onOpenNewTab('https://line.me/R/ti/p/@839lfzqn')}
                  >
                    Let&apos;s Discuss!
                  </button>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
