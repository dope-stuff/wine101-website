export interface Product {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  external_id: number;
  description: string;
  handle: string;
  is_giftcard: boolean;
  discountable: boolean;
  thumbnail: string;
  collection_id: string;
  type_id: string;
  weight: number;
  length: number;
  height: number;
  width: number;
  hs_code: string;
  origin_country: string;
  mid_code: string;
  material: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  metadata: Metadata;
  profile_id: string;
  collection: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    title: string;
    handle: string;
    metadata: Metadata;
  };
  categories: {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string;
    handle: string;
    is_active: boolean;
    is_internal: boolean;
    parent_category_id: string;
    rank: number;
    metadata: Metadata;
  }[];
  images: any[];
  options: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    title: string;
    product_id: string;
    metadata: Metadata;
    values: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      value: string;
      option_id: string;
      variant_id: string;
      metadata: Metadata;
    }[];
  }[];
  profiles: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    name: string;
    type: string;
    metadata: Metadata;
  }[];
  tags: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    value: string;
    metadata: Metadata;
  }[];
  type: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    value: string;
    metadata: null;
  };
  variants: {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    title: string;
    product_id: string;
    sku: string;
    barcode: string;
    ean: string;
    upc: string;
    variant_rank: number;
    inventory_quantity: number;
    allow_backorder: boolean;
    manage_inventory: boolean;
    hs_code: string;
    origin_country: string;
    mid_code: string;
    material: string;
    weight: string;
    length: string;
    height: string;
    width: string;
    metadata: Metadata;
    options: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      value: string;
      option_id: string;
      variant_id: string;
      metadata: Metadata;
    }[];
    prices: {
      id: string;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      currency_code: string;
      amount: number;
      min_quantity: number;
      max_quantity: number;
      price_list_id: string;
      region_id: string;
      price_list: number[];
      variant_id: string;
    }[];
    original_price: number;
    calculated_price: number;
    calculated_price_type: string;
    original_price_includes_tax: boolean;
    calculated_price_includes_tax: boolean;
    original_price_incl_tax: number;
    calculated_price_incl_tax: number;
    original_tax: number;
    calculated_tax: number;
    tax_rates: {
      rate: number;
      name: string;
      code: string;
    }[];
  }[];
}

export interface Metadata {
  "ABV.": string;
  Body: string;
  Taste: string;
  Region: string;
  Acidity: string;
  Tannins: string;
  "Serve At": string;
  "Perfect With": string;
}

export interface IProductData {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  metadata: Metadata;
}
