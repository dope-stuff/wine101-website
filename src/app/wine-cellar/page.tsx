import {Product} from '@/lib/data/models/product'
import {productService} from '@/lib/data/product.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'
import WineCard from '@/modules/card/template/wine'
import WineCellarHeader from '@/modules/header/components/wine-cellar'

interface ProductOffset {
  products: Product[]
  count: number
  offset: number
  limit: number
}
export default async function WineCellarPage() {
  const products: ProductOffset = await productService.get({
    expand: 'categories,tags,type,variants.prices',
  })

  return (
    <>
      <div className="w-full flex-col flex">
        <WineCellarHeader />
        <div className="w-[90%] mx-auto">
          <div className="uppercase text-4xl md:text-5xl">ฺBest Sellers</div>
          <div className="w-full h-full flex-row flex flex-wrap gap-4">
            {products.products.map((product, index) => (
              <WineCard
                key={index}
                data={product}
                theme={getProductTheme(product.categories[0] ? product.categories[0].name : '')}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
