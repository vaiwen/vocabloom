import { nanoid } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                query: () => {
                    return {
                        url: '/users',
                        params: {
                        },
                        method: 'GET'
                    }
                }
            }),
            addUser: builder.mutation({
                query: ({email, password}) => {
                    return {
                        url: './users',
                        method: 'POST',
                        body: {
                            id: nanoid(),
                            email,
                            password
                        }
                    }
                }
            }),
        }
    }
})

export const { useFetchUsersQuery, useAddUserMutation } = usersApi
export { usersApi }