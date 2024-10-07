import { addReview } from "@/store/reviewsSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


interface ReviewFormProps {
    productId: string;
  }

export const ReviewForm = ({productId}:ReviewFormProps) => {
    const dispatch = useDispatch();
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState(5);
  
    const handleSubmit = () => {
      if (newReview.trim() === "") return;
      dispatch(
        addReview({
          productId,
          review: { comment: newReview, rating: newRating },
        })
      );
      setNewReview("");
      setNewRating(5);
    };
  

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Add your review</h3>
      <textarea
        className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
        rows={3}
        placeholder="Write your review..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      ></textarea>
      <div className="mt-2">
        <label className="block text-sm font-semibold">Rating:</label>
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-amazon_blue text-white py-2 px-6 rounded-lg hover:bg-amazon_yellow hover:text-amazon_blue duration-300"
      >
        Submit Review
      </button>
    </div>
  );
};
