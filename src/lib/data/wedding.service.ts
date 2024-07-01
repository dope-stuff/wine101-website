import {axios} from '@/lib/data'
import {StrapiPagination} from './models/strapi'
import {Wedding} from './models/common'

export const weddingService = {
  getPageData: () =>
    axios.get<StrapiPagination<Wedding>>('/wine-wedding?populate=*').then(({data}) => data),
}
