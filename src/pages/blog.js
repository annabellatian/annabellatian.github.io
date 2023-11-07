import React from 'react';
import {Link } from 'react-router-dom';
  
const Blog = () => {
  return (
    <div class='page-container'>
      <div class='text-scroll-container'>
        <h1 class='text-5xl pb-4 sm:text-6xl'>Blog</h1>
        <h2 class='text-l pb-4 sm:text-xl'>Click on any of my blog posts below to read about what I’m learning, my thoughts on my favorite media, and more! I’m always writing more so check back here for new posts.</h2>
        <br></br>
        <Link class='blog-link' to='/posts/three-body-problem'>Book Review: &nbsp;<span class="italicized">The Three-Body Problem Trilogy</span>&nbsp;by Cixin Liu</Link>
        <br></br>
        <Link class='blog-link' to='/posts/norwegian-wood'>Book Review: &nbsp;<span class="italicized">Norwegian Wood</span>&nbsp;by Haruki Murakami</Link>
      </div>
      
    </div>
  );
};
  
export default Blog;