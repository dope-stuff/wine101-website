import {axios} from '@/lib/data'
import Axios from 'axios'
import {WineWorkshop, Workshop, WorkShopProfile} from '@/lib/data/models/workshop'
import {StrapiParams, StrapiPagination} from '@/lib/data/models/strapi'

export const workshopService = {
  get: (params: StrapiParams) =>
    axios
      .get<StrapiPagination<Workshop[]>>('/workshops', {params})
      .then((response) => response.data),
  getOne: (params: StrapiParams, id: number) =>
    axios
      .get<StrapiPagination<Workshop>>(`/workshops/${id}`, {params})
      .then((response) => response.data),
  getPageData: (params: StrapiParams) =>
    axios
      .get<StrapiPagination<WineWorkshop>>('/wine-workshop', {params})
      .then((response) => response.data),
  getProfile: (params: any) =>
    Axios.get<StrapiPagination<WorkShopProfile[]>>(
      'https://backend.petswayhome.co/api/workshop-profiles',
      {params}
    ).then((response) => response.data),
}
