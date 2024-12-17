import { addReview } from "@/store/slices/reviewsSlice";
import { AppDispatch } from "@/store/store";


export const reviewService = {
    addReview: (
      dispatch: AppDispatch,
      productId: string,
      review: { comment: string; rating: number },
      user: string
    ) => {
      dispatch(
        addReview({
          productId,
          review: { ...review},
          user, 
        })
      );
    },
  };