import axios from 'axios';
import SessionService from './session-service';
import reduxStore from '../store/index';
import { authFailed, signIn, signOut } from '../store/auth';

// Singleton
const AuthService = new (class AuthService {
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

  setAuth(token) {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  getToken() {
    return this.token;
  }

  async signIn({ email, password }) {
    try {
      const response = await this.requester.post('/sign-in', { email, password });
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  signOut() {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(signOut());
  }

  async signUp(formData) {
    try {
      const response = await this.requester.post('/sign-up', formData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async authenticate(token) {
    try {
      const { data: user } = await this.requester.post('/', { token });
      reduxStore.dispatch(signIn({ user }));
      this.setAuth(token);
    } catch (error) {
      reduxStore.dispatch(authFailed());
    }
  }

  async checkEmail(email) {
    try {
      const { data } = await this.requester.get(`/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      return error.message;
    }
  }
})();

// const deleteAuth = (token) => {
//   delete requester.defaults.headers.common.Authorization;
// };
export default AuthService;
