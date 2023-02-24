import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlAlbums } from '../assets/apiUrls';
import { albumType } from '../assets/interfaces';

interface albumsStateType {
	albums: albumType[] | null;
	error: string;
	loading: boolean;
}

const initialState: albumsStateType = {
	albums: null,
	error: '',
	loading: false,
};

export const fetchalbums = createAsyncThunk(
  'albums/fetch-all', 
  async (userId: number, thunkAPI) => {
	try {
		const response = await axios.get(`${urlAlbums}?userId=${userId}`);
		const albums = response.data;

		return albums;
	} catch (error: any) {
		const message = error?.message || 'Error fetching the albums';
		return thunkAPI.rejectWithValue(message);
	}
});

export const albumsSlice = createSlice({
	name: 'albums',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchalbums.pending, (state) => {
      state.error = '';
			state.loading = true;
		});
		builder.addCase(fetchalbums.fulfilled, (state, action) => {
			state.error = '';
			state.loading = false;
			state.albums = action.payload;
		});
		builder.addCase(fetchalbums.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export const { reset } = albumsSlice.actions;
export default albumsSlice.reducer;
