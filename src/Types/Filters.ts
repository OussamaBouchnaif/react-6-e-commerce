export interface Filters {
    minPrice: number;
    maxPrice: number;
    colors: string[];
    brand: string;
    category: string;
    isNew: boolean;
    rating: number | null;
  }