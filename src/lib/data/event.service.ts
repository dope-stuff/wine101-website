import {axios} from '@/lib/data'
import {Event} from './models/event'
import {StrapiPagination, StrapiParams} from './models/strapi'
import {ServiceResponse} from './models/common'

export const eventService = {
  get: (params: StrapiParams) =>
    axios.get<StrapiPagination<Event[]>>('/events', {params}).then((res) => res.data),
  getOne: (params: StrapiParams, id: number) =>
    axios.get<StrapiPagination<Event>>(`/events/${id}`, {params}).then((res) => res.data),
  getPageData: () =>
    axios.get<StrapiPagination<ServiceResponse>>('/wine-event?populate=*').then((res) => res.data),
}
