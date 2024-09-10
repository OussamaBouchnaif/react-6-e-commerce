"use client";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import useProducts from "@/hooks/useProducts";

import { useState, useEffect } from "react";

export default function Home() {
 
  
  const {products,error} = useProducts();
  return (
  /*   <>
      <div className="max-w-screen-3xl mx-auto">
        <Banner />
      </div>
      <Products product={products}></Products>
    </> */
    <main>
    <div className="max-w-screen-3xl mx-auto">
      <Banner />
      <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products product={products} />
      </div>
    </div>
  </main>
  );
}
