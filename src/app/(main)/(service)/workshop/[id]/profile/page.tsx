'use client'

import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import WineProfileBody from '@/modules/common/images/wine-profile/body'
import WineProfileSweetness from '@/modules/common/images/wine-profile/sweetness'
import WineProfileAcidity from '@/modules/common/images/wine-profile/acidity'
import WineProfileTannis from '@/modules/common/images/wine-profile/tannins'
import WineProfileLine1 from '@/modules/common/images/wine-profile/line1'
import WineProfileLine2 from '@/modules/common/images/wine-profile/line2'
import WineProfileLine3 from '@/modules/common/images/wine-profile/line3'
import WineProfileCircle from '@/modules/common/images/wine-profile/circle'
import {workshopService} from '@/lib/data/workshop.service'
import {Image} from '@nextui-org/react'
import {WorkshopProduct} from '@/lib/data/models/workshop'

const Profile = ({params}: {params: {id: string}}) => {
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(true)
  const [workshopProfile, setWorkshopProfile] = useState<WorkShopProfile>()

  const [preferred, setPreferred] = useState({
    body: 0,
    sweetness: 0,
    acidity: 0,
    tannins: 0,
  })

  const fetchData = async () => {
    const profile = await workshopService
      .getProfile({
        'populate[guest_preferred]': '*',
        'populate[workshop][populate]': '*',
        'filters[guest_email]': searchParams.get('email'),
        'filters[workshop][id]': params.id,
      })
      .then((response) => {
        return response.data[0]
      })

    if (profile) {
      const {body, acidity, sweetness, tannins} = {...profile.guest_preferred} as Perferred
      const getLevel = (level: string) => {
        /* 290 for lv1, 540 for lv2, 790 for lv3 */
        if (['light', 'dry', 'low'].includes(level)) {
          return 290
        } else if (['medium', 'off-dry'].includes(level)) {
          return 540
        } else if (['full', 'sweet', 'high'].includes(level)) {
          return 790
        }
        return 0
      }
      setPreferred({
        body: getLevel(body),
        acidity: getLevel(acidity),
        sweetness: getLevel(sweetness),
        tannins: getLevel(tannins),
      })
      console.log('[E] ~ fetchData ~ profile:', profile)

      setWorkshopProfile(profile)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bryndan-write-font w-fit max-w-5xl border-4 border-dashed border-black  mx-auto flex flex-col justify-center relative my-4">
      <div className="w-full flex flex-col items-center ">
        <Image
          removeWrapper
          className="mt-[-40px]"
          height={100}
          width={300}
          src="/images/workshop/logo.svg"
          alt=""
        />
        <Image
          removeWrapper
          className="mt-[-40px]"
          height={100}
          width={800}
          src="/images/workshop/header.svg"
          alt=""
        />
        <div className="text-[20px] mb-4 mt-[-1rem] text-center">
          <div>
            Your personjalized guide to wine{' '}
            <span className="text-[#BE1C2D] text-[32px]">{workshopProfile?.guest_nickname}</span>{' '}
            loves,
          </div>
          <div>no more guessing game in the wine aisle!</div>
        </div>
        <div className="w-[90%] flex flex-col gap-6 mb-8">
          <div className="w-full flex flex-row flex-nowrap ">
            <div className="whitespace-nowrap text-[32px] font-bold">Top Wine Type</div>
            <div className="flex-1 relative">
              <WineProfileLine1
                className="absolute -bottom-2 max-w-[100%]"
                width={1000}
                height={20}
              />
              <div className="whitespace-nowrap text-[32px] font-bold text-[#BE1C2D] ml-8">
                {workshopProfile?.top_wine || '-'}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-nowrap ">
            <div className="whitespace-nowrap text-[32px] font-bold">Top Wine</div>
            <div className="flex-1 relative">
              <WineProfileLine2
                className="absolute -bottom-2 max-w-[100%]"
                width={1000}
                height={20}
              />
              <div className="whitespace-nowrap text-[32px] font-bold text-[#BE1C2D] ml-8">
                {workshopProfile?.favorite_wine || '-'}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-nowrap ">
            <div className="whitespace-nowrap text-[32px] font-bold">Top Grape</div>
            <div className="flex-1 relative">
              <WineProfileLine3
                className="absolute -bottom-2 max-w-[100%]"
                width={1000}
                height={20}
              />
              <div className="whitespace-nowrap text-[32px] font-bold text-[#BE1C2D] ml-8">
                {workshopProfile?.top_grape || '-'}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            {preferred.body > 0 && (
              <WineProfileCircle
                className="absolute top-4"
                style={{left: preferred.body}}
                width={120}
                height={60}
              />
            )}
            <WineProfileBody width={1000} height={100} />
          </div>
          <div className="relative">
            {preferred.sweetness > 0 && (
              <WineProfileCircle
                className="absolute top-4"
                style={{left: preferred.sweetness + 5}}
                width={120}
                height={60}
              />
            )}
            <WineProfileSweetness width={1000} height={100} />
          </div>
          <div className="relative">
            {preferred.acidity > 0 && (
              <WineProfileCircle
                className="absolute top-4"
                style={{left: preferred.acidity + 10}}
                width={120}
                height={60}
              />
            )}
            <WineProfileAcidity width={1000} height={100} />
          </div>
          <div className="relative">
            {preferred.tannins > 0 && (
              <WineProfileCircle
                className="absolute  top-4"
                style={{left: preferred.tannins + 15}}
                width={120}
                height={60}
              />
            )}
            <WineProfileTannis width={1000} height={100} />
          </div>
        </div>
        <Image height={100} width={600} src="/images/workshop/favorite.svg" alt="" />
        <div className="w-[800px] flex flex-row mt-4 mb-10">
          {workshopProfile &&
            workshopProfile.workshop.wineList.map((wine: WorkshopProduct, index: number) => (
              <div key={index} className="flex flex-1 flex-col justify-end items-center">
                <span className="text-[24px] text-center font-bold">{index + 1}</span>
                <Image
                  removeWrapper
                  className="h-full"
                  height={60}
                  width={60}
                  src={wine.imageUrl}
                  alt=""
                />
                <span className="h-[24px] text-[14px] text-center font-semibold relative">
                  {wine.itemDisplayName}
                  {workshopProfile.favorite_wine
                    .toLowerCase()
                    .includes(wine.itemDisplayName.toLowerCase()) && (
                    <WineProfileCircle
                      className="absolute bottom-[-2rem] left-[calc(50%-60px)]"
                      width={120}
                      height={60}
                    />
                  )}
                </span>
              </div>
            ))}
        </div>
        <div className="flex flex-col">
          <div className="relative flex flex-row items-center">
            <Image
              removeWrapper
              height={50}
              width={700}
              src="/images/workshop/footer1.svg"
              alt=""
            />
            <div className="ml-[-3rem] top-6 font-bold text-5xl text-[#BE1C2D]">
              {workshopProfile && workshopProfile.guest_nickname}
            </div>
          </div>
          <Image
            removeWrapper
            className="-mt-10"
            height={50}
            width={800}
            src="/images/workshop/footer2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
