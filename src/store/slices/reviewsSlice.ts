import { Review } from "@/Types/Review";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReviewsState {
  reviewsByProductId: {
    [productId: string]: Review[];
  };
}

const initialState: ReviewsState = {
  reviewsByProductId: {},
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (
      state,
      action: PayloadAction<{ productId: string; review: Omit<Review, "user">; user: string }>
    ) => {
      const { productId, review, user } = action.payload;

      if (!state.reviewsByProductId[productId]) {
        state.reviewsByProductId[productId] = [];
      }
      state.reviewsByProductId[productId].push({
        user,
        ...review,
      });
    },
  },
});

export const { addReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
