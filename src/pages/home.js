import React from 'react';
import arrow from './learnMoreArrow.svg';
import {Link} from "react-router-dom";
import './Pages.css';


const Home = () => {
  return (
    <div class='page-container'>
      <div class='text-scroll-container'>
        <h1 class='text-5xl pb-4 sm:text-6xl'>Hi, I'm Annabella
        </h1>
        <h2 class='text-2xl pb-4 sm:text-3xl'>
          A student & aspiring software engineer
        </h2>
        <h4 class='text-l sm:text-xl'>In my second-year at the University of Pennsylvania, I am pursuing a Bachelor's of Science in Engineering in Computer Science and an accelerated Master's of Science in Computer Science, with minors in Math and Fine Arts. In the future, 
          I hope to pursue a career in software engineering and am currently looking for technical internships for the summer of 2024 to gain experience in industry.
        </h4>
        <div class='flex items-center pt-8'>
          <h4 class='font-semibold'>Learn more about me</h4>
          <div class='px-8'><Link to='/about'><img src={arrow} width='60' color='#36413E'></img></Link></div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;