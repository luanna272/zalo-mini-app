import { Product } from 'types/product';
import { create } from 'zustand';

import products from '../../mock/products.json';
import variants from '../../mock/variants.json';

export type ProductStore = {
  products: any[];
  getProductByCategoryId: (id: string) => any[];
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: products.map(
    (product) =>
      ({
        ...product,
        variants: variants.filter((variant) =>
          product.variantId.includes(variant.id),
        ),
      }) as Product,
  ),

  getProductByCategoryId: (id: string) =>
    get().products.filter((product) => product.categoryId.includes(id)),
}));
