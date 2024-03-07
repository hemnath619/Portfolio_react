import React from 'react';
import "./home.css";
import image1 from "../Assets/1.png";


const Portfolio = () => {
  
  return (<>

     <div id ="port"  className='portmain'>

     <div className='portfoliohead'><p>PROTFOLIO</p></div>

      <div className='portfoliocontent'>
        <img src={image1}/>
      </div>

     </div>

</>)
}

export default Portfolio;