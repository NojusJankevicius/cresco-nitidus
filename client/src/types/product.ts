import Category from './category';

type Product = {
  id: string,
  title: string,
  description: string,
  category: Category,
  price: number,
  images: string[],
  createdAt: string,
  updatedAt: string,
};

export default Product;
