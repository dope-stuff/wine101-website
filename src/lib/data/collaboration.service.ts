import {axios} from '@/lib/data'
import {ServiceResponse} from './models/common'
import {StrapiPagination, StrapiParams} from './models/strapi'

export const collaborationService = {
  getPageData: (params: StrapiParams) =>
    axios
      .get<StrapiPagination<ServiceResponse>>('/wine-collaboration', {params})
      .then(({data}) => data),
}
