import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
  id: number;
  name: string;
}

export type Users = User[];

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => 'users',
    }),
    getUser: builder.query<User, string | string[]>({
      query: (userID: string) => `users/${userID}`,
    })
  })
});

export const { useGetUsersQuery, useGetUserQuery } = userApi;
