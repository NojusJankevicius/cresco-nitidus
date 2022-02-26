import axios from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';

const ProfileService = new (class ProfileService {
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

  async updateUserData(body) {
    const token = ProfileService.validateToken();
    const { data } = await this.requester.patch('/users/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(updateUser({ user: data.user }));
  }
})();

export default ProfileService;
