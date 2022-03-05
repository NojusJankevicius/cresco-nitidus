import axios, { AxiosInstance } from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';
import User from '../types/user';
import UserPatch from '../types/user-patch';

const ProfileService = new (class ProfileService {
  private requester: AxiosInstance;
  
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('no token');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async updateUserData(body: UserPatch): Promise<void> {
    const token = ProfileService.validateToken();
    const { data } = await this.requester.patch<User>('/users/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(updateUser({ user: data }));
  }
})();

export default ProfileService;
