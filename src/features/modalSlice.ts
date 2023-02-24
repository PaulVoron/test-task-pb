import { createSlice } from '@reduxjs/toolkit';

interface modalStateType {
	isModalOpen: boolean,
  userName: string,
}

const initialState: modalStateType = {
	isModalOpen: false,
  userName: '',
};
const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
	},
});

export const { toggleModal, setUserName } = modalSlice.actions;
export default modalSlice.reducer;