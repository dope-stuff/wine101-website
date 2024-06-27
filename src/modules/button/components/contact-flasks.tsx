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
      className="relative py-4 px-8 text-5xl md:text-6xl max-w-[650px] bg-[#81CF8A] border-[2px] border-black rounded-full"
      style={{backgroundColor: bgColor, color: textColor}}
      onClick={() => onOpenLink(linkTo)}
    >
      <FlasksIcon width={150} height={150} className="absolute left-[-4rem] bottom-[-3rem]" />
      {title}
      <FlasksIcon width={150} height={150} className="absolute right-[-4rem] top-[-3rem]" />
    </button>
  )
}
