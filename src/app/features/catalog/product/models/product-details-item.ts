import { ProductImageListItem } from "./product-image-list-item";

export interface ProductDetailsItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  images: ProductImageListItem[];
}
