'use client'
import FlasksIcon from '@/modules/common/images/flasks'

interface PopUpBoothButtonProps {
  title: string
  linkTo: string
}
export default function PopUpBoothButton({title, linkTo}: PopUpBoothButtonProps) {
  const onOpenLink = (linkto: string) => {
    window.open(linkto, '_blank')
  }
  return (
    <button
      className="uppercase border border-black bg-[#81CF8A] px-4 py-1 text-4xl rounded-full"
      onClick={() => onOpenLink(linkTo)}
    >
      {title}
    </button>
  )
}
