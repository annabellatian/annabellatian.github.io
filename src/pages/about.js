import React from 'react';
import '../index.css';
import Fade from '../components/Animate/fade';

  
const About = () => {
  return (
    <div id="about" className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] min-h-[620px] min-w-[300px] items-center'>
      <div className='py-4'>
        <h1 className='text-6xl pb-4 sm:text-7xl font-cardif italic'>About</h1>
        <Fade>
          <h4 className='sm:text-xl text-l pb-4 font-bodyText'>
            In my third year at the <span className='italic'>University of Pennsylvania</span>, I am pursuing a Bachelor's of Science in Engineering in <span className='italic'>Computer Science</span> and an Accelerated Master's of Science in Computer Science, with minors in Math and Fine Arts.
          </h4>
        </Fade>    
        <br></br>
        <Fade>
          <h4 className='sm:text-xl text-l pb-4 font-bodyText'>
            During my time at Penn, I've worked as a developer for <a className="link" href="https://www.thedp.com/">The Daily Pennsylvanian, Inc.</a> and teaching assistant for Penn's data structures and algorithms course (<a className="link" href="https://www.cis.upenn.edu/~cis1210/current/">CIS 1210</a>)
            Most recently, I began working as a deep learning researcher under Dr. Mayur Naik, focusing on LLM inference optimization. 
            In the future, I hope to pursue a career in <span className='italic'>software engineering</span>.
          </h4>
        </Fade>
        <br></br>
        <Fade>
          <h4 className='sm:text-xl text-l pb-4 font-bodyText'>
            Other than computer science, I am also interested in philosophy, math, and visual arts. 
            In my free time, I enjoy playing the flute and piano, listening to music, and running.
          </h4>
        </Fade>
        
      </div>
    </div>
  );
};
  
export default About;