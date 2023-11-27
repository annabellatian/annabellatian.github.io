import React from 'react';
// import './Pages.css';

  
const About = () => {
  return (
    
    <div className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] min-h-[620px] min-w-[300px] items-start sm:items-center'>
      <div className='py-4'>
        <h1 className='text-6xl pb-4 sm:text-7xl font-cardif italic'>About</h1>
        <h4 className='text-l pb-4 font-bodyText'>
          I was initially drawn to computer science as a field where creativity meets innovation and logic translates to limitless possibilities. 
          Soon, I fell in love with the ability to solve problems and now I aim to leverage the field's power to shape the future by crafting new solutions for real-world challenges. 
          As such, I am currently pursuing a Bachelor's of Science in Engineering in Computer Science and an accelerated Master's of Science in Computer Science, with minors in Math and Fine Arts at the University of Pennsylvania. 
          In the future, I hope to pursue a career in software engineering.
           <br></br><br></br>
          Outside of computer science, I am also interested in philosophy, math, and economics, having taken courses in each. In my free time, I enjoy exploring these topics as well as:
        </h4>
        <div className='text-l pb-4 font-bodyText'>
          <li>Playing the flute and piano</li>
          <li>Listening to music and making playlists on Spotify</li>
          <li>Running and staying active</li>
          <li>Reading</li>
          <li>Balisong (butterfly knife) flipping</li>
        </div>
      </div>
      
    </div>
  );
};
  
export default About;