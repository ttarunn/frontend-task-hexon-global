import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
    name: 'dataSlice',
    initialState: {
        reposData:[],
        reposContent:[]
    },
    reducers: {
        updateRepos: (state, actions) => {
            state.reposData = actions.payload;
        },
        updateReposContent: (state, actions) => {
            state.reposContent = actions.payload;
        }
    }
});

export const { updateRepos, updateReposContent } = repoSlice.actions;

export default repoSlice.reducer;