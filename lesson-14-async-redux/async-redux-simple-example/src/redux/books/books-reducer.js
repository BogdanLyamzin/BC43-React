import { createReducer } from "@reduxjs/toolkit";

import * as actions from "./books-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const booksReducer = createReducer(initialState, builder => {
    builder.addCase(actions.fetchBooksPending, (state)=> {
        state.loading = true;
        state.error = null;
    })
    .addCase(actions.fetchBooksFulfilled, (state, {payload}) => {
        state.loading = false;
        state.items = payload;
    })
    .addCase(actions.fetchBooksRejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    })
    .addCase(actions.deleteBookPending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(actions.deteleBookFulfilled, (state, {payload}) => {
        state.loading = false;
        state.items = state.items.filter(({id}) => id !== payload);
    })
    .addCase(actions.deleteBookRejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    })
    .addCase(actions.addBookPending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(actions.addBookFulfilled, (state, {payload}) => {
        state.loading = false;
        state.items.push(payload);
    })
    .addCase(actions.addBookRejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    })
});

export default booksReducer;