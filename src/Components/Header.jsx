import React, { useRef } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import "./home.css"


const Header = () => {

 
  const route = useRef < HTMLDivElement | null > (null);


  const [text] = useTypewriter({
    words:["MERN Stack Developer", "Web Designer"],
    loop:{},
    typeSpeed:150,
    deleteSpeed:70,
  })


  return (<>

      <div  id ="head" className='homecontent'>

        <div className='content1'>
          <span className='name'>Hello, I'm Hemnath</span>
         </div>
         
         <div className='dynamic-content'>
            <span style={{fontWeight:"bold",fontFamily:"sans-serif",color:"rgb(86, 207, 255)"}}>{text}</span>
            <span style={{color:"red"}}><Cursor/></span> 
         </div>


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