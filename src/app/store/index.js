import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi";
import { wordsApi } from "./apis/wordsApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer, // albums: usersApi.reducer
        [wordsApi.reducerPath]: wordsApi.reducer
        
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(wordsApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useFetchUsersQuery, useAddUserMutation } from './apis/usersApi'
export { useFetchWordsQuery, useAddWordMutation, useRemoveWordMutation } from './apis/wordsApi'