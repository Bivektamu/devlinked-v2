import { createSlice } from "@reduxjs/toolkit";
import { Error, ErrorState, State } from "../../types";

const initialState: ErrorState = {
    errors: []
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        addError: (state: ErrorState, action) => {
            console.log(action.payload)
            state.errors.push(action.payload)
        }
    }
})

export default errorSlice.reducer
export const { addError } = errorSlice.actions
export const errors = (state: ErrorState) => state.errors