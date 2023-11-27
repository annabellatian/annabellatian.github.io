import React from 'react';
import arrow from './learnMoreArrow.svg';
import {Link} from "react-router-dom";
// import './Pages.css';


const Home = () => {
  return (
    <div className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] min-h-[550px] sm:min-h-[600px] min-w-[300px] items-start sm:items-center'>
      <div className='py-4'>
        <div className='text-5xl pb-4 sm:text-6xl flex-row'>
          <h1 className='font-amerton text-[5rem]'>Hi, I'm <span class='font-cardif italic'>Annabella</span></h1>
        </div>
        <div className='flex pb-3'>
          <h2 className='inline-block text-2xl pb-4 sm:text-3xl font-bodyText'>A student&nbsp;</h2>
          <span className='inline-block font-cardif italic text-5xl align-center'>&</span> 
          <h2 className='inline-block text-2xl pb-4 sm:text-3xl font-bodyText'>&nbsp;aspiring software engineer</h2>
        </div>
        
        <h4 className='text-l sm:text-xl font-bodyText'>In my second-year at the <span className='italic'>University of Pennsylvania</span>, I am pursuing a Bachelor's of Science in Engineering in <span className='italic'>Computer Science</span> and an accelerated Master's of Science in Computer Science, with minors in Math and Fine Arts. In the future, 
          I hope to pursue a career in <span className='italic'>software engineering</span> and am currently looking for technical internships for the summer of 2024 to gain experience in industry.
        </h4>
        <div className='flex items-center pt-8 pb-4 font-bodyText'>
          <h4 className='font-semibold'>Learn more about me</h4>
          <div className='px-8'><Link to='/about'><img src={arrow} width='60' color='#36413E'></img></Link></div>
        </div> 
      </div>          
    </div>
      
  );
};
  
export default Home;