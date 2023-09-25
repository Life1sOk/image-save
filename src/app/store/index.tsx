"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import imagesReducer from "./images.slice";

const rootReducer = combineReducers({
  images: imagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["images/selectFile"],
        // Ignore these paths in the state
        ignoredPaths: ["images.uploader"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
