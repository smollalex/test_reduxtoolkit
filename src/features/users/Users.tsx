import React, { useEffect } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { IUser } from './types'

// 1 подход reducers
// import { usersFetching, usersFetchingSuccess, usersFetchingError } from './usersSlice'
// import { AppDispatch } from '../../store/store';

// const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(usersFetching());
//     const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(usersFetchingSuccess(res.data));
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(usersFetchingError(error))
//     }
//   }
// }

// 2 подход extraReducers
import { createAsyncThunk } from '@reduxjs/toolkit'
export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return res.data  
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
});

export function Users() {
  const users = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  
  useEffect(() => { 
    dispatch(fetchUsers())
  }, [dispatch]);

  return (
    <div>
      {users.isLoading && 'Is loadind...'}
      {users.error && users.error.message}
      {!users.error && (JSON.stringify(users, null, ' '))}
    </div>
  )
}