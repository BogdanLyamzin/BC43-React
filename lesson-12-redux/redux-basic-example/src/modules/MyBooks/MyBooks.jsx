import { useSelector, useDispatch } from "react-redux";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";
import MyBooksList from "./MyBooksList/MyBooksList";
import MyBooksForm from "./MyBooksForm/MyBooksForm";

import { addBook, deleteBook, setFilter } from "../../redux/actions";
import { getBooks, getFilteredBooks, getFilter } from "../../redux/selectors";

import styles from "./my-books.module.scss";

const MyBooks = () => {
    const books = useSelector(getBooks);
    const filteredBooks = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const isDublicate = ({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const dublicate = books.find(item => {
            return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
        });

        return Boolean(dublicate);
    }

    const handleFilter = ({ target }) => {
        const action = setFilter(target.value);
        dispatch(action);
    }

    const onAddBook = ({title, author, favorite}) => {
        if(isDublicate({title, author})) {
            return alert(`${title} - ${author} is already exist`);
        }
        const action = addBook({title, author, favorite});
        dispatch(action);
    }

    const onDeleteBook = (id) => {
        const action = deleteBook(id);
        dispatch(action);
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
                    <MyBooksList items={filteredBooks} onDeleteBook={onDeleteBook}  />
                </MyBooksBlock>
            </div>
        </div>
    )
}

export default MyBooks;

