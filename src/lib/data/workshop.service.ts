import {axios} from '@/lib/data'
import {Workshop} from '@/lib/data/models/workshop'
import {StrapiParams, StrapiPagination} from '@/lib/data/models/strapi'

export const workshopService = {
  get: (params: StrapiParams) =>
    axios.get<StrapiPagination<Workshop[]>>('/workshops', {params}).then(({data}) => data),
  getPageData: (params: StrapiParams) =>
    axios.get('/wine-workshop', {params}).then(({data}) => data),
}
