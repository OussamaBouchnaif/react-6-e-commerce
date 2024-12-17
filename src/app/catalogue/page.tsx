"use client";

import Banner from "@/components/Banner";
import CategoriesMenu from "@/components/catalog/CategoriesMenu";
import PopularProducts from "@/components/catalog/PopularProducts";
import useProducts from "@/hooks/useProducts";
import { filterProducts } from "@/services/productFilter";
import { Filters } from "@/Types/Filters";
import { useState } from "react";
import {Product } from "@/Types/Product";

export default function CataloguePage() {
  const { products } = useProducts();
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    maxPrice: 500,
    colors: [],
    brand: "all",
    category: "all",
    isNew: false,
    rating: null,
  });

  const filteredProducts: Product[] = products ? filterProducts(products, filters) : [];

  return (
    <div>
      <main className="max-w-screen-2xl mx-auto px-4">
        <div className="flex">
          <CategoriesMenu filters={filters} setFilters={setFilters} />
          <div className="flex-1 mt-4">
            <Banner />
            <div className="mt-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center text-red-500 font-semibold">
                  No products match your filters. Please adjust your criteria.
                </div>
              ) : (
                <PopularProducts products={filteredProducts} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
