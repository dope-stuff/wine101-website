import {axios} from '@/lib/data'
import { PopUpBooth } from './models/common'
import { StrapiPagination } from './models/strapi'

export const popUpBoothService = {
  getPageData: () =>
    axios.get<StrapiPagination<PopUpBooth>>('/wine-pop-up?populate=*').then(({data}) => data),
}
