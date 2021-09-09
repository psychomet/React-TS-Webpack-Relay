import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from 'store/authSlice';
import themeReducer from 'store/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
