import {Inter} from 'next/font/google'
import {Image} from '@nextui-org/react'
import {wineColours, wineCountries, winePrices} from '@/lib/constants'
import Container from '@/modules/container/template/container'
import BlackWineGlassIcon from '@/modules/common/images/black-wine-glass'

const inter = Inter({subsets: ['latin']})

const Menu = ({children, title}: {children: React.ReactNode; title: string}) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-row items-center text-3xl gap-2">
      <BlackWineGlassIcon />
      {title}
    </div>
    {children}
  </div>
)

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Container>
        <div className="flex flex-row justify-evenly">
          <Image
            width={180}
            src="https://i.ibb.co/X2Bj0sJ/wine-101-lady-standing-with-big-bottle.webp"
            alt=""
          />
          <Menu title="about wines">
            <div className={`ml-5 text-xl cursor-pointer ${inter.className}`}>All wine</div>
          </Menu>
          <Menu title="country">
            <div className="grid grid-cols-2 gap-2  ml-5">
              {wineCountries.map((country, index) => (
                <div key={index} className={`text-xl cursor-pointer ${inter.className}`}>
                  {country.name}
                </div>
              ))}
            </div>
          </Menu>
          <Menu title="colour">
            <div className="flex flex-col gap-2  ml-5">
              {wineColours.map((color, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center gap-2 text-xl cursor-pointer ${inter.className}`}
                >
                  <div
                    className="w-[20px] h-[20px] rounded-full"
                    style={{background: color.color}}
                  />
                  {color.name}
                </div>
              ))}
            </div>
          </Menu>
          <Menu title="wine price">
            <div className="flex flex-col gap-2  ml-5">
              {winePrices.map((prices, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center gap-2 text-xl cursor-pointer ${inter.className}`}
                >
                  {prices.name}
                </div>
              ))}
            </div>
          </Menu>
        </div>
      </Container>
      <div className="w-full text-center bg-primary text-white text-5xl pt-4 pb-6">ALL WINES</div>
      <Container>{children}</Container>
    </>
  )
}
