import PropTypes from "prop-types";

import listItemStyles from "./list-item-styles";

const ListItem = ({name, price})=> {
    return <li style={listItemStyles.listItem}>Name: {name}. Price: {price}.</li>
}

export default ListItem;

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}