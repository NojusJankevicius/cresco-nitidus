import axios, { AxiosInstance } from 'axios';
import SessionService from './session-service';
import reduxStore from '../store/index';
import { authFailed, signIn, signOut } from '../store/auth';
import User from '../types/User';
import Crudentials from '../types/crudentials';
import UserSigning from '../types/user-signing';

type AuthResponse = {
  user: User,
  token: string,
};

type CheckEmailResponse = {
  available: boolean,
};

// Singleton
const AuthService = new (class AuthService {
  private requester: AxiosInstance;

  private token?: string;

  constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      headers: { 'Content-Type': 'application/json' },
    });
    if (token) {
      this.authenticate(token);
    } else {
      reduxStore.dispatch(authFailed());
    }
  }

  public setAuth(token: string): void {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  public getToken(): typeof this.token {
    return this.token;
  }

  public async signIn({ email, password }: Crudentials): Promise<User | string> {
    try {
      const response = await this.requester.post<AuthResponse>('/sign-in', { email, password });
      const { user, token } = response.data;
      this.setAuth(token);
      SessionService.set('auth_token', token);

      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public signOut(): void {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(signOut());
  }

  public async signUp(formData: UserSigning): Promise<User | string> {
    try {
      const response = await this.requester.post<AuthResponse>('/sign-up', formData);
      const { user, token } = response.data;
      this.setAuth(token);
      SessionService.set('auth_token', token);

      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public async authenticate(token: string): Promise<string | true> {
    try {
      const { data } = await this.requester.post<AuthResponse>('/', { token });
      this.setAuth(token);
      reduxStore.dispatch(signIn({ user: data.user }));

      return true;
    } catch (error) {
      reduxStore.dispatch(authFailed());
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }

  public async checkEmail(email: string): Promise<boolean | string> {
    try {
      const { data } = await this.requester.get<CheckEmailResponse>(`/check-email?email=${email}`);

      return data.available;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as any as string;
    }
  }
})();
export default AuthService;
