import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPostById } from "../../shared/api/posts";

import styles from "./single-post-page.module.scss";

const SinglePostPage = () => {
    const [post, setPost] = useState({});

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchPost = async() => {
            try {
                const {data} = await getPostById(params.id);
                setPost(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchPost();
    }, [])

    const goBack = () => navigate(-1);

    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            <h1 className="page-title">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default SinglePostPage;