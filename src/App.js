import './index.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
// import Blog from './pages/blog';
// import Contact from './pages/contact';
// import ThreeBodyProblem from './pages/posts/three-body-problem';
// import NorwegianWood from './pages/posts/norwegian-wood';
import Magnetic from './components/Animate/magnetic';


function App() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('annabellaphoenixtian@gmail.com')
    window.alert('Copied to clipboard!')
  };

  return (
    <div className='bg-offWhite h-full w-full'>
      <div class='flex flex-col'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            {/* <Route path='/blog' element={<Blog/>}></Route> */}
            <Route path='/projects' element={<Projects/>}></Route>
            {/* <Route path='/contact' element={<Contact/>}></Route> */}
            {/* <Route path='/posts/three-body-problem' element={<ThreeBodyProblem/>}></Route>
            <Route path='/posts/norwegian-wood' element={<NorwegianWood/>}></Route> */}
            <Route path='/*' element={<Home/>}></Route>
          </Routes>          
        </Router>
        <div class="w-full bottom-0 h-16 list-none flex list-none space-x-12 sm:space-x-24 justify-center items-center min-w-[300px] min-h-[64px] my-4">
          <li>
            <Magnetic>
              <a href='https://www.linkedin.com/in/annabellatian/'>
                <svg className="footer-link" width="auto" height="30px" viewBox="0 0.4 24 24"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/></svg>
              </a>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <a href='https://github.com/annabellatian'>
              <svg className="footer-link" width="auto" height="30px" viewBox="0 -0.4 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </Magnetic>
          </li>
          <li>
            <Magnetic>
              <a href='https://open.spotify.com/user/getcupcaked?si=e55d92ab55644dc6'>
                <svg className="footer-link align-center justify-center" width="auto" height="30px" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>
              </a>
            </Magnetic>
          </li>
          {/* <li>
            <a href='https://www.instagram.com/annabellatian/'><img src={instagram} width='25'></img></a>
          </li> */}
          <li>
            <Magnetic>
              <a href='https://www.youtube.com/@annabellatian4313'>
                <svg className="footer-link" width="auto" height="32px" viewBox="0 0 24 24" >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </Magnetic>
          </li>
          <li className='my-0 flex'>
            <Magnetic>
              <button className="self-center hover:fill-lightBlue transition ease-in-out delay-75" onClick={copyToClipboard}>
                <svg className="footer-link hover:fill-lightBlue transition ease-in-out delay-75" width="auto" height="36px" viewBox="-0.5 -0.5 25 25" class="size-6">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

              </button>
            </Magnetic>
          </li>
        </div>
      </div>    
    </div>
    
  );
}

export default App;
