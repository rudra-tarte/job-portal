import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    users: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                users: action.payload
            }
            
        }
    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer
