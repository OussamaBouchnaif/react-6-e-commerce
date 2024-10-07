
import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';


interface ProductReviewsProps {
    productId: string;
  }

export const ProductReview = ({productId}:ProductReviewsProps) => {
    const reviews = useSelector(
        (state: RootState) => state.reviews.reviewsByProductId[productId] || []
      );
    
      return (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Product Reviews</h2>
          <div className="mt-4">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded-lg mb-4">
                  <p className="text-sm text-amazon_blue font-semibold">
                    {review.user}
                  </p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-yellow-500">Rating: {"⭐".repeat(review.rating)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      );
}
