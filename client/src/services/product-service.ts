/* eslint-disable */
import axios, { AxiosError, AxiosInstance } from 'axios';
import ErrorResponse from '../types/error-response';
import Image from '../types/image';
import Product from '../types/product';
import ProductPatch from '../types/product-data';
import AuthService from './auth-service';

const ProductService = new (class ProductService {

  private requester: AxiosInstance;

  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('No auth token found');
    }

    return token;
  }

  public constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/products',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // export const getCategories = async () => {
  //   try {
  //     const categories = await instance.get('/categories');
  //     return categories.data;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // export const getCourses = async () => {
  //   try {
  //     const courses = await instance.get('/courses');
  //     return courses.data;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  public createProduct = async (formData: ProductPatch): Promise<Product | string> => {
    const token = ProductService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.post<Product>('/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public updateProduct = async (id: string, body: ProductPatch): Promise<Product | string> => {
    const token = ProductService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.patch(`/${id.slice(1)}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  };

  public getProducts = async (): Promise<Product[] | string> => {
    try {
      const { data } = await this.requester.get<Product[]>('/');

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  };

  public deleteProduct = async (id: string): Promise<Product | string> => {
    const token = ProductService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<Product>(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  };

  public getProduct = async (id: string): Promise<Product | string> => {
    try {
      const product = await this.requester.get<Product>(`/${id.slice(1)}`);
      console.log(product.data)
      return product.data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  };



  // export const addProduct = async (product: Product): Promise<void> => {
  //   try {
  //     const data = new FormData();
  //     Object.entries(product).forEach(([name, value]) => {
  //       data.append(name, value);
  //       if(value instanceof Array){
  //         value.forEach((el) => {
  //           console.log(name, value);
  //           data.append(name, el)
  //         });
  //       } else {
  //         data.append(name, value);
  //       }
  //     });
  //     const addedProduct = await instance.post('/products', data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log(addedProduct);
  //     return addedProduct.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };



  // export const uploadImages = async (files: FileList): Promise<Image[]> => {
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i += 1) {
  //     formData.append('files', files[i]);
  //   }

  //   const { data } = await instance.post<Image[]>('/images/', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   return data;
  // };

})();

export default ProductService;
