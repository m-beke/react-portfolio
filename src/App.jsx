import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className='appHeader'>
        <Header />
        <Navbar />
      </div>
      <div className='aboutPage'>
        <div className='mainHeading'>
          <h1>ABOUT</h1>
        </div>
        <div className='aboutP'>
          <p>My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me. My name is blank and this is a paragraph about me.</p>
        </div>
      </div>
      <footer className='appFooter'>
        <Footer />
      </footer>
    </>
  )
}

export default App
