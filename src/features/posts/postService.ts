import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from './types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      }),
      providesTags: () => ['Post']
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    removePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post']
    }),

  })
})