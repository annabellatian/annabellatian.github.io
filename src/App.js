import linkedin from './media/linkedin.svg';
import github from './media/github.svg';
import spotify from './media/spotify.svg';
import instagram from './media/instagram.svg';
import youtube from './media/youtube.svg';

import './App.css';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
// import Contact from './pages/contact';
import ThreeBodyProblem from './pages/posts/three-body-problem';
import NorwegianWood from './pages/posts/norwegian-wood';



function App() {
  return (
    <div class='h-screen w-full flex flex-col overflow-auto bg-gradient-radial from-purple-600 via-pink-600 to-blue-600'>
        <Router>
        <Navbar/>
            <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            {/* <Route path='/contact' element={<Contact/>}></Route> */}
            <Route path='/posts/three-body-problem' element={<ThreeBodyProblem/>}></Route>
            <Route path='/posts/norwegian-wood' element={<NorwegianWood/>}></Route>
            </Routes>          
      </Router>
      <div class="w-full bottom-0 h-16 list-none flex list-none space-x-10 justify-center items-center min-w-[300px] my-4">
        <li>
          <a href='https://www.linkedin.com/in/annabellatian/'><img src={linkedin} width='25'></img></a>
        </li>
        <li>
          <a href='https://github.com/annabellatian'><img src={github} width='25'></img></a>
        </li>
        <li>
          <a href='https://open.spotify.com/user/getcupcaked?si=e55d92ab55644dc6'><img src={spotify} width='25'></img></a>
        </li>
        <li>
          <a href='https://www.instagram.com/annabellatian/'><img src={instagram} width='25'></img></a>
        </li>
        <li>
          <a href='https://www.youtube.com/@annabellatian4313'><img src={youtube} width='25'></img></a>
        </li>
      </div>
    
    </div>
  );
}

export default App;
