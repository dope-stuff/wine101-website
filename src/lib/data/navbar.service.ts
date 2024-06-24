import {axios} from '@/lib/data'
import {Navbar} from '@/lib/data/models/navbar'

export const navbarService = {
  getNavbar: () => axios.get<{data: Navbar}>('/wine-navbar?populate=*'),
  getFooter: () => axios.get('/wine-footer?populate=*'),
}
