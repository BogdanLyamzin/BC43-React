import { ADD_BOOK, DELETE_BOOK } from "./books-types";

const initialState = [
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
];

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

export default booksReducer;