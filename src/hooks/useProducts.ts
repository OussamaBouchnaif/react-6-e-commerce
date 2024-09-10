import { use, useEffect, useState } from "react";
export interface Product {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
  }



const useProducts = () => {
  const url =  process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log('data', data);
      })
      .catch((err) => {
        setError(err.message);
        console.log('Erreur:', err);
      });
  }, []);
  return {products,error}
}

export default useProducts;


