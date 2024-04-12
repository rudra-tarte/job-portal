import {configureStore} from '@reduxjs/toolkit';

// Add after creating Slice
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    // define the reducers over here, you can have multiple reducers
    reducer: todoReducer

    // Can define other Reducers as well
    // user: userReducer,
    // settings: settingsReducer,

})

