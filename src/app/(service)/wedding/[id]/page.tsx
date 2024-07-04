import {eventService} from '@/lib/data/event.service'
import OurClient from '@/modules/services/components/our-client'

export default async function Page({params}: {params: any}) {
  const {data: event} = await eventService.getOne({populate: '*'}, Number(params.id))
  const {data: events} = await eventService.get({
    sort: { eventDate: 'desc' },
    filters: {type: 'WEDDING', id: {$ne: Number(params.id)}}
  })

  const details = {
    'total guest': event.totalGuests || '-',
    venue: event.venue || '-',
    'theme color': event.themeColor || '-',
    'total wine':
      (event.redWineUsed || 0) +
      (event.roseWineUsed || 0) +
      (event.sparklingWineUsed || 0) +
      (event.whiteWineUsed || 0),
  }
  const subdetails = {
    rose: event.roseWineUsed,
    sparkling: event.sparklingWineUsed,
    white: event.whiteWineUsed,
    red: event.redWineUsed,
  }

  return <OurClient data={event} events={events} details={details} subdetails={subdetails} />
}
