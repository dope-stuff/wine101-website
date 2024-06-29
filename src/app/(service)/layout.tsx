'use client'
import Link from 'next/link'
import {Navbar} from '@nextui-org/react'
import {usePathname} from 'next/navigation'
import PouringWineIcon from '@/modules/common/images/pouring-wine'

const Headers = () => {
  const pathname = usePathname()

  const tabs = [
    {name: 'wine profile workshop', path: 'workshop'},
    {name: 'wine event / private event', path: 'private-event'},
    {name: 'collaboration', path: 'collaboration'},
    {name: 'wine wedding', path: 'wedding'},
    {name: 'pop-up booth', path: 'pop-up'},
  ]
  return (
    <div className="max-w-[2040px] flex flex-row w-full justify-between mx-auto px-6 py-2">
      {tabs.map((tab, i) => (
        <div key={i}>
          <Link href={`/${tab.path}`} className="flex-row flex items-center gap-2 text-center">
            <PouringWineIcon />
            <div
              className={`max-w-[150px] font-bold leading-4 uppercase min-w-[100px] ${
                pathname.toLowerCase().includes(tab.path.toLowerCase())
                  ? 'text-black'
                  : 'text-primary'
              }`}
            >
              {tab.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default function ServiceLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col">
      <Headers />
      {children}
    </div>
  )
}
