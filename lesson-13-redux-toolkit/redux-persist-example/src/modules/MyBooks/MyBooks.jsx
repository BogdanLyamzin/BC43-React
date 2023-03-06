import { useSelector, useDispatch } from "react-redux";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";
import MyBooksList from "./MyBooksList/MyBooksList";
import MyBooksForm from "./MyBooksForm/MyBooksForm";

import { addBook, deleteBook } from "../../redux/books/books-slice";
import { setFilter } from "../../redux/filter/filter-slice";

import { getBooks, getFilteredBooks } from "../../redux/books/books-selectors";
import { getFilter } from "../../redux/filter/filter-selectors";

import styles from "./my-books.module.scss";

const MyBooks = () => {
    const books = useSelector(getBooks);
    const filteredBooks = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const isDublicate = ({ title, author }) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const dublicate = books.find(item => {
            return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
        });

        return Boolean(dublicate);
    }

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value));
    }

    const onAddBook = ({ title, author, favorite }) => {
        if (isDublicate({ title, author })) {
            return alert(`${title} - ${author} is already exist`);
        }
        dispatch(addBook({ title, author, favorite }));
    }

    const onDeleteBook = (id) => {
        dispatch(deleteBook(id));
    }


    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>My Books</h3>
            <div className={styles.blocks}>
                <MyBooksBlock title="Add book">
                    <MyBooksForm onSubmit={onAddBook} />
                </MyBooksBlock>
                <MyBooksBlock title="Book list">
                    <input value={filter} name="filter" onChange={handleFilter} className={styles.textField} placeholder="enter book title or author" />
                    <MyBooksList items={filteredBooks} onDeleteBook={onDeleteBook} />
                </MyBooksBlock>
            </div>
        </div>
    )
}

export default MyBooks;

