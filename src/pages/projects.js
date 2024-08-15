import React from 'react';
import Fade from '../components/Animate/fade';
  
const Projects = () => {
  return (
    <div id="projects" className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] items-center min-h-[500px] min-w-[300px]'>
      <div className='py-4'>
        <h1 className='text-6xl pb-4 sm:text-7xl font-cardif italic'>Projects</h1>
        <h2 className='text-l pb-4 sm:text-xl font-bodyText'>Click on any of my projects below to see what I've worked on.</h2>
        <br></br>
        <Fade>
          <a className='project-link pointer-events-none' href="">Instagram-Lite Web App (contact for access) </a>
        </Fade>
        <Fade>
          <a className='project-link link' href="https://github.com/kuomat/Hotel_Reviews_Website">Travel Planning Website</a>
        </Fade>
        <Fade>
          <a className='project-link link' href='https://github.com/annabellatian/personal-website'>Personal Website</a>
        </Fade>
        <Fade>
          <a className='project-link link' href='https://github.com/annabellatian/minesweeper'>Minesweeper</a>
        </Fade>
        <Fade>
          <a className='project-link link' href='https://github.com/annabellatian/mun-debate-software'>Model UN Debate Software</a>
        </Fade>
        <Fade>
          <a className='project-link link' href='https://github.com/annabellatian/google-cal-scheduler'>Google Calendar Class Scheduler</a>
        </Fade>
      </div>
    </div>
  );
};
  
export default Projects;