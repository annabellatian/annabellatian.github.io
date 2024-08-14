import React, {useEffect} from 'react';
import arrow from '../media/learnMoreArrow.svg';
import {Link} from "react-router-dom";
import styles from '../index.css'
import About from './about';
import Projects from './projects';
import Blog from './blog';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navItems = document.querySelectorAll('.nav-button');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        console.log(sectionTop , section.offsetHeight , "" , section , scrollPosition, sectionBottom);

        if (scrollPosition + 400 >= sectionTop && scrollPosition + 200 < sectionBottom) {
          window.history.replaceState(null, null, `#${section.id}`);
          navItems.forEach(function(elem, index) {
            elem.classList.remove("active");
            const filteredItems = [...navItems].filter(elem => elem.getAttribute("id") === `${section.id}-button`);
            filteredItems[0].classList.add("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const scrolle = (id) => { 
    const element = document.getElementById(id);
    if (element) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
  }

  return (
    <div>
      <section id="home">
        <div className='flex h-screen grow text-textColor mx-[10%] sm:mx-[15%] min-h-[550px] sm:min-h-[600px] min-w-[300px] items-start sm:items-center'>
          <div>
            <div className='text-5xl pb-4 sm:text-6xl flex-row'>
              <h1 className='font-amerton text-[5rem]'>Hi, I'm <span class='font-cardif italic'>Annabella</span></h1>
            </div>
            <div className='flex pb-3'>
              <h2 className='inline-block text-2xl pb-4 sm:text-3xl font-bodyText'>A student&nbsp;</h2>
              <span className='px-1 inline-block font-cardif italic text-5xl align-center'>&</span> 
              <h2 className='inline-block text-2xl pb-4 sm:text-3xl font-bodyText'>&nbsp;aspiring software engineer</h2>
            </div>
            
            {/* <h4 className='text-l sm:text-xl font-bodyText'>In my third year at the <span className='italic'>University of Pennsylvania</span>, I am pursuing a Bachelor's of Science in Engineering in <span className='italic'>Computer Science</span> and an Accelerated Master's of Science in Computer Science, with minors in Math and Fine Arts. In the future, 
              I hope to pursue a career in <span className='italic'>software engineering</span> and am currently looking for technical internships for the summer of 2025 to gain experience in industry.
            </h4> */}
            <div className='flex items-center pt-4 font-bodyText h-16'>
              <h4 className='font-semibold'>Learn more about me</h4>
              <div className='px-8 pt-2'>
                <Link to='#about'><button onClick={() => scrolle('about')}>
                  <svg className='learn-more-btn fill-darkGray' width="73" height="20" viewBox="0 0 73 20" fill="#36413E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.8086 10.8839C72.2967 10.3957 72.2967 9.60427 71.8086 9.11612L63.8536 1.16117C63.3655 0.67301 62.574 0.67301 62.0858 1.16117C61.5977 1.64932 61.5977 2.44078 62.0858 2.92893L69.1569 10L62.0858 17.0711C61.5977 17.5592 61.5977 18.3507 62.0858 18.8388C62.574 19.327 63.3655 19.327 63.8536 18.8388L71.8086 10.8839ZM0.606323 11.25H70.9247V8.75H0.606323V11.25Z"/>
                  </svg>
                </button></Link></div>
            </div> 
          </div>          
        </div>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      {/* <section id="blog">
        <Blog/>
      </section> */}
    </div>
  );
};
  
export default Home;