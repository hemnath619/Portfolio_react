import React from 'react'
import Header from './Header';
import About from "./About";
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './Navbar';


const Home = () => {
  return (<>
   <div className='maincontainer'>
    <Navbar/>
     <Header/> 
      <About/>
      <Portfolio/>
      <Contact/>
      </div>
      </>)
}

export default Home;