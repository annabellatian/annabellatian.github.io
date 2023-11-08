import React from 'react';
import {Link } from 'react-router-dom';
  
const Blog = () => {
  return (
    <div className='flex h-screen grow text-darkGreen mx-[15%] items-center min-h-[500px] overflow-hidden min-w-[300px]'>
      <div className='py-4'>
        <h1 className='text-5xl pb-4 sm:text-6xl'>Blog</h1>
        <h2 className='text-l pb-4 sm:text-xl'>Click on any of my blog posts below to read about what I’m learning, my thoughts on my favorite media, and more! I’m always writing more so check back here for new posts.</h2>
        <br></br>
        <Link className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxed' to='/posts/three-body-problem'>Book Review: &nbsp;<span className="italic">The Three-Body Problem Trilogy</span>&nbsp;by Cixin Liu</Link>
        <br></br>
        <Link className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxed' to='/posts/norwegian-wood'>Book Review: &nbsp;<span className="italic">Norwegian Wood</span>&nbsp;by Haruki Murakami</Link>
      </div>
    </div>
  );
};
  
export default Blog;