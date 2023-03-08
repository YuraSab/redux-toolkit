import {IUser} from "../../modules/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    // v1
    // count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    // v1
    // count: 0
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
        // // v1
        // increment(state, action: PayloadAction<number>) {
        // //    in redux toolkit don`t need return all state (return all object with some changed values)
        // //    we can change one concrete value
        // state.count += action.payload
        // }


        // // v2
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.users = action.payload;
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // },
    },

    // v3
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
});


export default userSlice.reducer;