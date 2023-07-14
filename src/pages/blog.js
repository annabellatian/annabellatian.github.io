import React from 'react';
  
const Blog = () => {
  return (
    <div
    style={{
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
        color: '#E9EDDE',
      }}
    >
      <h1 class='title'>Blog</h1>
      <h3
        style={{
          display: 'flex',
          position: 'absolute',
          left: '170px',
          right: '150px',
          top: '210px',
fontSize: '20px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '33px', /* 160.714% */
letterSpacing: '2.24px',
        }}>Click on any of my blog posts below to read about what I’m learning, my thoughts on my favorite media, and more! I’m always writing more so check back here for new posts.
      </h3>
    </div>
  );
};
  
export default Blog;