import {ServiceResponse} from './common'

export interface Workshop {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  description: string
  event_date: string
  number_of_guests: number
  price: number
  location: string
  gallery: string[]
  posters: string
  videos: string
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
