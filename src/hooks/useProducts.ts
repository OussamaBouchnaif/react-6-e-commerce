import { Product } from "@/Types/Product";
import useData from "./useData"; 


const useProducts = () => {
  const url = process.env.NEXT_PUBLIC_API_URL as string; 
  const { data: products, error, loading } = useData<Product>(url);

  return { products, error, loading };
};

export default useProducts;