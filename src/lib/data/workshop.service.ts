import {axios} from '@/lib/data'
import {StrapiParams, StrapiPagination} from '@/lib/data/models/strapi'
import {Workshop} from './models/workshop'

export const workshopService = {
  get: (params: StrapiParams) =>
    axios.get<StrapiPagination<Workshop[]>>('/workshops', {params}).then(({data}) => data),
  getWorkshop: () =>
    axios.get('/workshops?pagination[limit]=10&pagination[withCount]=false').then(({data}) => data),
}
