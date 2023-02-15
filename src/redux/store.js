import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamcoreapi } from './service/shazamcore';

export const store = configureStore({
  reducer: {
    [shazamcoreapi.reducerPath]: shazamcoreapi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => { getDefaultMiddleware().concat(shazamcoreapi.middleware)},
});
