import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import eventsReducer from './eventsSlice';
import friendsReducer from './friendsSlice';
import activeItemReducer from './activeItemSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    events: eventsReducer,
    friends: friendsReducer,
    active: activeItemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
