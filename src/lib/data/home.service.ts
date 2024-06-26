import {axios} from '@/lib/data'
import {IService} from '@/lib/data/models/common'

interface HomePage {
  productsTitle: string
  servicesTitle: string
  header: {
    heading: string
    subheading: string
    buttonTitle: string
  }
  services: IService[]
}

export const homeService = {
  get: () => axios.get<{data: HomePage}>('/wine-home?populate=*').then(({data}) => data),
}
