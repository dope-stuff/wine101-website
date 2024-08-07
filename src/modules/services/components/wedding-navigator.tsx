'use client'
import {useRouter} from 'next/navigation'
import {useEffect, useRef} from 'react'

export default function WeddingNavigator() {
  const router = useRouter()
  const buttonRef = useRef(null)

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
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
    router.push(`/wedding/#${href}`)
  }

  return panels.map((panel, i) =>
    i % 2 !== 0 ? (
      i !== panels.length - 1 && <div key={i} className="w-[2px] h-6 bg-black hidden sm:flex" />
    ) : (
      <button
        id={`${panel.title}-button`}
        ref={buttonRef}
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
