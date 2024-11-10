const CategoriesMenu = () => {
    return (
      <div className="bg-white w-64 p-4 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
  
        {/* Filter by Price */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <div>
            <label className="block text-gray-700">Min Price</label>
            <input type="number" className="border border-gray-300 w-full p-2 rounded mb-3" placeholder="Min" />
          </div>
          <div>
            <label className="block text-gray-700">Max Price</label>
            <input type="number" className="border border-gray-300 w-full p-2 rounded" placeholder="Max" />
          </div>
        </div>
  
        {/* Filter by Color */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Red
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Blue
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Green
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Black
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> White
            </label>
          </div>
        </div>
  
        {/* Filter by Size */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Size</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="radio" name="size" className="mr-2" /> Small
            </label>
            <label className="flex items-center">
              <input type="radio" name="size" className="mr-2" /> Medium
            </label>
            <label className="flex items-center">
              <input type="radio" name="size" className="mr-2" /> Large
            </label>
            <label className="flex items-center">
              <input type="radio" name="size" className="mr-2" /> Extra Large
            </label>
          </div>
        </div>
  
        {/* Filter by Brand */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Brand</h3>
          <select className="border border-gray-300 w-full p-2 rounded">
            <option value="all">All Brands</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="sony">Sony</option>
            <option value="lg">LG</option>
          </select>
        </div>
  
        {/* Filter by Rating */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Rating</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input type="radio" name="rating" className="mr-2" /> 4 stars & up
            </label>
            <label className="flex items-center">
              <input type="radio" name="rating" className="mr-2" /> 3 stars & up
            </label>
            <label className="flex items-center">
              <input type="radio" name="rating" className="mr-2" /> 2 stars & up
            </label>
            <label className="flex items-center">
              <input type="radio" name="rating" className="mr-2" /> 1 star & up
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoriesMenu;
  
  