import {IService} from '@/lib/data/models/home'
import {Link} from '@nextui-org/react'

export default function ServiceCard({data}: {data: IService}) {
  return (
    <div
      className="flex-1 h-full flex-col flex items-center justify-center gap-2 !bg-cover !bg-no-repeat p-4 text-center"
      style={{
        background: !!data.mediaUrl ? `url(${data.mediaUrl})` : '#BE1C2D',
      }}
    >
      <div className="text-[28px] text-white">{data.heading}</div>
      <Link
        href={data.linkTo}
        className="bg-[#BE1C2D] text-white rounded-full px-4 py-1 text-[18px]"
      >
        See more
      </Link>
    </div>
  )
}
