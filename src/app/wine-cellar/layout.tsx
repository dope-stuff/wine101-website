import {Inter} from 'next/font/google'
import {Image, Link} from '@nextui-org/react'
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
            <Link className="text-black" href="/wine-cellar">
              <div className={`ml-5 text-xl cursor-pointer ${inter.className}`}>All wine</div>
            </Link>
          </Menu>
          <Menu title="country">
            <div className="grid grid-cols-2 gap-2  ml-5">
              {wineCountries.map((country, index) => (
                <Link
                  key={index}
                  className="text-black"
                  href={`/wine-cellar?country=${country.value}`}
                >
                  <div className={`text-xl cursor-pointer ${inter.className}`}>{country.name}</div>
                </Link>
              ))}
            </div>
          </Menu>
          <Menu title="colour">
            <div className="flex flex-col gap-2 ml-5">
              {wineColours.map((color, index) => (
                <Link key={index} className="text-black" href={`/wine-cellar?color=${color.value}`}>
                  <div
                    className={`flex flex-row items-center gap-2 text-xl cursor-pointer ${inter.className}`}
                  >
                    <div
                      className="w-[20px] h-[20px] rounded-full"
                      style={{background: color.color}}
                    />
                    {color.name}
                  </div>
                </Link>
              ))}
            </div>
          </Menu>
          <Menu title="wine price">
            <div className="flex flex-col gap-2  ml-5">
              {winePrices.map((prices, index) => (
                <Link
                  key={index}
                  className="text-black"
                  href={`/wine-cellar?prices=${prices.value}`}
                >
                  <div
                    className={`flex flex-row items-center gap-2 text-xl cursor-pointer ${inter.className}`}
                  >
                    {prices.name}
                  </div>
                </Link>
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
