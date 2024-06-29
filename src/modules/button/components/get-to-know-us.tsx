'use client'
interface GetToKnowUsButtonProps {
  title: string
  linkTo: string
}
export default function GetToKnowUsButton({title, linkTo}: GetToKnowUsButtonProps) {
  const onOpenLink = (linkTo: string) => {
    window.open(linkTo, '_blank')
  }
  return (
    <button
      className="h-[50px] rounded-full pt-2 pb-2 px-6 text-2xl leading-5 text-white bg-primary-1 border-2 border-black"
      onClick={() => onOpenLink(linkTo)}
    >
      {title}
    </button>
  )
}
