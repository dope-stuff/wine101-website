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
  id: number;
  alt: string;
  heading: string;
  subheading: string;
  description: string;
  buttonTitle: string;
  linkTo: string;
  mediaUrl: string;
}

export interface IFooter {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  aboutTitle: string;
  serviceTitle: string;
  winesTitle: string;
  logo: IMenu;
  about: IMenu[];
  service: IMenu[];
  wines: IMenu[];
  contact: IMenu;
  social: IMenu[];
}
