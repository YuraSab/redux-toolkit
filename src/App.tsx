import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

const App = () => {
    //v1
    // const {count} = useAppSelector(state => state.userReducer)
    // const {increment} = userSlice.actions;
    // const dispatch = useAppDispatch();
    // console.log(increment(5));


    const dispatch = useAppDispatch();
    const {isLoading, error, users} = useAppSelector(state => state.userReducer);


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {/*v1*/}
            {/*<h1>{count}</h1>*/}
            {/*<button onClick={() => dispatch(increment(10))}>Increment</button>*/}


            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default App;