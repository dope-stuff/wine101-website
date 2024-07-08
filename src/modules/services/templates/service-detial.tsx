import Carousel from '@/modules/carousel/template'
import SplashColorIcon from '@/modules/common/images/splash-color'

interface ServiceDetailProps {
  elements: React.ReactElement[]
  data: any
  hideSplash?: boolean
}
export default function ServiceDetail({elements, data, hideSplash}: ServiceDetailProps) {
  return (
    <div className="w-full min-h-[400px] flex-row flex-wrap lg:flex-nowrap justify-center flex gap-8 relative z-0">
      <div className="max-w-[600px] flex w-full items-center justify-center">
        <Carousel elements={elements} slidesPerView={1} arrowColor="white" gap={0} />
      </div>
      <div className="flex-1 max-w-[600px] min-w-[35%] flex-col flex gap-8 relative mt-4 z-10">
        <div className="text-3xl text-black">{data.name}</div>
        {Object.keys(data.details).map((e, index) => (
          <div key={index} className="flex-row flex items-center gap-2">
            <div className="w-[150px] bg-primary text-center text-white text-xl border-[2px] border-black rounded-full px-2 py-[2px] uppercase">
              {e}
            </div>
            <div className="text-lg text-black">
              {typeof data.details[e] === 'number'
                ? (+data.details[e]).toLocaleString()
                : data.details[e]}
            </div>
          </div>
        ))}
        {hideSplash && (
          <>
            <SplashColorIcon className="max-w-none right-0 bottom-[-2rem] lg:right-0 lg:bottom-[-5rem] xl:bottom-[-2.8rem] absolute -z-10" />
            <div className="flex-col flex items-center leading-4 gap-2 right-[5rem] bottom-[1rem] lg:right-[5.5rem] lg:bottom-[-2.2rem] xl:bottom-0 absolute -z-10 text-[12px]">
              {data.subdetails &&
                Object.keys(data.subdetails).map((e, index) => (
                  <div key={index}>
                    {e} {data.subdetails[e]}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
