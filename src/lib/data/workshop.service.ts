import {axios} from '@/lib/data'

export const workshopService = {
  getWorkshopEvent: (event_date: string) =>
    axios
      .get(
        `/workshops?filters[event_date][$gte]=${event_date}&pagination[limit]=1&pagination[withCount]=false`
      )
      .then(({data}) => data),
  getWorkshop: () =>
    axios.get('/workshops?pagination[limit]=10&pagination[withCount]=false').then(({data}) => data),
}
