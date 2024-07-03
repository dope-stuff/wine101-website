import {eventService} from '@/lib/data/event.service'
import {Event} from '@/lib/data/models/event'
import OurClient from '@/modules/services/components/our-client'

async function GetPageData(id: number) {
  const {data: pageData} = await eventService.getOne({populate: '*'}, Number(id))

  return pageData
}

export default async function Page({params}: {params: any}) {
  const data: Event = await GetPageData(Number(params.id))
  const {data: events} = await eventService.get({filters: {type: 'COLLABORATION'}})

  const details = {
    'total guest': data.totalGuests || '-',
    venue: data.venue || '-',
    'theme color': data.themeColor || '-',
    'total wine':
      (data.redWineUsed || 0) +
      (data.roseWineUsed || 0) +
      (data.sparklingWineUsed || 0) +
      (data.whiteWineUsed || 0),
  }
  const subdetails = {
    rose: data.roseWineUsed,
    sparkling: data.sparklingWineUsed,
    white: data.whiteWineUsed,
    red: data.redWineUsed,
  }
  return <OurClient data={data} events={events} details={details} subdetails={subdetails} />
}
