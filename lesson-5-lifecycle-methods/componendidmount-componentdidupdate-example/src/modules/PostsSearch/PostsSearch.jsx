import { Component } from "react";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

import { searchPosts } from "../../shared/api/posts";

import styles from "./posts-search.module.scss";

class PostsSearch extends Component {
    state = {
        search: "",
        page: 1,
        items: [],
        loading: false,
        error: null,
    }

    componentDidUpdate(_, prevState) {
        const {search, page} = this.state;
        if(search !== prevState.search || page !== prevState.page) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        try {
            const {search, page} = this.state;
            this.setState({ loading: true });
            const { data } = await searchPosts(search, page);
            this.setState(({items}) => ({
                items: [...items, ...data]
            }));
        }
        catch ({ response }) {
            this.setState({ error: response.data.message || "Cannot fetch posts" })
        }
        finally {
            this.setState({ loading: false })
        }
    }

    updateSearch = ({search})=> {
        this.setState({search, items: [], page: 1})
    }

    loadMore = () =>{
        this.setState(({page}) => ({
            page: page + 1
        }))
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
                <PostsSearchForm onSubmit={this.updateSearch} />
                {loading && <p>....Loading</p>}
                {error && <p className={styles.error}>{error}</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
                {Boolean(items.length) && <button onClick={this.loadMore} type="button">Load more</button>}
            </>
        )
    }
}

export default PostsSearch;