import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlPosts } from '../assets/apiUrls';
import { postType } from '../assets/interfaces';

interface postsStateType {
	posts: postType[] | null;
	error: string;
	loading: boolean;
}

const initialState: postsStateType = {
	posts: null,
	error: '',
	loading: false,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (userId: number, thunkAPI) => {
	try {
		const response = await axios.get(`${urlPosts}?userId=${userId}`);
		const posts = response.data;

		return posts;
	} catch (error: any) {
		const message = error?.message || 'Error fetching the posts';
		return thunkAPI.rejectWithValue(message);
	}
});

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.error = '';
				state.loading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.error = '';
				state.loading = false;
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
