import {axios} from '@/lib/data'

export const workshopService = {
  get: (event_date: string) =>
    axios
      .get(
        `/workshops?filters[event_date][$gte]=${event_date}&pagination[limit]=1&pagination[withCount]=false`
      )
      .then(({data}) => data),
}
