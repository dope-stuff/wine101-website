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

export interface IMenu {
  id: number
  alt: string
  heading: string
  subheading: string
  description: string
  buttonTitle: string
  linkTo: string
  mediaUrl: string
  maxWidth?: string | number
  image?: JSX.Element
}

export interface IFooter {
  aboutTitle: string
  serviceTitle: string
  winesTitle: string
  logo: {
    alt: string
    mediaUrl: string
  }
  about: {buttonTitle: string; linkTo: string}[]
  service: {buttonTitle: string; linkTo: string}[]
  wines: {buttonTitle: string; linkTo: string}[]
  contact: {heading: string; subheading: string; description: string}
  social: {buttonTitle: string; linkTo: string; mediaUrl: string; alt: string}[]
}
export interface Footer {
  aboutTitle: string
  serviceTitle: string
  winesTitle: string
  logo: {
    alt: string
    mediaUrl: string
  }
  about: {buttonTitle: string; linkTo: string}[]
  service: {buttonTitle: string; linkTo: string}[]
  wines: {buttonTitle: string; linkTo: string}[]
  contact: {heading: string; subheading: string; description: string}
  social: {buttonTitle: string; linkTo: string; mediaUrl: string; alt: string}[]
}
