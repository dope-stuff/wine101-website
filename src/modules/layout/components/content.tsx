'use client'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
} from '@nextui-org/react'
import {Inter} from 'next/font/google'
import {Footer, NavbarMenu as INavbarMenu, Navbar as INavbar} from '@/lib/data/models/navbar'
import {useEffect, useReducer} from 'react'
import {RenderFooterLinks, RenderNavbarItem} from './navigation-item'

const inter = Inter({subsets: ['latin'], display: 'swap'})

interface MainLayoutProps {
  children: React.ReactElement
  navbar: INavbar
  footer: Footer
}

const MainLayout = ({children, navbar, footer}: MainLayoutProps) => {
  const [isMenuOpen, toggleMenuOpen] = useReducer((isOpen) => !isOpen, false)

  useEffect(() => {
    if (navbar.bookNowLinkTo) {
      localStorage.setItem('bookNowLinkTo', navbar.bookNowLinkTo)
    }
  }, [navbar])

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={toggleMenuOpen}
        className="bg-primary text-white"
      >
        <NavbarContent className="flex" justify="start">
          <NavbarBrand>
            <Link className="flex justify-center text-white text-lg uppercase" href="/">
              <Image
                loading="lazy"
                width={100}
                height={65}
                src={navbar.logo.mediaUrl}
                alt={navbar.logo.alt || ''}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {navbar.menu.map(RenderNavbarItem)}
        </NavbarContent>
        <NavbarContent className="sm:hidden flex p-2" justify="end">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>
        <NavbarMenu className="gap-6">
          {navbar.menu.map((item: INavbarMenu, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                className="flex justify-center text-lg uppercase cursor-pointer"
                href={item.linkTo}
                onClick={toggleMenuOpen}
                target={item.linkTo?.includes('https') ? '_blank' : ''}
              >
                {item.mediaUrl && (
                  <div className="bg-primary-1 px-4 py-2 rounded-full">
                    <Image
                      removeWrapper
                      className="min-w-[20px]"
                      src={item.mediaUrl}
                      alt={item.alt || ''}
                      loading="lazy"
                    />
                  </div>
                )}
                {item.buttonTitle}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
      <div className="flex flex-row flex-wrap justify-between md:grid md:grid-cols-5 items-start py-4 px-6 gap-4 mt-auto text-white bg-primary-1 z-10">
        <div className="md:h-full w-full flex items-center justify-center">
          <Image
            width={200}
            height={65}
            src={footer.logo.mediaUrl}
            alt={navbar.logo.alt}
            loading="lazy"
          />
        </div>
        {RenderFooterLinks(footer.aboutTitle, footer.about)}
        {RenderFooterLinks(footer.serviceTitle, footer.service)}
        {RenderFooterLinks(footer.winesTitle, footer.wines)}
        <div className="flex flex-col w-full justify-center items-center">
          <div className="text-2xl mb-2">{footer.contact.heading}</div>
          <div className={`text-white ${inter.className}`}>{footer.contact.subheading}</div>
          <div className={`text-white ${inter.className}`}>{footer.contact.description}</div>
          <div className="flex flex-row items-center gap-2 mt-4">
            {footer.social.map((item, index: number) => (
              <Link href={item.linkTo} key={index}>
                <Image
                  width={40}
                  height={40}
                  loading="lazy"
                  src={item.mediaUrl}
                  alt={item.alt || ''}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
