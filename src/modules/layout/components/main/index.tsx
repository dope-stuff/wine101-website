import {navbarService} from '@/lib/data/navbar.service'
import MainLayout from '../content'

const fetchNavbarAndFooterData = async () => {
  const [{data: navbar}, {data: footer}] = await Promise.all([
    navbarService.getNavbar({populate: '*'}),
    navbarService.getFooter({populate: '*'}),
  ])
  return {navbar, footer}
}

const MainLayoutWrapper = async ({children}: {children: React.ReactElement}) => {
  const {navbar, footer} = await fetchNavbarAndFooterData()
  return (
    <MainLayout navbar={navbar} footer={footer}>
      {children}
    </MainLayout>
  )
}

export default MainLayoutWrapper
