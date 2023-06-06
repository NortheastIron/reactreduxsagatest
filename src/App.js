import React from 'react';

import './App.css';
import PostForm from './components/post-form/PostForm';
import Posts from './components/posts/Posts';
import FetchedPosts from './components/fetched-posts/FetchedPosts';


function App() {
  return (
    <div className='app'>
      <div className='row'>
        <div className='col'>
          <PostForm/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Синхронные посты</h2>
          <Posts posts={[1,2,3]}/>
        </div>
        <div className='col'>
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
