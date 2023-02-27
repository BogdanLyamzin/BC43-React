import { useState, useEffect, useCallback } from "react";

import Modal from "../../shared/components/Modal/Modal";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";

import { searchPosts } from "../../shared/api/posts";

import styles from "./posts-search.module.scss";

const PostsSearch = ()=> {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [postDetails, setPostDetails] = useState({});

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setStatus("pending");
                const { data } = await searchPosts(search, page);
                setItems(prevItems => [...prevItems, ...data]);
                setStatus("success");
            }
            catch ({ response }) {
                const errorMessage = response.data.message || "Cannot fetch posts";
                setError(errorMessage);
                setStatus("error");
            }
        }
        
        if(search) {
            fetchPosts()
        }
    }, [search, page])

    const updateSearch = useCallback(({ search: searchString }) => {
        setSearch(searchString);
        setPage(1);
        setItems([]);
    }, []);

    const loadMore = useCallback(() => setPage(prevPage => prevPage + 1), []);

    const onShowModal = useCallback(({title, body}) => {
        setShowModal(true);
        setPostDetails({title, body});
    }, []);

    const onCloseModal = useCallback(() => {
        setShowModal(false);
        setPostDetails({});
    }, []);

    const elements = items.map(({ id, title, body }) => (
        <li key={id} onClick={() => onShowModal({title, body})} className={styles.item}>
            <h4 className={styles.itemTitle}>{title}</h4>
            <p>{body}</p>
        </li>
    ))

    return (
        <>
            {showModal && (<Modal close={onCloseModal}>
                            <h3 className={styles.detailsTitle}>{postDetails.title}</h3>
                            <p className={styles.detailsContent}>{postDetails.body}</p>
                          </Modal>)}
            <h2 className={styles.heading}>Posts</h2>
            <PostsSearchForm onSubmit={updateSearch} />
            {status === "pending" && <p>....Loading</p>}
            {error && <p className={styles.error}>{error}</p>}
            <ul className={styles.list}>
                {elements}
            </ul>
            {status === "success" && !items.length && <p>Nothing found</p>}
            {Boolean(items.length) && <button onClick={loadMore} type="button">Load more</button>}
        </>
    )
}

export default PostsSearch;

/*
class PostsSearch extends Component {
    state = {
        items: [],
        status: "idle",
        error: null,
        search: "",
        page: 1,
        showModal: false,
        postDetails: {}
    }

    componentDidUpdate(_, prevState) {
        const { search, page } = this.state;
        if (search !== prevState.search || page !== prevState.page) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        try {
            const { search, page } = this.state;
            this.setState({ status: "pending" });
            const { data } = await searchPosts(search, page);
            this.setState(({ items }) => ({
                items: [...items, ...data],
                status: "success"
            }));
        }
        catch ({ response }) {
            this.setState({ 
                error: response.data.message || "Cannot fetch posts",
                status: "error"
             })
        }
    }

    updateSearch = ({ search }) => {
        this.setState({ search, items: [], page: 1 });
    }

    loadMore = () => {
        this.setState(({ page }) => ({
            page: page + 1
        }))
    }

    showModal = ({title, body}) => {
        this.setState({
            showModal: true,
            postDetails: {
                title,
                body,
            }
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            postDetails: {}
        })
    }

    render() {
        const { items, status, error, showModal, postDetails } = this.state;

        const elements = items.map(({ id, title, body }) => (
            <li key={id} onClick={() => this.showModal({title, body})} className={styles.item}>
                <h4 className={styles.itemTitle}>{title}</h4>
                <p>{body}</p>
            </li>
        ))

        return (
            <>
                {showModal && (<Modal close={this.closeModal}>
                                <h3 className={styles.detailsTitle}>{postDetails.title}</h3>
                                <p className={styles.detailsContent}>{postDetails.body}</p>
                              </Modal>)}
                <h2 className={styles.heading}>Posts</h2>
                <PostsSearchForm onSubmit={this.updateSearch} />
                {status === "pending" && <p>....Loading</p>}
                {error && <p className={styles.error}>{error}</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
                {status === "success" && !items.length && <p>Nothing found</p>}
                {Boolean(items.length) && <button onClick={this.loadMore} type="button">Load more</button>}
            </>
        )
    }
}
*/
