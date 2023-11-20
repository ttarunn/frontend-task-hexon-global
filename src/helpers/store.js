import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import repoSlice from "./repoSlice";

const store = configureStore({
    reducer: {
        dataSlice: dataSlice,
        repoSlice: repoSlice
    }
});

export default store;