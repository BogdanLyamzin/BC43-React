import PropTypes from "prop-types";

import ListItem from "./ListItem/ListItem";

import listStyles from "./list-styles";

const List = ({title, items = []}) => {
    const elements = items.map(({id, ...props}) => <ListItem key={id} {...props}  />);

    return (
        <>
            {title && <h3 style={listStyles.listTitle}>{title}</h3>}
            <ul style={listStyles.list}>
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