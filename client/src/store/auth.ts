import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '.';
import User from '../types/User';

type AuthState = {

  signedIn: boolean | null,
  user: User | null,
  redirectTo?: string,
};

const initialState: AuthState = {
  signedIn: null,
  user: null,
};

type SignInReducer = CaseReducer<AuthState, PayloadAction<{ user: User, redirectTo?: string }>>;
const signInReducer: SignInReducer = (state, { payload }) => {
  state.signedIn = true;
  state.user = payload.user;
  if (payload.redirectTo) {
    state.redirectTo = payload.redirectTo;
  }
};

type AuthFailedReducer = CaseReducer<AuthState>;
const authFailedReducer: AuthFailedReducer = (state) => {
  state.signedIn = false;
};

type SignOutReducer = CaseReducer<AuthState>;
const signOutReducer: SignOutReducer = (state) => {
  state.signedIn = true;
  state.user = null;
  state.redirectTo = undefined;
};

type UpdateUserReducer = CaseReducer<AuthState, PayloadAction<{ user: User }>>;
const updateUserReducer: UpdateUserReducer = (state, { payload }) => {
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInReducer,
    authFailedReducer,
    signOutReducer,
    updateUserReducer,
  },
});

export const {
  signInReducer: signIn,
  authFailedReducer: authFailed,
  signOutReducer: signOut,
  updateUserReducer: updateUser,
} = authSlice.actions;

export const authSelector = (state: State) => state.auth;
export const signedInSelector = (state: State) => state.auth.signedIn;
export const userSelector = (state: State) => state.auth.user;

export default authSlice.reducer;
