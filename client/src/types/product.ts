import Category from './category';
import Image from './image';

type Product = {
  id: string,
  name: string,
  description: string,
  category: Category,
  price: number,
  images: Image[],
  createdAt: string,
  updatedAt: string,
};

export default Product;
