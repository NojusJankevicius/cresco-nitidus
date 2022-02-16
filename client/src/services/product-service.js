import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCategories = async () => {
  try {
    const categories = await instance.get('/categories');
    return categories.data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async () => {
  try {
    const products = await instance.get('/products?');
    return products.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id) => {
  // console.log(id.slice(1));
  try {
    const product = await instance.get(`products/${id.slice(1)}`);
    // console.log(product.data);
    return product.data;
  } catch (error) {
    return error;
  }
};

export default {
  getProducts,
  getProduct,
  getCategories,
};
