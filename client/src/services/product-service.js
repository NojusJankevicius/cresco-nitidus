/* eslint-disable */
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

export const updateProduct = async (id, body) => {
  try {
    const updatedProduct = await instance.patch(`products/${id.slice(1)}`, body);
    return updatedProduct.data;
  } catch (error) {
    return error;
  }
};

export const addProduct = async (product) => {
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
    return error;
  }
};

export const uploadImages = async (files) => {
  const formData = new FormData();
  for (let i = 0; i < files.length; i += 1) {
    formData.append('files', files[i]);
  }

  const { data } = await instance.post('/images/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.images;
};

export default {
  getCategories,
  getCourses,
  getProducts,
  getProduct,
  updateProduct,
  uploadImages,
};
