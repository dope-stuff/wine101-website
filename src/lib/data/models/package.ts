export interface Package {
  id: number
  name: string
  minPax: number
  maxPax: number
  locationType: string
  notes: string
  sparklingWineQuantity: number
  whiteWineQuantity: number
  roseWineQuantity: number
  redWineQuantity: number
  price: number
  addonPrice: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  buttonTitle: string
  buttonLinkTo: string
  eventType: string
}
