import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./slices/toastSlice";
import { useDispatch } from "react-redux";
import authSlice, { auth } from "./slices/authSlice";

const Store = configureStore({
    reducer: {
        toasts: toastSlice,
        auth: authSlice
    }
})

export default Store

export type StoreDispatch = typeof Store.dispatch
export type StoreDispatchFunc = () => StoreDispatch

export const useStoreDispatch:StoreDispatchFunc = useDispatch