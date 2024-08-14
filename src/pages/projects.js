import React from 'react';
  
const Projects = () => {
  return (
    <div id="projects" className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] items-center min-h-[500px] min-w-[300px]'>
      <div className='py-4'>
        <h1 className='text-6xl pb-4 sm:text-7xl font-cardif italic'>Projects</h1>
        <h2 className='text-l pb-4 sm:text-xl font-bodyText'>Click on any of my projects below to see what I've worked on.</h2>
        <br></br>
        <button className='project-link' href="">Instagram-Lite Web App (contact for access) </button>
        <br></br>
        <a className='project-link' href="https://github.com/kuomat/Hotel_Reviews_Website">Travel Planning Website</a>
        <br></br>
        <a className='project-link' href='https://github.com/annabellatian/personal-website'>Personal Website</a>
        <br></br>
        <a className='project-link' href='https://github.com/annabellatian/minesweeper'>Minesweeper</a>
        <br></br>
        <a className='project-link' href='https://github.com/annabellatian/mun-debate-software'>Model UN Debate Software</a>
        <br></br>
        <a className='project-link' href='https://github.com/annabellatian/google-cal-scheduler'>Google Calendar Class Scheduler</a>
      </div>
    </div>
  );
};
  
export default Projects;