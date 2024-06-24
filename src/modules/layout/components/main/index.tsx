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
import {navbarService} from '@/lib/data/navbar.service'
import {NavbarMenu as INavbarMenu} from '@/lib/data/models/navbar'

const MainLayout = async ({children}: {children: React.ReactNode}) => {
  const [{data: navbar}, {data: footer}] = await Promise.all([
    navbarService.getNavbar(),
    navbarService.getFooter(),
  ])
  console.log('[E] ~ MainLayout ~ footer:', footer)

  return (
    <div className="w-screen h-screen flex flex-col">
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
      <div className="grid grid-cols-5 py-4 px-6 mt-auto text-white bg-primary-1">
        <Image src={footer.logo.mediaUrl} alt={navbar.logo.alt} />
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-[24px]">{footer.aboutTitle}</div>
          {footer.about.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className='text-white font-inter'>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-[24px]">{footer.serviceTitle}</div>
          {footer.service.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className='text-white font-inter'>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <div className="text-[24px]">{footer.winesTitle}</div>
          {footer.wines.map((item, index: number) => (
            <Link href={item.linkTo} key={index} className='text-white font-inter'>
              {item.buttonTitle}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start"></div>
      </div>
    </div>
  )
}

export default MainLayout
