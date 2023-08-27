import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './exercises.slice';

const store = configureStore({
  reducer: {
    api: exercisesReducer,
  },
});

export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
