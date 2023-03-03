import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "./types";

const initialState = {
    books: [
        {
            id: "1",
            title: "Worm",
            author: "John C. McCrae",
            favorite: true,
        },
        {
            id: "2",
            title: "Girl genius",
            author: "Foglio",
            favorite: false,
        },
    ],
    filter: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOOK:
            const newBooks = [...state.books, action.payload];
            return {...state, books: newBooks};
        case DELETE_BOOK:
            const arr = state.books.filter(item => item.id !== action.payload);
            return {...state, books: arr};
        case SET_FILTER:
            return {...state, filter: action.payload};
        default:
            return state;
    }
}

export default reducer;