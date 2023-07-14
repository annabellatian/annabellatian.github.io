import React from 'react';
  
const Projects = () => {
  return (
    <div
    style={{
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
        color: '#E9EDDE',
      }}
    >
      <h1 class='title'>Projects</h1>
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
lineHeight: '33px',
letterSpacing: '2.24px',
        }}>Click on any of my projects below to see what I’ve worked on and what I’m currently working on. I’m always working on more and updating my GitHub more so check back here for new project updates
      </h3>
    </div>
  );
};
  
export default Projects;