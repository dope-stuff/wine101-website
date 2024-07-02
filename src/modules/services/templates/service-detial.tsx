import Carousel from '@/modules/carousel/template'
import SplashColorIcon from '@/modules/common/images/splash-color'

interface ServiceDetailProps {
  elements: React.ReactElement[]
  data: any
}
export default function ServiceDetail({elements, data}: ServiceDetailProps) {
  return (
    <div className="w-full flex-row flex-wrap lg:flex-nowrap flex gap-4 relative min-h-[300px]">
      <Carousel elements={elements} slidesPerView={1} arrowColor="white" gap={0} />
      <div className="w-full lg:w-[35%] min-w-[35%] flex-col flex justify-evenly gap-4 relative z-10">
        <div className="text-3xl text-black">{data.name}</div>
        {Object.keys(data.details).map((e, index) => (
          <div key={index} className="flex-row flex items-center gap-2">
            <div className="bg-primary text-white text-xl border-[2px] border-black rounded-full px-2 py-[2px] uppercase">
              {e}
            </div>
            <div className="text-lg text-black">{data.details[e]}</div>
          </div>
        ))}
      </div>
      <SplashColorIcon className="max-w-none right-0 bottom-0 lg:right-0 lg:bottom-0 absolute -z-10" />
      <div className="flex-col flex items-center gap-2 right-[5.5rem] bottom-10 lg:right-[5.5rem] lg:bottom-12 absolute -z-10 text-[12px]">
        {data.subdetails &&
          Object.keys(data.subdetails).map((e, index) => (
            <div key={index}>
              {e} {data.subdetails[e]}
            </div>
          ))}
      </div>
    </div>
  )
}
