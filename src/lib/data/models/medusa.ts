export interface MedusaParams {
  expand?: string
  limit?: number
  collection_id?: string[]
}

export interface MedusaPagination {
  count: number
  offset: number
  limit: number
}
