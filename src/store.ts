import { configureStore } from '@reduxjs/toolkit';
import { mapReducer } from '~/map/map.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { routerReducer } from './router/router.slice';

const store = configureStore({
  reducer: {
    map: mapReducer,
    router: routerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
