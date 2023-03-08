import {AppDispatch} from "../store";
import {IUser} from "../../modules/IUser";
import axios from "axios";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (e) {
        // @ts-ignore
        dispatch(userSlice.actions.usersFetchingError(e.message));
    }
}


// export const fetchUsers = createAsyncThunk(
//     // name of this async thunk
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         return response.data
//     }
// )