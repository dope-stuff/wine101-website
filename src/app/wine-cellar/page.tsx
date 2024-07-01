import {productService} from '@/lib/data/product.service'
import {getProductTheme} from '@/lib/utils/getProductTheme'
import WineCard from '@/modules/card/template/wine'

export default async function Page() {
  const {products} = await productService.get({
    expand: 'categories,tags,type,variants.prices',
    limit: 12,
  })

  const {products: exploreProducts} = await productService.get({
    expand: 'categories,tags,type,variants.prices',
    limit: 12,
  })

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="text-2xl md:text-3xl my-4">ฺBest Sellers</div>
        <div className="w-full grid grid-cols-list justify-center gap-4">
          {products.map((product, index) => (
            <div key={index}>
              <WineCard
                data={product}
                theme={getProductTheme(product.categories[0] ? product.categories[0].name : '')}
              />
            </div>
          ))}
        </div>
        <div className="text-2xl md:text-3xl my-4">explore more</div>
        <div className="w-full grid grid-cols-list justify-center gap-4">
          {exploreProducts.map((product, index) => (
            <div key={index}>
              <WineCard
                data={product}
                theme={getProductTheme(product.categories[0] ? product.categories[0].name : '')}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
