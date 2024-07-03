import {axios} from '@/lib/data'
import {StrapiPagination, StrapiParams} from './models/strapi'
import {Wedding} from './models/common'

export const weddingService = {
  getPageData: (params: StrapiParams) =>
    axios.get<StrapiPagination<Wedding>>('/wine-wedding', {params}).then(({data}) => data),
}
