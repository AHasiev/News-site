import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import newsSlice from "../features/newsSlice";


export const store = configureStore({
    reducer: {
        categories: categorySlice,
        news: newsSlice,
        // users: user,

    }
})