import React from 'react';
import './App.css';

const Home = () => {
  return (
   <div className='container1'>
      <div className="left">
        <img className='icon' src='Screenshot_669 1.png' alt='imgg' />
        <span className="largeText">Discover The <span className='best'>Best</span>Food and Drinks</span>
        <p className="smallText">Naturally made Healthcare Products for the better care & support of your body.</p>
        <button className='exploreBtn' >Explore Now!</button>
      </div>
      <div className="right">
        <img className='rectangle' src='Rectangle 400.png' alt='imgg' />
        <img className='vector1' src='Vector 1.png' alt='img' />
        <button  className='getTouchBtn'>Get in Touch</button>   
      </div>
   </div>
  )
}

export default Home;
