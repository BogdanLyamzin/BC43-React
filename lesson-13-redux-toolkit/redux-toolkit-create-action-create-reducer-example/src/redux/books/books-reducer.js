import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./books-actions";

const booksReducer = createReducer([], builder => {
    builder.addCase(addBook, (state, {payload}) => {
        state.push(payload); // return [...state, payload];
    })
    .addCase(deleteBook, (state, {payload}) => {
        return state.filter(item => item.id !== payload)
    })
})

/*
const booksReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_BOOK:
           return [...state, payload];
        case DELETE_BOOK:
            return state.filter(item => item.id !== payload);
        default:
            return state;
    }
}
*/
export default booksReducer;