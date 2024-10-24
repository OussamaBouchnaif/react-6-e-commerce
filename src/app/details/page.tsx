"use client";


import { Product } from "@/components/productDetails/Product";
import { ProductReview } from "@/components/productDetails/ProductReview";
import { ReviewForm } from "@/components/productDetails/ReviewForm";
import { useSearchParams } from "next/navigation";
import React from "react";



const DetailsPage = () => {
  const searchParams = useSearchParams();

  const product = {
    id: searchParams.get("_id"),
    image: searchParams.get("image"),
    category: searchParams.get("category"),
    brand: searchParams.get("brand"),
    description: searchParams.get("description"),
    title: searchParams.get("title"),
    price: Number(searchParams.get("price")),
    oldPrice: Number(searchParams.get("oldPrice")),
  };
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">

      <Product product={product}></Product>

      {product.id && <ProductReview productId={product.id} />}

      {product.id && <ReviewForm productId={product.id} />}
    </div>
  );
};

export default DetailsPage;
