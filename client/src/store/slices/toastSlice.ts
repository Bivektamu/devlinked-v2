import { createSlice } from "@reduxjs/toolkit";
import { State, ToastState} from "../types";

const initialState: ToastState = {
    toasts: []
}

const ToastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToast: (state: ToastState, action) => {
            console.log(action.payload)
            state.toasts.push(action.payload)
        },
        removeToast: (state: ToastState) => {
            state.toasts.pop()
        }
    }
})

export default ToastSlice.reducer
export const { addToast, removeToast } = ToastSlice.actions
export const toasts = (state: State) => state.toasts