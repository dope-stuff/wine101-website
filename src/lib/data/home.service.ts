import {axios} from '@/lib/data'
import {IService} from '@/lib/data/models/common'
import {IMenu} from './models/navbar'
import {StrapiParams} from './models/strapi'

interface HomePage {
  productsTitle: string
  servicesTitle: string
  header: IMenu
  services: IService[]
}

export const homeService = {
  get: (params: StrapiParams) =>
    axios.get<{data: HomePage}>('/wine-home', {params}).then(({data}) => data),
}
