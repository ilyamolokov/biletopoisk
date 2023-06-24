import { createSlice } from "@reduxjs/toolkit";


type CartState = {
    [productId: string]: number;
};

type PayloadAction<T> = {
    payload: T;
};

const initialState:CartState = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state: CartState, action: PayloadAction<string>) => {
            const count = state[action.payload] || 0
            if (count === 30) {
                return;
            }
            state[action.payload] = count + 1
        },
        decrement: (state: CartState, action: PayloadAction<string>) => {
            const count = state[action.payload]

            if (!count) {
                return;
            }

            if (count === 1) {
                delete state[action.payload];
                return;
            }
            state[action.payload] = count - 1
        },
        delete: (state: CartState, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
        reset: () => initialState,
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
