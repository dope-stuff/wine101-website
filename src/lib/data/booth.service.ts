import {axios} from '@/lib/data'

export const popUpBoothService = {
  getPopUpBooth: () =>
    axios.get('/wine-pop-up?populate=*').then(({data}) => data),
}
