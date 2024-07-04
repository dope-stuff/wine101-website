import {navbarService} from '@/lib/data/navbar.service'
import MainLayout from '../content'

const MainLayoutWrapper = async ({children}: {children: React.ReactElement}) => {
  const [{data: navbar}, {data: footer}] = await Promise.all([
    navbarService.getNavbar({populate: '*'}),
    navbarService.getFooter({populate: '*'}),
  ])
  
  return (
    <MainLayout navbar={navbar} footer={footer}>
      {children}
    </MainLayout>
  )
}

export default MainLayoutWrapper
