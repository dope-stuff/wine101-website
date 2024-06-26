import {axios} from '@/lib/data'

export const eventService = {
  getEvent: () =>
    axios.get('/wine-event?populate=*').then(({data}) => data),
}
