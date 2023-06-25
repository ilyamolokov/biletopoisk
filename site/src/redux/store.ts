import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import { cartReducer } from "./features/cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer,   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
