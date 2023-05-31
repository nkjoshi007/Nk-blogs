import { configureStore } from "@reduxjs/toolkit";
import Postslice from "../Posts";

const store = configureStore({
    reducer:{
        Post:Postslice.reducer,
    },
})

export default store;