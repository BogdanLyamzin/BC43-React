import { Component } from "react";

import { getPosts } from "../../shared/api/posts";

import styles from "./posts.module.scss";

class Posts extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
    }

    componentDidMount() {
        this.fetchPosts();
    }

    async fetchPosts() {
        try {
            this.setState({ loading: true });
            const { data } = await getPosts();
            this.setState({ items: data });
        }
        catch ({ response }) {
            this.setState({ error: response.data.message || "Cannot fetch posts" })
        }
        finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { items, loading, error } = this.state;

        const elements = items.map(({ id, title, body }) => (
            <li key={id} className={styles.item}>
                <h4 className={styles.itemTitle}>{title}</h4>
                <p>{body}</p>
            </li>
        ))

        return (
            <>
                <h2 className={styles.heading}>Posts</h2>
                {loading && <p>....Loading</p>}
                {error && <p className={styles.error}>{error}</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
            </>

        )
    }
}

export default Posts;