import axios from "axios";

const booksInstance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
})

export const getAllBooks = ()=> booksInstance.get("/");

export const deleteBook = id => {
    return booksInstance.delete(`/${id}`)
}

export const addBook = data => {
    return booksInstance.post("/", data);
}