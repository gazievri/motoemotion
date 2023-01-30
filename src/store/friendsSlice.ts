import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  friendsData: object;
}

const initialState: DataState = {
  friendsData: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    addFriendsData: (state, action) => {
      state.friendsData = action.payload;
    },
  },
});

export const { addFriendsData } = friendsSlice.actions;
export default friendsSlice.reducer;
