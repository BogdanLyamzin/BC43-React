import { memo } from "react";

import useForm from "../../../shared/hooks/useForm";

import initialState from "./initialState";

const PostsSearchForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState: {search: ""}, onSubmit});
    console.log("render");
    const {search} = state;

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" value={search} onChange={handleChange} placeholder="Search post" required />
            <button type="submit">Search</button>
        </form>
    )
}

export default memo(PostsSearchForm);
/*
class PostsSearchForm extends Component {
    state = {
        search: ""
    }

    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({
            [name]: newValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({ search: "" })
    }

    render() {
        const {search} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input name="search" value={search} onChange={this.handleChange} placeholder="Search post" required />
                <button type="submit">Search</button>
            </form>
        )
    }
}
*/
