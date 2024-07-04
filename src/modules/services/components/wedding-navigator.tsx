import {Link} from '@nextui-org/react'

export default function WeddingNavigator() {
  const panels = [
    {title: '101 wedding guide', href: 'guide'},
    {title: ''},
    {title: 'our package', href: 'package'},
    {title: ''},
    {title: 'quick consult', href: 'consult'},
    {title: ''},
    {title: 'our client’s review', href: 'reviews'},
  ]
  return panels.map((panel, i) =>
    i % 2 !== 0 ? (
      i !== panels.length - 1 && <div key={i} className="w-[2px] h-6 bg-black" />
    ) : (
      <Link key={i} href={`/wedding/#${panel.href}`}>
        {panel.title}
      </Link>
    )
  )
}
