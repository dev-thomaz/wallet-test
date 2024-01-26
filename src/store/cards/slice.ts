import { createSlice } from "@reduxjs/toolkit";
import { cardInitialState } from "./initialState";


export const cardSlice = createSlice({
    name: 'cards',
    initialState: cardInitialState,
    reducers:{}
})

export default cardSlice.reducer