import PropTypes from "prop-types";

import "./list-item.scss";

const ListItem = ({name, price})=> {
    return <li className="list-item">Name: {name}. Price: {price}.</li>
}

export default ListItem;

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}