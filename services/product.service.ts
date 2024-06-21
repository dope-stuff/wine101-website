import axios from "axios";

export const productService = {
  getProduct: () =>
    axios.get(
      "http://localhost:9000/store/products?expand=categories,tags,type,variants.prices&limit=12&offset=0&cart_id=cart_01J0T5T8NC27NZN0FZKTEAX5XA&currency_code=thb&is_giftcard=false&collection_id%5B%5D=pcol_01HEWFCSQ6AXRQBKA6VPHGN95Q"
    ),
};
