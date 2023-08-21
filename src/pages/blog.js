import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
// import { Switch, Route } from ‘react-router-dom’;
import Hello from './posts/three-body-problem';
  
const Blog = () => {
  return (
    <div class='container'
      style={{
          // alignItems: 'center',
          // justifyContent: 'center'
          color: '#E9EDDE',
        }}>
      <h1 class='title'>Blog</h1>
      <h2
        style={{
          display: 'flex',
          justifyContent: 'left',
          // padding: 'calc(8px + 1.5625vw)',
          paddingTop: '0px',
          paddingBottom: '0px',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '33px', /* 160.714% */
          letterSpacing: '2.24px',
        }}>Click on any of my blog posts below to read about what I’m learning, my thoughts on my favorite media, and more! I’m always writing more so check back here for new posts.
      </h2>
      <Link class='blog-link' to='/posts/three-body-problem'>Book Review: &nbsp;<span class="italicized">The Three-Body Problem</span>&nbsp;by Cixin Liu</Link>
      <Link class='blog-link' to='/posts/dark-forest'>Book Review: &nbsp;<span class="italicized">The Dark Forest</span>&nbsp;by Cixin Liu</Link>
      <Link class='blog-link' to='/posts/deaths-end'>Book Review: &nbsp;<span class="italicized">Death's End</span>&nbsp;by Cixin Liu</Link>

    </div>
  );
};
  
export default Blog;