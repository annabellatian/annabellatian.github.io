import React from 'react';
import arrow from './learnMoreArrow.svg';
import {Link} from "react-router-dom";
import './Pages.css';


const Home = () => {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'Right',
    //     alignItems: 'Right',
    //     height: '100vh'
    //   }}
    // >
    //   <h1>Home</h1>
      
    // </div>
    <div
      style={{
        color: '#E9EDDE',
      }}>
        <h1
          style={{
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // textAlign: 'left',
            fontSize: '60px',
            letterSpacing: '0.1em',
            // padding: '15%',
            // paddingTop: '60px',
            // position: 'relative',
            position: 'absolute',
width: '998.45px',
height: '75px',
left: '170px',
top: '190px',

          }}>I'M ANNABELLA TIAN.
        </h1>
        <h2
          style={{
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            fontSize: '40px',
            letterSpacing: '0.1em',
            textTransform: 'capitalize',
            position: 'absolute',
width: '1035.92px',
height: '64px',
left: '170px',
top: '271px',
          }}>
          A student & aspiring software engineer
        </h2>
        <h3
          style={{
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            position: 'absolute',
width: '1099px',
height: '241px',
left: '170px',
top: '379px',
          }}>In my second-year at the University of Pennsylvania, I am pursuing a BSE in Computer Science. Outside of my major, I also have interests in philosophy, math, and economics. In the future, 
          I hope to pursue a career in software engineering.
        </h3>

        <h4
          style={{
            display: 'flex',
            position: 'absolute',
width: '282.22px',
height: '64px',
left: '170px',
top: '550px',
        }}>
          Learn more about me
        </h4>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
width: '282.22px',
height: '64px',
left: '355px',
top: '573px'}}>
          <Link to='/about'><img src={arrow} width='60' color='#E9EDDE'></img></Link>
        </div>
        
      </div>
  );
};
  
export default Home;