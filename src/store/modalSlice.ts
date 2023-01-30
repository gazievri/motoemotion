import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ModalState {
  modalIsOpened: boolean
}

// Define the initial state using that type
const initialState: ModalState = {
  modalIsOpened: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.modalIsOpened = true;
    },
    closeModal(state, action) {
      state.modalIsOpened = false;
    }
  }
})

export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;

