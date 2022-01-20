import axios from 'axios';
import SessionService from './session-service';

const ApiService = new (class ApiService {
  constructor() {
    const { token } = SessionService.get('auth') ?? {};
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (token) {
      this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  setAuth(token) {
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async signIn({ email, password }) {
    try {
      const { data: { user, token } } = await this.requester.post('/auth/sign-in', { email, password });
      SessionService.set('auth', {
        signedIn: true,
        user,
        token,
      });
      this.setAuth(token);
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async checkEmail(email) {
    try {
      const { data } = await this.requester.get(`/auth/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      return error.message;
    }
  }

  // async signUp() {
  // }
})();

// const deleteAuth = (token) => {
//   delete requester.defaults.headers.common.Authorization;
// };
export default {
  ApiService,
};
