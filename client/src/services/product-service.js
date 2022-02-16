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

export const getCourses = async () => {
  try {
    const courses = await instance.get('/courses');
    return courses.data;
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
  try {
    const product = await instance.get(`products/${id.slice(1)}`);
    return product.data;
  } catch (error) {
    return error;
  }
};

export default {
  getCategories,
  getCourses,
  getProducts,
  getProduct,
};
