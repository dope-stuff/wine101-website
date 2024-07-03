import {axios} from '@/lib/data'
import {PopUpBooth} from './models/common'
import {StrapiPagination, StrapiParams} from './models/strapi'

export const popUpBoothService = {
  getPageData: (params: StrapiParams) =>
    axios.get<StrapiPagination<PopUpBooth>>('/wine-pop-up', {params}).then(({data}) => data),
}
