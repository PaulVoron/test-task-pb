import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/usersSlice';
import postsReducer from '../features/postsSlice';
import albumsReducer from '../features/albumsSlice';
import modalReducer from '../features/modalSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		posts: postsReducer,
		albums: albumsReducer,
    modal: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
