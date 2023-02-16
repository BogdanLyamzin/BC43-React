import PropTypes from "prop-types";

import ListItem from "./ListItem/ListItem";

import "./list.css";

const List = ({title, items = []}) => {
    const elements = items.map(({id, ...props}) => <ListItem key={id} {...props}  />);
    /*
     const elements = items.map(item => {
        const {id, ...props} = item;
        <ListItem key={id} name={pros.name} price={props.price}  />
     });
     */

    return (
        <>
            {title && <h3 className="list-title">{title}</h3>}
            <ul className="list">
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