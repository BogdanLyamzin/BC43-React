import * as api from "../../shared/api/books";

import * as actions from "./books-actions";

export const fetchBooks = ()=> {
    const func = async (dispatch) => {
        try {
            dispatch(actions.fetchBooksPending());
            const {data} = await api.getAllBooks();
            dispatch(actions.fetchBooksFulfilled(data));
        }
        catch({response}) {
            dispatch(actions.fetchBooksRejected(response));
        }
    }

    return func;
}

const isDublicate = (books, { title, author }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const dublicate = books.find(item => {
        return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
    });

    return Boolean(dublicate);
}

export const addBook = data => {
    const func = async(dispatch, getState) => {
        try {
            const {books} = getState();
            if (isDublicate(books.items, data)) {
                return alert(`${data.title} - ${data.author} is already exist`);
            }
            dispatch(actions.addBookPending());
            const {data: result} = await api.addBook(data);
            dispatch(actions.addBookFulfilled(result));
        }
        catch({response}) {
            dispatch(actions.addBookRejected(response));
        }
    }

    return func;
}

export const deleteBook = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.deleteBookPending());
            await api.deleteBook(id);
            dispatch(actions.deteleBookFulfilled(id));
        }
        catch({response}) {
            dispatch(actions.deleteBookRejected(response))
        }
    }

    return func;
}