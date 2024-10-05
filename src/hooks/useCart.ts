import { addToCart } from "@/store/cartSlice";
import { Product } from "@/Types/Product";
import { useDispatch } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  const addProductToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return { addProductToCart };
};
