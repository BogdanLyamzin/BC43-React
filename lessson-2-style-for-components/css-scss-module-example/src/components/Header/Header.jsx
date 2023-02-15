import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Page header</h2>
            <p>page header description</p>
        </header>
    )
}

export default Header;