import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const res = await instance.get('/products?');
    return res.data;
  } catch (error) {
    return error;
  }
};

export default {
  getProducts,
};
