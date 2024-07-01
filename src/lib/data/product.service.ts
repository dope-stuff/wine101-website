import {axios} from '@/lib/data'
import {Product} from '@/lib/data/models/product'
import {MedusaPagination, MedusaParams} from '@/lib/data/models/medusa'

export const productService = {
  get: (params: MedusaParams) =>
    axios
      .get<{products: Product[] & MedusaPagination}>('https://be.wine101.wine/store/products', {
        params,
      })
      .then(({data}) => data),
}
