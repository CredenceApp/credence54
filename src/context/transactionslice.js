import { createSlice } from "@reduxjs/toolkit";



const transactionSlice = createSlice({
    name: 'userTransaction',
    initialState: null,
    reducers: {
        addToTransaction: (state, action) => action.payload
    }
})


export const { addToTransaction} = transactionSlice.actions

export default transactionSlice.reducer