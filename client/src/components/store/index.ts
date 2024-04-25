import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./slices/errorSlice";
import { useDispatch } from "react-redux";

const Store = configureStore({
    reducer: {
        errors: errorSlice
    }
})

export default Store

export type StoreDispatch = typeof Store.dispatch
export type StoreDispatchFunc = () => StoreDispatch

export const useStoreDispatch:StoreDispatchFunc = useDispatch