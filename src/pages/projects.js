import React from 'react';
  
const Projects = () => {
  return (
    <div className='flex h-screen grow text-darkGreen mx-[15%] items-center min-h-[500px] overflow-hidden min-w-[300px]'>
      <div className='py-4'>
        <h1 className='text-5xl pb-4 sm:text-6xl'>Projects</h1>
        <h2 className='text-l pb-4 sm:text-xl'>Click on any of my projects below to see what I’ve worked on and what I’m currently working on. I’m always working on more and updating my GitHub more so check back here for new project updates</h2>
        <br></br>
        <a className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxed' href='https://github.com/annabellatian/personal-website'>Personal Website</a>
        <br></br>
        <a className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxedk' href='https://github.com/annabellatian/minesweeper'>Minesweeper</a>
        <br></br>
        <a className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxedk' href='https://github.com/annabellatian/mun-debate-software'>Model UN Debate Software</a>
        <br></br>
        <a className='text-xl text-darkGreen underline decoration-solid font-light leading-relaxed' href='https://github.com/annabellatian/google-cal-scheduler'>Google Calendar Class Scheduler</a>
      </div>
    </div>
  );
};
  
export default Projects;