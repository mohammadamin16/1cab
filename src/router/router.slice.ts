import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Route {
  Home,
  Login
}

interface RouterState {
  currnetRoute: Route;
}

const initialState: RouterState = {
  currnetRoute: Route.Login
};

const routerSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCurrentRoute: (state, action: PayloadAction<Route>) => {
      state.currnetRoute = action.payload;
    },
  },
});

export const RouterActs = routerSlice.actions;
export const routerReducer = routerSlice.reducer;
