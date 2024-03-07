import React from 'react';
import "./home.css";
import image1 from "../Assets/1.png";


const Portfolio = () => {
  
  return (<>

     <div id ="port"  className='portmain'>

     <div className='portfoliohead'><p>PROTFOLIO</p></div>

      <div className='portfoliocontent'>
        <img src={image1}/>
        <p className='text'>Todo App<br/>This Todo App is my first project in which a User is signedin first and 
        those users data is hashed in MongoDb for data security and can Log into the web app using username and password. 
        Once the User is Logged in sucessfully a token ( Jwt Authetication Method ) is generated for that specific user 
        with the help of the token only he/she can add their Tasks for the day.
        they have their controls on the added task's like edit the task and save it further
        they can also remove the task once they have completed them. These CRUD ( CREATE, READ, UPDATE, DELETE ) operations
        can only be performed by the user if he/she has a valid token and those are acheived by MERN Stack,
         Frontend is handled by React Js and Backend is handled by MongoDb,
        those two ends's are interconnected by Express JS(Nodejs).
        </p>
      </div>

     </div>

</>)
}

export default Portfolio;