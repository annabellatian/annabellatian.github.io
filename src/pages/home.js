import React from 'react';
import arrow from './learnMoreArrow.svg';
import {Link} from "react-router-dom";
import './Pages.css';


const Home = () => {
  return (
    <div class='container'
      style={{
        color: '#E9EDDE',
      }}>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'left',
          fontSize: '60px',
          letterSpacing: '0.1em',
          paddingLeft: 'calc(8px + 1.5625vw)',
          paddingRight: 'calc(8px + 1.5625vw)',
          paddingBottom: '0px',
          paddingTop: '15%',
          }}>I'M ANNABELLA TIAN.
        </h1>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'left',
            fontSize: '45px',
            paddingRight: 'calc(8px + 1.5625vw)',
            paddingLeft: 'calc(8px + 1.5625vw)',
            paddingTop: '0px',
            paddingBottom: '0px',
            letterSpacing: '0.1em',
            textTransform: 'capitalize',
          }}>
          A student & aspiring software engineer
        </h2>
        <h3
          style={{
            display: 'flex',
            justifyContent: 'left',
            padding: 'calc(8px + 1.5625vw)',
            paddingTop: '0px',
            paddingBottom: '0px',
            position: 'relative',
            letterSpacing: '0.05em',
            fontSize: '22px',
          }}>In my second-year at the University of Pennsylvania, I am pursuing a BSE in Computer Science. Outside of my major, I also have interests in philosophy, math, and economics. In the future, 
          I hope to pursue a career in software engineering.
        </h3>
        <div
          style={{
            float: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            padding: 'calc(8px + 1.5625vw)',
            fontSize: '18px',
        }}>
          <h4
            style={{
              paddingRight: '10px'
            }}>Learn more about me</h4>
          <div><Link to='/about'><img src={arrow} width='60' color='#E9EDDE'></img></Link></div>
        </div>
      </div>
  );
};
  
export default Home;