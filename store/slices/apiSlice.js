import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopgeniebackend.onrender.com'
  }),
  endpoints: (builder) => ({
    getLists: builder.query({
      query: () => '/list'
    })
  })
})

export const { useGetListsQuery } = apiSlice
