'use client'
import Link from 'next/link'
import {Navbar} from '@nextui-org/react'
import {usePathname} from 'next/navigation'
import PouringWineIcon from '@/modules/common/images/pouring-wine'

const Headers = () => {
  const pathname = usePathname()

  const tabs = [
    {name: 'wine profile workshop', path: 'wine-profile-workshop'},
    {name: 'wine event / private event', path: 'wine-event'},
    {name: 'collaboration', path: 'collaboration'},
    {name: 'wine wedding', path: 'wine-wedding'},
    {name: 'pop-up booth', path: 'booth'},
  ]
  return (
    <Navbar maxWidth="full" style={{background: 'white'}}>
      <div className="flex flex-row w-full justify-between p-2">
        {tabs.map((tab, i) => (
          <div key={i}>
            <Link
              // href="/"
              href={`/service/${tab.path}`}
              className="flex-row flex items-center gap-2 text-center"
            >
              <PouringWineIcon />
              <div
                className={`max-w-[150px] font-bold text-[18px] leading-4 uppercase ${
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
    </Navbar>
  )
}

export default function ServiceLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Headers />
      {children}
    </div>
  )
}
