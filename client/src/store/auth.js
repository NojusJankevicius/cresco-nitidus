/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signedIn: null,
  user: null,
  redirectTo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFailed(state) {
      state.signedIn = false;
    },
    signIn(state, { payload }) {
      state.signedIn = true;
      state.user = payload.user;
      state.redirectTo = payload.redirectTo;
    },
    signOut(state) {
      state.signedIn = false;
      state.user = null;
      state.redirectTo = null;
    },
    updateUser(state, { payload }) {
      state.user = payload.user;
    },
  },
});

export const {
  authFailed,
  signIn,
  signOut,
  updateUser,
} = authSlice.actions;

export const authSelector = (state) => state.auth;
export const signedInSelector = (state) => state.auth.signedIn;
export const userSelector = (state) => state.auth.user;

export default authSlice.reducer;
