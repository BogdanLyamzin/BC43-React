import PropTypes from "prop-types";

import ListItem from "./ListItem/ListItem";

import styles from "./list.module.scss";

const List = ({title, items = []}) => {
    const elements = items.map(({id, ...props}) => <ListItem key={id} {...props}  />);

    return (
        <>
            {title && <h3 className={styles.title}>{title}</h3>}
            <ul className={styles.list}>
                {elements}
            </ul>
        </>
    )
}

export default List;

List.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }))
}

/*
List.defaultProps = {
    items: []
}
*/