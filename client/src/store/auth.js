/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import SessionService from '../services/session-service';

const initialState = SessionService.get('auth') ?? {
  signedIn: false,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, payload) {
      state.signedIn = true;
      state.user = payload.user;
      state.redirectTo = payload.redirectTo;
    },
    signOut(state) {
      state.signedIn = false;
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
