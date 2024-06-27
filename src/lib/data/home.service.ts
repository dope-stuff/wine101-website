import {axios} from '@/lib/data'
import {IService} from '@/lib/data/models/common'
import {IMenu} from './models/navbar'

interface HomePage {
  productsTitle: string
  servicesTitle: string
  header: IMenu
  services: IService[]
}

export const homeService = {
  get: () => axios.get<{data: HomePage}>('/wine-home?populate=*').then(({data}) => data),
}
