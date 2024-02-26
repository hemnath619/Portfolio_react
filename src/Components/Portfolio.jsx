import React from 'react';
import "./home.css";
import image1 from "../Assets/1.png";


const Portfolio = () => {
  
  return (<>

     <div id ="port" className='portfoliohead'><p>PROTFOLIO</p></div>

     <div className='portfoliocontainer'> 
      <div className='portfoliocontent'>
        <img src={image1}/>
        <div className='portfoliotext'> 
        <div className='text'><p>Todo App</p></div>
        </div>
      </div>
     </div>

</>)
}

export default Portfolio;