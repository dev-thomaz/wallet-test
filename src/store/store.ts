import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from './LoadingReducer'
import cardReducer from './cards/slice';
import { cardApi } from "./cards/apiSlice";
export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        card: cardReducer,
        [cardApi.reducerPath]: cardApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch