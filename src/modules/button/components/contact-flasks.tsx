'use client'
import FlasksIcon from '@/modules/common/images/flasks'

interface ContactFlasksButtonProps {
  title: string
  linkTo: string
  bgColor?: string
  textColor?: string
}
export default function ContactFlasksButton({
  title,
  linkTo,
  bgColor,
  textColor,
}: ContactFlasksButtonProps) {
  const onOpenLink = (linkto: string) => {
    window.open(linkto, '_blank')
  }
  return (
    <button
      id="ContactFlasksButton"
      className="relative py-4 px-4 md:px-8 text-2xl md:text-3xl max-w-[250px] md:max-w-[360px] bg-[#81CF8A] border-[2px] border-black rounded-full"
      style={{backgroundColor: bgColor, color: textColor}}
      onClick={() => onOpenLink(linkTo)}
    >
      <FlasksIcon className="absolute left-[-1rem] bottom-[-1rem]" />
      {title}
      <FlasksIcon className="absolute right-[-1rem] top-[-1rem]" />
    </button>
  )
}
