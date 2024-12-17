import { Filters } from "@/Types/Filters";
import { Product } from "@/Types/Product";


export const filterProducts = (products: Product[], filters: Filters): Product[] => {
  return products.filter((product) => {
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    if (
      filters.brand !== "all" &&
      product.brand.toLowerCase() !== filters.brand.toLowerCase()
    ) {
      return false;
    }

    if (
      filters.category !== "all" &&
      product.category.toLowerCase() !== filters.category.toLowerCase()
    ) {
      return false;
    }

    if (filters.isNew && !product.isNew) {
      return false;
    }

    return true;
  });
};

