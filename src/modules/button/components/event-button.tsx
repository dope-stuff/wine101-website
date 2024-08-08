'use client'
import FlasksIcon from '@/modules/common/images/flasks'

interface EventContactButtonProps {
  title: string
  linkTo: string
  bgColor?: string
  textColor?: string
}
export default function EventContactButton({
  title,
  linkTo,
  bgColor,
  textColor,
}: EventContactButtonProps) {
  const onOpenLink = (linkto: string) => {
    window.open(linkto, '_blank')
  }
  return (
    <div className="flex flex-row relative">
      <FlasksIcon className="mt-auto" />
      <div className="flex-col flex gap-2 items-center">
        <div className='text-2xl'>1o1 service</div>
        <button
          id="EventContactButton"
          className="relative pt-2 pb-3 px-4 md:px-8 text-2xl md:text-3xl max-w-[250px] md:max-w-[360px] bg-[#81CF8A] border-[2px] border-black rounded-full"
          style={{backgroundColor: bgColor, color: textColor}}
          onClick={() => onOpenLink(linkTo)}
        >
          Contact Us
        </button>
      </div>
      <FlasksIcon className='mt-2' />
    </div>
  )
}
