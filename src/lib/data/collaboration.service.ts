import {axios} from '@/lib/data'
import { ServiceResponse } from './models/common'
import { StrapiPagination } from './models/strapi'

export const collaborationService = {
  getPageData: () =>
    axios.get<StrapiPagination<ServiceResponse>>('/wine-collaboration?populate=*').then(({data}) => data),
}
