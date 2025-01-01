import { Product } from "@/Types/Product";
import { Filters } from "@/Types/Filters";
import { filterProducts } from "@/services/productFilter";


describe("filterProducts", () => {
  let products: Product[];
  beforeEach(() => {
    products = [
      {
        _id: "1",
        name: "Product A",
        title: "Nike Air Zoom",
        brand: "Nike",
        category: "Shoes",
        description: "A lightweight running shoe",
        image: "img/nike-air-zoom.jpg",
        oldPrice: 120,
        price: 100,
        isNew: false,
      },
      {
        _id: "1",
        name: "Product B",
        title: "Nike Air Zoom",
        brand: "Nike",
        category: "Shoes",
        description: "A lightweight running shoe",
        image: "img/nike-air-zoom.jpg",
        oldPrice: 120,
        price: 100,
        isNew: false,
      },
    ];
  });

  test("retourne tous les produits si les filtres sont larges (min = 0, max = 10000, brand = all)", () => {
    const filters: Filters = {
        minPrice: 0,
        maxPrice: 10000,
        brand: "all",
        category: "all",
        isNew: false,
        colors: [],
        rating: null
    };
    const result = filterProducts(products, filters);
    expect(result).toHaveLength(2);
  });
  test("filtre par brand", () => {
    const filters: Filters = {
        minPrice: 0,
        maxPrice: 10000,
        brand: "Nike",
        category: "all",
        isNew: false,
        colors: [],
        rating: null
    };
    const result = filterProducts(products, filters);
    expect(result).toHaveLength(2);
    expect(result.map((p) => p.name).sort()).toEqual(["Product A", "Product B"]);
  });
  
});


