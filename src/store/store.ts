import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
    userReducer
});

export const setupStore = () => {
    // analog of createStore
    // not needed including thunk cause this already included in redux-tooolkit
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// dispatch type of our store
export type AppDispatch = AppStore[`dispatch`]