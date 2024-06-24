import {axios} from '@/lib/data'
import {Navbar, Footer} from '@/lib/data/models/navbar'

export const navbarService = {
  getNavbar: () => axios.get<{data: Navbar}>('/wine-navbar?populate=*').then((res) => res.data),
  getFooter: () => axios.get<{data: Footer}>('/wine-footer?populate=*').then((res) => res.data),
}
