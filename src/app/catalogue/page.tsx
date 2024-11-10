"use client";

import Banner from "@/components/catalog/Banner";
import CategoriesMenu from "@/components/catalog/CategoriesMenu";
import PopularProducts from "@/components/catalog/PopularProducts";
import { Header } from "@/components/header/Header";
import useProducts from "@/hooks/useProducts";

export default function CataloguePage() {
  const { products, error, loading } = useProducts();
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto px-4">
        <div className="flex">
          <CategoriesMenu />
          <div className="flex-1 mt-4">
            <Banner />
            <div className="mt-3">
              <PopularProducts products={products} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
