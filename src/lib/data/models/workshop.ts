import {ServiceResponse} from './common'

export interface Workshop {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  description: string
  eventDate: string
  numberOfGuests: number
  price: number
  location: string
  gallery: string
  posters: string
  videos: string
  wineList: WorkshopProduct[]
}

export interface Testimonials {
  id: number
  alt: string
  heading: string
  subheading: string
  description: string
  buttonTitle: string
  linkTo: string
  mediaUrl: string
}

export interface WorkshopProduct {
  id: number
  itemName: string
  itemDisplayName: string
  glassPrice: number
  bottlePrice: number
  imageUrl: string
  category: string
  shortDescription: string
  isSoldByGlass: boolean
  grapes: string
  country: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  linkTo: string
}

export interface WineWorkshop extends ServiceResponse {
  testimonials: Testimonials[]
}

export interface Perferred {
  id: number
  acidity: string
  body: string
  sweetness: string
  tannins: string
}
export interface WorkShopProfile {
  id: number
  guest_number: number
  guest_name: string
  guest_nickname: string
  guest_email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  top_grape: string
  top_wine: string
  favorite_wine: string
  guest_preferred: Perferred
  workshop: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    description: string
    eventDate: string
    numberOfGuests: number
    price: number
    location: string
    gallery: string
    posters: string
    videos: string
    wineList: WorkshopProduct[]
  }
}
