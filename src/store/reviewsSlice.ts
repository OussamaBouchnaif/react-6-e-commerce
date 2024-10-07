import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Review {
  user: string;
  comment: string;
  rating: number;
}

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
      action: PayloadAction<{ productId: string; review: Omit<Review, "user"> }>
    ) => {
      const { productId, review } = action.payload;

      if (!state.reviewsByProductId[productId]) {
        state.reviewsByProductId[productId] = [];
      }
      state.reviewsByProductId[productId].push({
        user: "Anonymous",
        ...review,
      });
    },
  },
});

export const { addReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
