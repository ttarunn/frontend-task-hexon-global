import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: {
        userData:{}
    },
    reducers: {
        updateData: (state, actions) => {
            state.userData = actions.payload;
        }
    }
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;