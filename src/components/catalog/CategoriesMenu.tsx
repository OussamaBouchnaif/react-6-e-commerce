import { Filters } from "@/Types/Filters";
import React from "react";

interface CategoriesMenuProps {
  filters: Filters;
  setFilters: (newFilters: Filters) => void;
}


export const CategoriesMenu = ({ filters, setFilters }:CategoriesMenuProps) => {
  const handleInputChange = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-white w-64 p-4 border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <label className="block text-gray-700">Min Price</label>
        <input
          type="number"
          className="border border-gray-300 w-full p-2 rounded mb-3"
          placeholder="Min"
          value={filters.minPrice}
          onChange={(e) => handleInputChange("minPrice", Number(e.target.value))}
        />
        <label className="block text-gray-700">Max Price</label>
        <input
          type="number"
          className="border border-gray-300 w-full p-2 rounded"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={(e) => handleInputChange("maxPrice", Number(e.target.value))}
        />
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        <select
          className="border border-gray-300 w-full p-2 rounded"
          value={filters.brand}
          onChange={(e) => handleInputChange("brand", e.target.value)}
        >
          <option value="all">All Brands</option>
          <option value="Next">Next</option>
          <option value="Techno">Techno</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <select
          className="border border-gray-300 w-full p-2 rounded"
          value={filters.category}
          onChange={(e) => handleInputChange("category", e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Headphones">Headphones</option>
          <option value="Mobile Tablets">Mobile Tablets</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Discover Skincare">Discover Skincare</option>
        </select>
      </div>

      {/* Condition Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Condition</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.isNew}
            onChange={(e) => handleInputChange("isNew", e.target.checked)}
          />
          New
        </label>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating</h3>
        {[4, 3, 2, 1].map((rating) => (
          <label key={rating} className="flex items-center">
            <input
              type="radio"
              name="rating"
              className="mr-2"
              checked={filters.rating === rating}
              onChange={() => handleInputChange("rating", rating)}
            />
            {rating} stars & up
          </label>
        ))}
      </div>
    </div>
  );
}


export default CategoriesMenu;
