import React from 'react';
import "./home.css";
import image1 from "../Assets/1.png";
import { TfiAngleDoubleRight } from "react-icons/tfi";



const Portfolio = () => {
  
  return (<>

     <div id ="port"  className='portmain'>

     <div className='portfoliohead'><p>PROTFOLIO</p></div>

        <div className='wrapper'>
                <div className='portimage'>
                  <img src={image1}/>
                  <div className='portcontent'>
                    <h1>Todo App</h1>
                    <p>
                      <ul>
                        <li>Login to the App using his/her credidentials, if you are new please signup first.</li>
                        <li>A unique token is generated after sucessfull login.</li>
                        <li>Now he/she can add their todo's of the day.</li>
                        <li>JWT Authentication is included in this project in which loggedin user is only authorised to per the below task</li>
                        <li>User has the control to edit and delete the todo's when completed.</li>
                        <li>The todo's are stored in MongoDb database.</li>
                      </ul>
                    </p>

                    <a href = "https://github.com/hemnath619" target='blank'><TfiAngleDoubleRight className='knowmore'/></a>
                    
                    </div>
                </div>
              </div>

      </div>


   
    
      
     


    


</>)
}

export default Portfolio;