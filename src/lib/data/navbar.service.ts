import {axios} from '@/lib/data'
import {Navbar, Footer} from '@/lib/data/models/navbar'
import {StrapiParams} from './models/strapi'

export const navbarService = {
  getNavbar: (params: StrapiParams) =>
    axios.get<{data: Navbar}>('/wine-navbar', {params}).then((res) => res.data),
  getFooter: (params: StrapiParams) =>
    axios.get<{data: Footer}>('/wine-footer', {params}).then((res) => res.data),
}
