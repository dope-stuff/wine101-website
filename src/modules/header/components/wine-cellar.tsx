import BlackWineGlassIcon from '@/modules/common/images/black-wine-glass'
import IdentifyGlassIcon from '@/modules/common/images/identify-glass'
import SingleArrowDownIcon from '@/modules/common/images/single-arrow-down'
import {Image, Input} from '@nextui-org/react'

export default function WineCellarHeader() {
  const country = [
    'France',
    'Spain',
    'Chile',
    'Thailand',
    'Hungary',
    'United States',
    'Italy',
    'Australia',
  ]

  const wineTypes = [
    {name: 'Red', color: '#E6645D'},
    {name: 'White', color: '#81CF8A'},
    {name: 'Sparkling', color: '#E8C85E'},
    {name: 'Rose', color: '#E7AF96'},
    {name: 'Ice', color: '#91A9FF'},
  ]

  const priceList = ['Less than 1,000', '1,000-1,500', '1,500-3,000', '3,000+']
  return (
    <>
      <div className="flex-row flex justify-evenly text-2xl py-2 px-10 gap-10">
        <Image
          width={180}
          removeWrapper
          src="https://i.ibb.co/X2Bj0sJ/wine-101-lady-standing-with-big-bottle.webp"
          alt=""
        />
        <div className="flex-1 flex-col flex">
          <div className="flex-row flex flex-nowrap items-center gap-2">
            <BlackWineGlassIcon />
            <div className="text-3xl">about wines</div>
          </div>
          <div className="font-sans">All wine</div>
        </div>
        <div className="flex-1 flex-col flex">
          <div className="flex-row flex flex-nowrap items-center gap-2">
            <BlackWineGlassIcon />
            <div className="text-3xl">country</div>
          </div>
          <div className="grid grid-cols-2">
            {country.map((c) => (
              <div key={c} className="font-sans">
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex-col flex">
          <div className="flex-row flex flex-nowrap items-center gap-2">
            <BlackWineGlassIcon />
            <div className="text-3xl">colour</div>
          </div>
          <div>
            {wineTypes.map((type, i) => (
              <div key={i} className="flex-row flex items-center gap-2 flex-nowrap font-sans">
                <div
                  className="w-[10px] h-[10px] rounded-[50%] "
                  style={{background: type.color}}
                />
                {type.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex-col flex">
          <div className="flex-row flex flex-nowrap items-center gap-2">
            <BlackWineGlassIcon />
            <div className="text-3xl">wine price</div>
          </div>
          <div className="font-sans">
            {priceList.map((p) => (
              <div key={p} className="font-sans">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full uppercase text-center bg-primary text-white text-[70px] pt-2 pb-2 my-4">
        all wines
      </div>
      <div className="w-full h-[72px] mx-auto flex-row flex items-center gap-4 px-10">
        <Input
          placeholder="SEARCH"
          className="flex-1 h-full border border-black "
          classNames={{
            input: ['text-4xl !text-black', 'bg-transparent', 'placeholder:text-black'],
            innerWrapper: 'bg-transparent h-full',
            inputWrapper: 'h-full',
          }}
          endContent={<IdentifyGlassIcon />}
        />
        <button className="border border-black flex-row flex text-start p-2 items-center gap-2 min-w-[200px] justify-between">
          <div className="flex-col flex">
            <div className="uppercase text-[20px]">sort</div>
            <div className="font-sans">Price : Highest to lowest</div>
          </div>
          <SingleArrowDownIcon />
        </button>
        <button className="border border-black flex-row flex text-start p-2 items-center gap-2 min-w-[200px] justify-between">
          <div className="flex-col flex">
            <div className="uppercase text-[20px]">filter</div>
            <div className="font-sans">xxx</div>
          </div>
          <SingleArrowDownIcon />
        </button>
      </div>
    </>
  )
}
