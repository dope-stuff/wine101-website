import {axios} from '@/lib/data'

export const weddingService = {
  getWedding: () =>
    axios.get('/wine-wedding?populate=*').then(({data}) => data),
}
