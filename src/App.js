//react
import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

//viwes
import Home from './views/Home/Home'
import Project from './views/Project/Project'

//theme
import ThemeProvider from './theme'

import './App.css'
import Footer from './components/footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectId" element={<Project/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
