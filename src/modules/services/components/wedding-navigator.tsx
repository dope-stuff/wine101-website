'use client'
import {useRouter} from 'next/navigation'
import {scroller} from 'react-scroll'

export default function WeddingNavigator() {
  const router = useRouter()

  const panels = [
    {title: '101 wedding guide', href: 'guide'},
    {title: '', href: ''},
    {title: 'our package', href: 'package'},
    {title: '', href: ''},
    {title: 'quick consult', href: 'wedding-consult'},
    {title: '', href: ''},
    {title: 'our client’s review', href: 'reviews'},
  ]

  const handleClick = (href: string) => {
    scroller.scrollTo(href, {
      delay: 0,
      smooth: 'easeInOutQuart',
    })
    // Use replace to prevent adding a history entry
    router.replace(`/wedding/#${href}`)
  }

  return panels.map((panel, i) =>
    i % 2 !== 0 ? (
      i !== panels.length - 1 && <div key={i} className="w-[2px] h-6 bg-black hidden sm:flex" />
    ) : (
      <button
        id={`${panel.title}-button`}
        key={i}
        onClick={(e) => {
          e.preventDefault()
          handleClick(panel.href)
        }}
      >
        {panel.title}
      </button>
    )
  )
}
