import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    cake: ""
}

export const reducer = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        addCake: (state, action) => {
            const cake = {
                id: nanoid(), 
                text: action.payload
            }
            state.cake(todo)
        },
        removeCake: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer