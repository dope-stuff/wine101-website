export interface NavbarMenu {
  alt: string
  buttonTitle?: string
  mediaUrl?: string
  linkTo?: string
}

export interface Navbar {
  title: string
  bookNowLinkTo: string
  logo: {
    alt: string
    mediaUrl: string
  }
  menu: NavbarMenu[]
}