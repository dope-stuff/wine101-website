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
  wine_list: {
    id: number
    name: string
    display_name: string
    grapes: string
    redirect_url: string
    image_url: string
  }[]
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

export interface WineWorkshop extends ServiceResponse {
  testimonials: Testimonials[]
}
