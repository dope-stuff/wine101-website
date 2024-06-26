import {axios} from '@/lib/data'

export const collaborationService = {
  getCollaboration: () =>
    axios.get('/wine-collaboration?populate=*').then(({data}) => data),
}
