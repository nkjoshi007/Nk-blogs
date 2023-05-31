import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../Posts";

const store = configureStore({
    reducer:{
        Post:PostSlice.reducer,
    },
});

export default store;