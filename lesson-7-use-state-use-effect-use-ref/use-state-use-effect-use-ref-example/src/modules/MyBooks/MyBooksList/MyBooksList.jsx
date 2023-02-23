import styles from "./my-books-list.module.scss";

const MyBooksList = ({ items, onDeleteBook }) => {
    const elements = items.map(({ id, title, author }) => (
        <li className={styles.listItem} key={id}>
            Title: {title}. Author: {author}. <button onClick={() => onDeleteBook(id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyBooksList;