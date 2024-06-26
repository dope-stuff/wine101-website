import {axios} from '@/lib/data'

export const homeService = {
  get: () => axios.get('/wine-home?populate=*').then(({data}) => data),
}
