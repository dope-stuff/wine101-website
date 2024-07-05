import {axios} from '@/lib/data'
import {StrapiPagination, StrapiParams} from './models/strapi'
import {Package} from './models/package'

export const packageService = {
  getPageData: (params: StrapiParams) =>
    axios.get<StrapiPagination<Package[]>>('/packages', {params}).then(({data}) => data),
}
