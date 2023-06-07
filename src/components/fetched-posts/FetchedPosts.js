import React from 'react';
import Post from "../post/Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/actions";

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => {
        return state.posts.fetchedPosts;
    });
    const loading = useSelector(state => {
        return state.app.loading;
    });

    if (loading) {
        return (<div>LOADING!!!</div>);
    }
    if (!posts.length) {
        return (<button onClick={() => {
            dispatch(fetchPosts());
        }}>Загрузить</button>);
    }

    return posts.map((post) => <Post post={post} key={post.id}/>);
}
