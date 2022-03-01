import axios, { AxiosError, AxiosInstance } from 'axios';
import Course from '../types/course';
import CourseData from '../types/course-data';
import ErrorResponse from '../types/error-response';
import AuthService from './auth-service';

const CourseService = new (class CourseService {
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
      baseURL: 'http://localhost:5000/api/courses',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public createCourse = async (formData: CourseData): Promise<Course | string> => {
    const token = CourseService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.post<Course>('/', formData, {
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

  public updateCourse = async (id: string, formData: CourseData): Promise<Course | string> => {
    const token = CourseService.validateToken();
    if (!token) return 'You are not authorized';

    try {
      const { data } = await this.requester.patch<Course>(`/${id}`, formData, {
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

  public getCourses = async (): Promise<Course[] | string> => {
    try {
      const { data } = await this.requester.get<Course[]>('/');

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

  public deleteCourse = async (id: string): Promise<Course | string> => {
    const token = CourseService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<Course>(`/${id}`, {
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
})();

export default CourseService;
