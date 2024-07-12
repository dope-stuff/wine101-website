import {IService} from '@/lib/data/models/common'
import {Link} from '@nextui-org/react'

export default function ServiceCard({data}: {data: IService}) {
  return (
    <div
      className="flex-1 min-h-[180px] h-full flex-col flex items-center justify-center gap-2 !bg-cover !bg-no-repeat p-4 text-center"
      style={{
        background: !!data.mediaUrl ? `url(${data.mediaUrl})` : '#BE1C2D',
      }}
    >
      <div className="text-xl xl:text-2xl text-white max-w-[300px]">{data.heading}</div>
      <Link
        href={data.linkTo}
        className="bg-[#BE1C2D] text-white rounded-full px-4 py-1 text-[16px] md:text-lg z-0"
      >
        See more
      </Link>
    </div>
  )
}
