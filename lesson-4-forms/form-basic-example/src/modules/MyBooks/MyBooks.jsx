import { Component } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksBlock";

import styles from "./my-books.module.scss";

class MyBooks extends Component {
    state = {
        items: [
            {
                id: "1",
                title: "Worm",
                author: "John C. McCrae"
            },
            {
                id: "2",
                title: "Ward",
                author: "John C. McCrae"
            },
        ],
        title: "",
        author: "",
        filter: "",
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.isDublicate()) {
            const {title, author} = this.state;
            alert(`${title} - ${author} is already exist`);
            return;
        }

        this.setState(prevState => {
            const {title, author, items} = prevState;
            const newBook = {
                id: nanoid(),
                title,
                author,
            }

            return {items: [...items, newBook]}
        })
        this.reset();
    }

    reset(){
        this.setState({title: "", author: ""})
    }

    onDeleteBook(id) {
        this.setState(prevState => {
            const newItems = prevState.items.filter(item => item.id !== id);
            
            return {
                items: newItems,
            }
        })
    }

    isDublicate() {
        const {title, author, items} = this.state;
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
        const { title, author } = this.state;

        const items = this.getFilteredBooks();

        const elements = items.map(({ id, title, author }) => (
            <li className={styles.listItem} key={id}>
                Title: {title}. Author: {author}. <button onClick={()=> this.onDeleteBook(id)}>delete</button>
            </li>
        ))

        return (
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Books</h3>
                <div className={styles.blocks}>
                    <MyBooksBlock title="Add book">
                        <form onSubmit={this.handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Book title</label>
                                <input value={title} name="title" onChange={this.handleChange} className={styles.textField} placeholder="Book title" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Book author</label>
                                <input value={author} name="author" onChange={this.handleChange} className={styles.textField} placeholder="Book author" required />
                            </div>
                            <button type="submit">Add book</button>
                        </form>
                    </MyBooksBlock>
                    <MyBooksBlock title="Book list">
                        <input name="filter" onChange={this.handleChange} className={styles.textField} placeholder="enter book title or author" />
                        <ol className={styles.list}>
                            {elements}
                        </ol>
                    </MyBooksBlock>
                </div>
            </div>
        )
    }
}

export default MyBooks;