import React from 'react'
import {
  Link,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import {NavbarMenu as INavbarMenu} from '@/lib/data/models/navbar'
import {navbarService} from '@/lib/data/navbar.service'

const MainLayout = async ({children}: {children: React.ReactNode}) => {
  const {data: navbar} = await navbarService.getNavbar().then((res) => res.data)

  return (
    <>
      <Navbar maxWidth="full" style={{background: '#BE1C2D', color: '#fff'}}>
        <NavbarContent className="flex" justify="start">
          <NavbarBrand>
            <Link className="flex justify-center text-white text-[18px] uppercase" href="/">
              <Image width={100} src={navbar.logo.mediaUrl} alt={navbar.logo.alt} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-6" justify="end">
          {navbar.menu.map((item: INavbarMenu, index: number) => (
            <>
              {index == 4 && <div className="h-[25px] w-[1px] bg-white" />}
              <NavbarItem key={index}>
                <Link
                  className="flex justify-center text-white text-[18px] uppercase cursor-pointer"
                  href={item.linkTo}
                >
                  {item.mediaUrl && (
                    <Image className="min-w-[20px]" src={item.mediaUrl} alt={item.alt} />
                  )}
                  {item.buttonTitle}
                </Link>
              </NavbarItem>
            </>
          ))}
        </NavbarContent>
        <NavbarContent className="sm:hidden flex p-2" justify="end">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>
        <NavbarMenu className="my-6 gap-6">
          {navbar.menu.map((item: INavbarMenu, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                className="flex justify-center text-[18px] uppercase cursor-pointer"
                href={item.linkTo}
              >
                {item.mediaUrl && (
                  <div className="bg-primary-1 px-4 py-2 rounded-full">
                    <Image className="min-w-[20px] " src={item.mediaUrl} alt={item.alt} />
                  </div>
                )}
                {item.buttonTitle}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </>
  )
}

export default MainLayout
