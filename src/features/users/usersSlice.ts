import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from './types';
import { fetchUsers } from './Users';

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;     
      state.error = null;
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<Error>) {
      state.isLoading = false;
      state.error = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;     
      state.error = null;
      state.users = action.payload;
    },
  }
});

export const { usersFetching, usersFetchingSuccess, usersFetchingError } = usersSlice.actions
export default usersSlice.reducer