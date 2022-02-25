import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const poemListApi = createApi({
  reducerPath: 'poemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://poetrydb.org/'}),
  tagTypes: [],
  endpoints: (builder) => ({
    getPoemListRandomly: builder.query({
      query:()=>`random/20`,
    }),
  }),
})


export const { useGetPoemListRandomlyQuery } = poemListApi
