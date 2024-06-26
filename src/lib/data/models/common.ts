import {IMenu} from './navbar'

export interface IHeader {
  id: number
  alt: string
  heading: string
  subheading: string
  description: string
  buttonTitle: string
  linkTo: string
  mediaUrl: string
}

export interface IService {
  id: number
  alt: string
  heading: string
  subheading: string
  description: string
  buttonTitle: string
  linkTo: string
  mediaUrl: string
}

export interface IMetaTags {
  id: number
  title: string
  description: string
  keyword: string
}

export interface IHome {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  productsTitle: string
  servicesTitle: string
  metaTags: IMetaTags
  header: IHeader
  services: IService[]
}

export interface IEvent {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  detailsTitle: string
  metaTags: any
  banner: IMenu[]
  header: IMenu
  details: IMenu[]
}
