'use client'
import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import {Inter} from 'next/font/google'
import {Footer, NavbarMenu as INavbarMenu, Navbar as INavbar} from '@/lib/data/models/navbar'
import {useEffect, useReducer} from 'react'

const inter = Inter({subsets: ['latin']})

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

  const renderNavbarItem = (item: INavbarMenu, index: number) => (
    <NavbarItem key={index}>
      <Link
        className="flex justify-center text-white text-lg uppercase cursor-pointer"
        href={item.linkTo}
        target={item.linkTo?.includes('https') ? '_blank' : ''}
      >
        {item.mediaUrl && <Image className="min-w-[20px]" src={item.mediaUrl} alt={item.alt} />}
        {item.buttonTitle}
      </Link>
    </NavbarItem>
  )

  const renderFooterLinks = (title: string, links: any[]) => (
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

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        maxWidth="full"
        style={{background: '#BE1C2D', color: '#fff'}}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={toggleMenuOpen}
      >
        <NavbarContent className="flex" justify="start">
          <NavbarBrand>
            <Link className="flex justify-center text-white text-lg uppercase" href="/">
              <Image width={100} src={navbar.logo.mediaUrl} alt={navbar.logo.alt} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {navbar.menu.map(renderNavbarItem)}
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
                    <Image className="min-w-[20px]" src={item.mediaUrl} alt={item.alt} />
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
          <Image width={200} src={footer.logo.mediaUrl} alt={navbar.logo.alt} />
        </div>
        {renderFooterLinks(footer.aboutTitle, footer.about)}
        {renderFooterLinks(footer.serviceTitle, footer.service)}
        {renderFooterLinks(footer.winesTitle, footer.wines)}
        <div className="flex flex-col w-full justify-center items-center">
          <div className="text-2xl mb-2">{footer.contact.heading}</div>
          <div className={`text-white ${inter.className}`}>{footer.contact.subheading}</div>
          <div className={`text-white ${inter.className}`}>{footer.contact.description}</div>
          <div className="flex flex-row items-center gap-2 mt-4">
            {footer.social.map((item, index: number) => (
              <Link href={item.linkTo} key={index}>
                <Image className="w-[40px] h-[40px]" src={item.mediaUrl} alt={item.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
