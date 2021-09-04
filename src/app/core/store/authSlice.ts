import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "core/store";
import { Environment } from 'relay-runtime';
import * as Relay from "core/relay";

export interface User {
  id: string;
  email: string | null;
  name: string | null;
}

export interface AuthState {
  user:  User | null;
  token: string;
  relay: Environment;
}


const initialState: AuthState = {
  user: null,
  token: String(localStorage.getItem("token")),
  relay: Relay.Environment
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state, action: PayloadAction<string>) => {
      state.user = null;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export const selectToken = (state: RootState): string => state.auth.token;
export const selectRelay = (state: RootState): Environment => state.auth.relay;
export default authSlice.reducer;
