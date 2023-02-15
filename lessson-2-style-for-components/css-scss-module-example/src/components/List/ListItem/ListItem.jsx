import PropTypes from "prop-types";

import styles from "./list-item.module.css";

const ListItem = ({name, price, important})=> {
    const fullClassName = important ? `${styles.item} ${styles.important}` : styles.item;
    
    return <li className={fullClassName}>Name: {name}. Price: {price}.</li>;
}

export default ListItem;

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}