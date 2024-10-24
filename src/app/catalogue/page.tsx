"use client";

import Banner from "@/components/catalogue/Banner";
import CategoriesMenu from "@/components/catalogue/CategoriesMenu";
import PopularProducts from "@/components/catalogue/PopularProducts";
import { Header } from "@/components/header/Header";
import useProducts from "@/hooks/useProducts";

export default function CataloguePage() {
  const { products, error, loading } = useProducts();
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto px-4">
        <div className="flex">
          {/* Menu des catégories */}
          <CategoriesMenu />

          {/* Contenu principal */}
          <div className="flex-1 mt-4">
            {/* Bannière */}
            <Banner />

            {/* Produits populaires */}
            <div className="mt-3">
              <PopularProducts products={products} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
