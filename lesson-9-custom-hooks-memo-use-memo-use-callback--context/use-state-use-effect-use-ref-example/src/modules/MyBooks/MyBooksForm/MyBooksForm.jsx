import { useEffect, useRef, useMemo, memo } from "react";
import { nanoid } from "nanoid";

import useForm from "../../../shared/hooks/useForm";

import initialState from "./initialState";

import styles from "./my-books-form.module.scss";

const MyBooksForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const titleId = useMemo(()=> nanoid(), []);
    const authorId = useMemo(()=> nanoid(), []);

    const titleRef = useRef(false);

    useEffect(()=> {
        titleRef.current.focus();
    }, [])

    const {title, author, favorite} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor={titleId}>Book title</label>
                <input id={titleId} ref={titleRef} value={title} name="title" onChange={handleChange} className={styles.textField} placeholder="Book title" required />
            </div>
            <div className={styles.formGroup}>
                <label>Book author</label>
                <input value={author} name="author" onChange={handleChange} className={styles.textField} placeholder="Book author" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={authorId}>Favorite</label>
                <input id={authorId} checked={favorite} name="favorite" onChange={handleChange} className={styles.checkbox} type="checkbox" />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default memo(MyBooksForm);
/*
const memorizeComponent = (Component) => {
    if(prevProps === newProps) {
        return prevComponentRender;
    }
}
*/
/*
class MyBooksForm extends Component {
    state = {...initialState}

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
        this.setState({ ...initialState })
    }

    render() {
        const {title, author, favorite} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Book title</label>
                    <input value={title} name="title" onChange={this.handleChange} className={styles.textField} placeholder="Book title" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Book author</label>
                    <input value={author} name="author" onChange={this.handleChange} className={styles.textField} placeholder="Book author" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Favorite</label>
                    <input checked={favorite} name="favorite" onChange={this.handleChange} className={styles.checkbox} type="checkbox" />
                </div>
                <button type="submit">Add book</button>
            </form>
        )
    }
}
*/
