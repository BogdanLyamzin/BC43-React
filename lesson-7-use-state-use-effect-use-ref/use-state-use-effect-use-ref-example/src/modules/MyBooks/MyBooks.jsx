import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";
import MyBooksList from "./MyBooksList/MyBooksList";
import MyBooksForm from "./MyBooksForm/MyBooksForm";

import { getInitialValue } from "../../shared/utils/localStorage";

import styles from "./my-books.module.scss";

const MyBooks = () => {
    const [books, setBooks] = useState(()=> getInitialValue("my-books", []));
    const [filter, setFilter] = useState(false);

    const firstRender = useRef(true);

    useEffect(()=> {
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem("my-books", JSON.stringify(books));
    }, [books])

    const isDublicate = ({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const dublicate = books.find(item => {
            return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
        });

        return Boolean(dublicate);
    }

    const handleFilter = ({ target }) => setFilter(target.value);

    const onAddBook = ({title, author, favorite}) => {
        if(isDublicate({title, author})) {
            return alert(`${title} - ${author} is already exist`);
        }
        setBooks(prevBooks => {
            const newBook = {
                id: nanoid(),
                title,
                author,
                favorite,
            }

            return [...prevBooks, newBook]
        })
    }

    const onDeleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id))
    }

    const getFilteredBooks = () => {
        if(!filter) {
            return books;
        }
        const normalizedFilter = filter.toLowerCase();
        const result = books.filter(({title, author}) => {
            return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }

    const items = getFilteredBooks();

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>My Books</h3>
            <div className={styles.blocks}>
                <MyBooksBlock title="Add book">
                    <MyBooksForm onSubmit={onAddBook} />
                </MyBooksBlock>
                <MyBooksBlock title="Book list">
                    <input name="filter" onChange={handleFilter} className={styles.textField} placeholder="enter book title or author" />
                    <MyBooksList items={items} onDeleteBook={onDeleteBook} />
                </MyBooksBlock>
            </div>
        </div>
    )
}

export default MyBooks;

/*
class MyBooks extends Component {
    state = {
        items: [],
        filter: "",
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem("my-books"));
        if(items?.length) { // items && items.length
            this.setState({
                items,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const {items} = this.state;
        if(items.length !== prevState.items.length) {
            localStorage.setItem("my-books", JSON.stringify(items));
        }
    }

    handleFilter = ({ target }) => {
        this.setState({
            filter: target.value
        })
    }

    onAddBook = ({title, author, favorite}) => {
        if(this.isDublicate({title, author})) {
            return alert(`${title} - ${author} is already exist`);
        }
        this.setState(prevState => {
            const {items} = prevState;
            const newBook = {
                id: nanoid(),
                title,
                author,
                favorite,
            }

            return {items: [...items, newBook]}
        })
    }

    onDeleteBook = (id) => {
        this.setState(prevState => {
            const newItems = prevState.items.filter(item => item.id !== id);
            
            return {
                items: newItems,
            }
        })
    }

    isDublicate({title, author}) {
        const {items} = this.state;
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const dublicate = items.find(item => {
            return (item.title.toLowerCase() === normalizedTitle && item.author.toLowerCase() === normalizedAuthor)
        });

        return Boolean(dublicate);
    }

    getFilteredBooks() {
        const {filter, items} = this.state;
        if(!filter) {
            return items;
        }
        const normalizedFilter = filter.toLowerCase();
        const result = items.filter(({title, author}) => {
            return (title.toLowerCase().includes(normalizedFilter) || author.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }

    render() {
        const items = this.getFilteredBooks();

        return (
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Books</h3>
                <div className={styles.blocks}>
                    <MyBooksBlock title="Add book">
                        <MyBooksForm onSubmit={this.onAddBook} />
                    </MyBooksBlock>
                    <MyBooksBlock title="Book list">
                        <input name="filter" onChange={this.handleFilter} className={styles.textField} placeholder="enter book title or author" />
                        <MyBooksList items={items} onDeleteBook={this.onDeleteBook} />
                    </MyBooksBlock>
                </div>
            </div>
        )
    }
}
*/
