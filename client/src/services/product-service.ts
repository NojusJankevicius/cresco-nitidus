/* eslint-disable */
import axios from 'axios';
import Image from '../types/image';
import Product from '../types/product';
import ProductPatch from '../types/product-patch';

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

export const getProduct = async (id: string) => {
  try {
    const product = await instance.get(`products/${id.slice(1)}`);
    console.log(product.data)
    return product.data;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (id: string, body: ProductPatch) => {
  try {
    const updatedProduct = await instance.patch(`products/${id.slice(1)}`, body);
    return updatedProduct.data;
  } catch (error) {
    return error;
  }
};

export const addProduct = async (product: Product): Promise<void> => {
  try {
    const data = new FormData();
    Object.entries(product).forEach(([name, value]) => {
      data.append(name, value);
      if(value instanceof Array){
        value.forEach((el) => {
          console.log(name, value);
          data.append(name, el)
        });
      } else {
        data.append(name, value);
      }
    });
    const addedProduct = await instance.post('/products', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(addedProduct);
    // return addedProduct.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImages = async (files: FileList): Promise<Image[]> => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i += 1) {
    formData.append('files', files[i]);
  }

  const { data } = await instance.post<Image[]>('/images/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export default {
  getCategories,
  getCourses,
  getProducts,
  getProduct,
  updateProduct,
  uploadImages,
};
