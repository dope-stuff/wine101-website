import {Inter} from 'next/font/google'
import Link from 'next/link'
import {NavbarMenu as INavbarMenu} from '@/lib/data/models/navbar'
import {Image, NavbarItem} from '@nextui-org/react'

const inter = Inter({subsets: ['latin'], display: 'swap'})

export const RenderFooterLinks = (title: string, links: any[]) => (
  <div className="flex-1 flex flex-col justify-start items-start px-4">
    <div className="text-2xl mb-2">{title}</div>
    {links.map((item, index: number) => (
      <Link
        href={item.linkTo}
        key={index}
        className={`whitespace-nowrap text-white ${inter.className}`}
      >
        {item.buttonTitle}
      </Link>
    ))}
  </div>
)

export const RenderNavbarItem = (item: INavbarMenu, index: number) => (
  <NavbarItem key={index}>
    <Link
      className={`flex justify-center text-white text-lg uppercase ${inter.className}`}
      href={item.linkTo || '#'}
      target={item.linkTo?.includes('https') ? '_blank' : ''}
    >
      {item.mediaUrl && (
        <Image className="min-w-[20px]" src={item.mediaUrl} alt={item.alt} loading="lazy" />
      )}
      {item.buttonTitle}
    </Link>
  </NavbarItem>
)
