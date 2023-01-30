import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  eventsData: object;
}

const initialState: DataState = {
  eventsData: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
  },
});

export const { addEventsData } = eventsSlice.actions;
export default eventsSlice.reducer;
