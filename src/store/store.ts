import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import usersSlice from "../features/users/usersSlice";
import { postApi } from "../features/posts/postService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})

// Вывод типов `RootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch