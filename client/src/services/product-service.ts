import axios, { AxiosError, AxiosInstance } from 'axios';
import ErrorResponse from '../types/error-response';
import Product from '../types/product';
import ProductData from '../types/product-data';
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
  public createProduct = async (formData: ProductData): Promise<Product | string> => {
    const token = ProductService.validateToken();
    if (!token) return 'You are not authorized';

    const body = new FormData();
      Object.entries(formData).forEach(([name,data]) => {
        if(data instanceof Array){
          data.forEach((x) => {
            body.append(name, x);
          });
        } else {
          body.append(name, String(data));
        }
      });
    try {
      const { data } = await this.requester.post<Product>('/', body, {
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

  public updateProduct = async (id: string, body: ProductData): Promise<Product | string> => {
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

})();

export default ProductService;
