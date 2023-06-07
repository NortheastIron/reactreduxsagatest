import React from 'react';
import {connect} from 'react-redux';
import Post from "../post/Post";

const Posts = ({syncPosts}) => {
    return syncPosts.length ? syncPosts.map((post) => <Post post={post} key={post.id}/>) : (<p>Постов нет</p>);
};

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    };
};

export default connect(mapStateToProps, null)(Posts);
