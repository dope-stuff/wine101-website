export interface StrapiParams {
  filters?: any
  populate?: any
  pagination?: {
    page?: number
    pageSize?: number
    withCount?: boolean
  }
}

export interface StrapiPagination<T> {
  data: T
  meta: {}
}
