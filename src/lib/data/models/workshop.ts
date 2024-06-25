export interface IWorkshopEvent {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  description: string
  event_date: string
  number_of_guests: number
  price: number
  location: string
}

export interface IWorkshop {
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
