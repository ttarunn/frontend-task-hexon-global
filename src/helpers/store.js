import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import dataSlice from "./dataSlice";
import repoSlice from "./repoSlice";


const reducers = combineReducers({
    dataSlice: dataSlice,
    repoSlice: repoSlice            
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);



   

const store = configureStore({
    reducer: persistedReducer,
});

export default store;