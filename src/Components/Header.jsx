import React, { useRef } from 'react';
import "./home.css"


const Header = () => {

  const route = useRef < HTMLDivElement | null > (null)
  return (<>
      <div  id ="head" className='homecontent'>
        <div className='content1 content'><span className='name'>Hi, i am Hemnath</span><br/> <span >MERN FULLSTACK DEVELOPER</span> </div>
        <div className='content2 content'> <p>I can create effective Websites for your Business</p> </div>
        <div className='content3 content'>
           <p onClick={() => {const element = document.getElementById('contact')
                              element.scrollIntoView({ behavior: 'smooth' })
                              }}>Contact</p> 
        </div>
      </div>
  </>);
}

export default Header;