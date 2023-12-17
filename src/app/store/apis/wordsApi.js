import { nanoid } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const wordsApi = createApi({
    reducerPath: 'words',
    tagTypes: ['Words'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchWords: builder.query({
                providesTags: (result, error, arg) => {
                    return [{type: 'Words'}]
                },
                query: () => {
                    return {
                        url: '/words',
                        params: {
                            
                        },
                        method: 'GET'
                    }
                }
            }),
            addWord: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{type: 'Words'}]
                },
                query: ({userId, english, turkish}) => {
                    return {
                        url: './words',
                        method: 'POST',
                        body: {
                            id: nanoid(),
                            userId,
                            english,
                            turkish
                        }
                    }
                }
            }),
            removeWord: builder.mutation({
                invalidatesTags: (result, error, word) => {
                    return [{type: 'Words'}]
                },
                query: (word) => {
                    return {
                        url: `/words/${word.id}`,
                        method: 'DELETE',
                    }
                }
            })
        }
    }
})

export const { useFetchWordsQuery, useAddWordMutation, useRemoveWordMutation } = wordsApi
export { wordsApi }