import React from 'react';
  
const About = () => {
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>About Me</h1>
      <h3
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '10%',
          paddingRight: '10%'
        }}>I'm in my second-year at the University of Pennsylvania pursuing a BSE in Computer Science. Outside of my major, I also have interests in computer architecture, philosophy, math, and economics. In the future, I hope to pursue a career in software engineering. 
        <br></br><br></br>In my free time, I enjoy playing the flute in the Penn Symphony and practicing piano. I also love making playlists on Spotify and running when I can!
      </h3>
    </div>
  );
};
  
export default About;