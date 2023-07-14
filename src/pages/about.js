import React from 'react';
import './Pages.css';

  
const About = () => {
  return (
    <div
      style={{
        color: '#E9EDDE',
      }}>
      <h1 class='title'>About</h1>
      <h3
        style={{
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // paddingLeft: '10%',
          // paddingRight: '10%',
          position: 'absolute',
          left: '170px',
          right: '150px',
          top: '210px',

//           color: rgba(233, 237, 222, 0.90),
// fontFamily: Inter,
fontSize: '25px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '33px', /* 160.714% */
letterSpacing: '2.24px',
        }}>Going into my second-year at the University 
        of Pennsylvania, I am excited to continue 
        pursuing a BSE in Computer Science and 
        hope to pursue a career in software 
        engineering after graduation.
      </h3>
      <div>
        
      </div>
      <h4
      style={{
          display: 'flex',
          position: 'absolute',
          left: '170px',
          right: '150px',
          top: '340px',
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
          position: 'absolute',
          left: '180px',
          right: '150px',
          top: '510px',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '25px', /* 160.714% */
          letterSpacing: '0.84px',
          flexDirection: 'column',
        }}>
          <li>Playing the flute and piano</li>
        <li>Listening to music and making playlists on Spotify</li>
        <li>Reading (when I make the time for it)</li>
        </div>
      
        {/* <h1
        style={{
          display: 'flex',
          fontSize: '40px',
          letterSpacing: '0.1em',
          // position: 'relative',
          position: 'absolute',
          left: '170px',
          top: '600px',
        }}>Music</h1>

<h3
        style={{
          display: 'flex',
          position: 'absolute',
          left: '170px',
          right: '150px',
          top: '660px',
fontSize: '25px',
fontStyle: 'normal',
fontWeight: '500',
lineHeight: '33px',
letterSpacing: '2.24px',
        }}>With a constantly evolving taste in music, I am always listening to new genres and artists! Click through the carousel below to see some of my favorite albums.

      </h3>

      <h1
        style={{
          display: 'flex',
          fontSize: '40px',
          letterSpacing: '0.1em',
          // position: 'relative',
          position: 'absolute',
          left: '170px',
          top: '640px',
        }}>Reading</h1>

<h3
        style={{
          display: 'flex',
          position: 'absolute',
          left: '170px',
          right: '150px',
          top: '660px',
fontSize: '25px',
fontStyle: 'normal',
fontWeight: '6700',
lineHeight: '33px', 
letterSpacing: '2.24px',
        }}>What I’m currently reading and some of my recent favorites!
      </h3> */}
    </div>
  );
};
  
export default About;