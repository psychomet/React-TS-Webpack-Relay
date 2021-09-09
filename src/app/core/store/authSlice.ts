import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "core/store";

export interface User {
  id: string;
  name: string | null;
  lastname: string | null;
  email: string | null;
}

export interface AuthState {
  user: User | null;
  token: string;
}

const initialState: AuthState = {
  user: null,
  token: String(localStorage.getItem("token")),
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
export const selectIsLoggedIn = (state: RootState): boolean =>
  !!localStorage.getItem("token");
export default authSlice.reducer;
