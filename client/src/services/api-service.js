import axios from 'axios';

const anonymRequester = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const signIn = async ({ email, password }) => {
  try {
    const { data } = await anonymRequester.post('/auth/sign-in', { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const checkEmail = async (email) => {
  try {
    const { data } = await anonymRequester.get(`/auth/check-email?email=${email}`);
    return data.available;
  } catch (error) {
    return error.message;
  }
};

const signUp = async () => {

};

export default {
  signIn,
  signUp,
  checkEmail,
};
