import linkedin from './media/linkedin.svg';
import github from './media/github.svg';
import spotify from './media/spotify.svg';
import instagram from './media/instagram.svg';
import youtube from './media/youtube.svg';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
import ThreeBodyProblem from './pages/posts/three-body-problem';
import DarkForest from './pages/posts/dark-forest';
import DeathsEnd from './pages/posts/deaths-end';


function App() {
  return (
    <div>
      <div class="header-container">
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/posts/three-body-problem' element={<ThreeBodyProblem/>}></Route>
          <Route path='/posts/dark-forest' element={<DarkForest/>}></Route>
          <Route path='/posts/deaths-end' element={<DeathsEnd/>}></Route>


        </Routes>
      </Router>
      </div>
      
       <div class="footer">
        <li>
          <a href='https://www.linkedin.com/in/annabellatian/'><img class="filter-white" src={linkedin} width='20'></img></a>
        </li>
        <li>
          <a href='https://github.com/annabellatian'><img src={github} width='20'></img></a>
        </li>
        <li>
          <a href='https://open.spotify.com/user/getcupcaked?si=e55d92ab55644dc6'><img src={spotify} width='20'></img></a>
        </li>
        <li>
          <a href='https://www.instagram.com/annabellatian/'><img src={instagram} width='20'></img></a>
        </li>
        <li>
          <a href='https://www.youtube.com/@annabellatian4313'><img src={youtube} width='20'></img></a>
        </li>
      </div>
    
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
