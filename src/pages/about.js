import React from 'react';
import './Pages.css';

  
const About = () => {
  return (
    <div class='container'
      style={{
        color: '#E9EDDE',
      }}>
      <h1 class='title'>About</h1>
      <h2>Going into my second-year at the University of Pennsylvania, I am excited to continue pursuing a BSE in Computer Science and hope to pursue a career in software engineering after graduation.</h2>
      <h4
      style={{
          display: 'flex',
          justifyContent: 'left',
          // padding: 'calc(8px + 1.5625vw)',
          paddingTop: '0px',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '28px', /* 160.714% */
          letterSpacing: '0.84px',
        }}>
          Through computer science, I fell in love with the ability to solve problems. Additionally, the interdisciplinary nature of the field allows me to pursue any interest or hobby of mine through the lens of computer science. <br></br><br></br>
          Outside of computer science, I am also interested in philosophy, math, and economics, having taken courses in each. In my free time, I enjoy exploring these topics as well as:
      </h4>
      <div
        style={{
          display: 'flex',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '25px', /* 160.714% */
          letterSpacing: '0.84px',
          flexDirection: 'column',
          marginLeft: '1rem',
        }}>
          <li>Playing the flute and piano</li>
          <li>Listening to music and making playlists on Spotify</li>
          <li>Reading (when I make the time for it)</li>
        </div>
    </div>
  );
};
  
export default About;