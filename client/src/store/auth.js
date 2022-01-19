/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import SessionService from '../services/session-service';

const initialState = SessionService.get('auth') ?? {
  signedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      state.signedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.redirectTo = action.payload.redirectTo;
      SessionService.set('auth', state);
    },
    signOut(state) {
      state.signedIn = false;
      state.token = null;
      state.user = null;
      state.redirectTo = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const authSelector = (state) => state.auth;
export const signedInSelector = (state) => state.auth.signedIn;
export const userSelector = (state) => state.auth.user;

export default authSlice.reducer;
