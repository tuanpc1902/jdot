import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import CommonSlice from "./slice/common-slice";

export const store = configureStore({
    reducer: {
        CommonSlice: CommonSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})