import axios from 'axios'

export const productService = {
  get: (params?: any) =>
    axios.get<any>('https://be.wine101.wine/store/products', {params}).then(({data}) => data),
}
