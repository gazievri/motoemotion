import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  activeItem: object;
}

const initialState: DataState = {
  activeItem: {},
};

const activeItemSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = activeItemSlice.actions;
export default activeItemSlice.reducer;
