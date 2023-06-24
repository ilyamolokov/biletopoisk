import { combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "@/redux/services/movieApi";
import { cartReducer } from ".";

const rootReducer = combineReducers({cart: cartReducer,[movieApi.reducerPath]: movieApi.reducer});
export type RootState = ReturnType<typeof rootReducer>;

export const selectCartModule = (state:RootState) => state.cart

export const selectProductAmount = (state:RootState, id:string) => selectCartModule(state)[id] || 0
export const selectTotalAmount = (state:RootState) => Object.values(selectCartModule(state)).reduce((a, b)=> a + b, 0);