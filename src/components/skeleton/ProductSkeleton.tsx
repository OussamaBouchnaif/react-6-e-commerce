import React from "react";

export const ProductSkeleton = () => {
  return (
    <div className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden animate-pulse">
      <div className="w-full h-[260px] bg-gray-300"></div>
      <hr />
      <div className="px-4 py-3 flex flex-col gap-1">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
        <div className="h-10 bg-gray-300 rounded w-full mt-2"></div>
      </div>
    </div>
  );
};
