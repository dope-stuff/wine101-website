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
import {useEffect} from 'react'

const inter = Inter({subsets: ['latin']})

interface MainLayoutProps {
  children: React.ReactElement
  navbar: INavbar
  footer: Footer
}
const MainLayout = ({children, navbar, footer}: MainLayoutProps) => {
  useEffect(() => {
    /** set BookNowButton link to */
    if (navbar.bookNowLinkTo) {
      localStorage.setItem('bookNowLinkTo', navbar.bookNowLinkTo)
    }
  }, [navbar])

  return (
    <div className="h-screen flex flex-col">
      <Navbar maxWidth="full" style={{background: '#BE1C2D', color: '#fff'}}>
        <NavbarContent className="flex" justify="start">
          <NavbarBrand>
            <Link className="flex justify-center text-white text-lg uppercase" href="/">
              <Image width={100} src={navbar.logo.mediaUrl} alt={navbar.logo.alt} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {navbar.menu.map((item: INavbarMenu, index: number) => (
            <div key={index} className="gap-6 flex items-center">
              {index === 4 && <div className="h-[25px] w-[1px] bg-white" />}
              <NavbarItem>
                <Link
                  className="flex justify-center text-white text-lg uppercase cursor-pointer"
                  href={item.linkTo}
                  target={item.linkTo?.includes('https') ? "_blank" : ""}
                >
                  {item.mediaUrl && (
                    <Image className="min-w-[20px]" src={item.mediaUrl} alt={item.alt} />
                  )}
                  {item.buttonTitle}
                </Link>
              </NavbarItem>
            </div>
          ))}
        </NavbarContent>
        <NavbarContent className="sm:hidden flex p-2" justify="end">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>
        <NavbarMenu className="my-6 gap-6">
          {navbar.menu.map((item: INavbarMenu, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                className="flex justify-center text-lg uppercase cursor-pointer"
                href={item.linkTo}
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
      <div className="flex flex-row flex-wrap justify-between md:grid md:grid-cols-5 items-start py-4 px-6 mt-auto text-white bg-primary-1">
        <div className="md:h-full w-full flex items-center justify-center">
          <Image width={200} src={footer.logo.mediaUrl} alt={navbar.logo.alt} />
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-2xl mb-2">{footer.aboutTitle}</div>
          {footer.about.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className={`text-white ${inter.className}`}>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-2xl mb-2">{footer.serviceTitle}</div>
          {footer.service.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className={`text-white ${inter.className}`}>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-2xl mb-2">{footer.winesTitle}</div>
          {footer.wines.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className={`text-white ${inter.className}`}>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
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
