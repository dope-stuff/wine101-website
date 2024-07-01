import {Product} from '@/lib/data/models/product'
import {productService} from '@/lib/data/product.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'
import WineCard from '@/modules/card/template/wine'

interface ProductOffset {
  products: Product[]
  count: number
  offset: number
  limit: number
}
export default async function WineCellarPage() {
  const products: ProductOffset = await productService.get({
    expand: 'categories,tags,type,variants.prices',
    limit: 12,
  })

  return (
    <>
      <div className="w-full flex-col flex">
        <div className="w-[90%] mx-auto">
          <div className="uppercase text-2xl md:text-3xl my-4">ฺBest Sellers</div>
          <div className="w-full flex-shrink-0 flex-row flex flex-wrap gap-4">
            {products.products.map((product, index) => (
              <div key={index}>
                <WineCard
                  data={product}
                  theme={getProductTheme(product.categories[0] ? product.categories[0].name : '')}
                />
              </div>
            ))}
          </div>
          <div className="uppercase text-2xl md:text-3xl my-4">explore more</div>
          <div className="w-full flex-shrink-0 flex-row flex flex-wrap gap-4">
            {products.products.map((product, index) => (
              <div key={index}>
                <WineCard
                  data={product}
                  theme={getProductTheme(product.categories[0] ? product.categories[0].name : '')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
