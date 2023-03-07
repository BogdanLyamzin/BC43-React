import { createAction } from "@reduxjs/toolkit";

export const fetchBooksPending = createAction("books/fetch/pending");
export const fetchBooksFulfilled = createAction("books/fetch/fulfilled");
export const fetchBooksRejected = createAction("books/fetch/rejected");

export const deleteBookPending = createAction("books/delete/pending");
export const deteleBookFulfilled = createAction("books/delete/fulfilled");
export const deleteBookRejected = createAction("books/delete/rejected");

export const addBookPending = createAction("books/add/pending");
export const addBookFulfilled = createAction("books/add/fulfilled");
export const addBookRejected = createAction("books/add/rejected");