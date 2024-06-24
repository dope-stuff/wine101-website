import {
  Button,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import dayjs from 'dayjs'
import {useEffect, useRef} from 'react'
import {IWorkshop} from '@/lib/data/models/workshop'
import FlasksIcon from '@/modules/common/images/flasks'

type EventDialogProps = {
  data: IWorkshop
  time: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}
export default function EventDialog({data, time}: EventDialogProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click()
    }
  }, [])
  return (
    <>
      <Button ref={buttonRef} onPress={onOpen} className="hidden">
        Open Modal
      </Button>
      <Modal
        size="4xl"
        hideCloseButton
        className="border-8 border-dashed border-black rounded-none"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-center text-[60px] font-UQY flex flex-col relative">
                Wine1O1
                <FlasksIcon className="absolute right-10 top-10" />
              </ModalHeader>
              <ModalBody className="text-[50px] relative p-0 gap-4">
                <div className="text-center text-[28px]">
                  The world of wine won’t be complicated anymore!
                </div>
                <div className="flex-row flex justify-center ml-[-105px]">
                  <Image
                    width={105}
                    removeWrapper
                    src="https://i.ibb.co/tMh9SpM/wine-101-lady-server.webp"
                    alt="wine-101-lady-server"
                  />
                  <div className="flex-col flex text-center whitespace-nowrap">
                    <div>join our next workshop</div>
                    <div className="text-[32px]">
                      {dayjs(data.event_date).format('DD MMM YYYY')}
                    </div>
                  </div>
                </div>
                <div className="w-[75%] mx-auto bg-primary flex-row flex justify-evenly items-center gap-10 text-[24px] text-center border-2 border-black text-white rounded-full">
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
                <div className="relative flex-row flex justify-center py-10">
                  <Link className="bg-black text-white mx-auto py-2 px-4 text-[32px]">BOOK!</Link>
                  <FlasksIcon className="absolute left-[30%] top-2" />
                  <Image
                    className="absolute bottom-0 right-0"
                    width={110}
                    removeWrapper
                    src="https://i.ibb.co/6wsS9CL/wine-101-hand-pickup-wine-glass.webp"
                    alt="wine-101-lady-server"
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
