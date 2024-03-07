import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { TfiArrowCircleUp } from "react-icons/tfi";


const Contact = () => {
  return (


    <div id ="contact" className='contactcontainer'>


      <div className='contactcontent'>
        <div className='cont1'> <p >Contact Me</p> </div>
        <div className='cont2'> <p>You can contact me on social networks...</p> </div>
      </div>

      <div className='icons'>
       <div ><a href='https://www.linkedin.com/in/n-hemnath-40383518a' target='blank'><FaLinkedin className='linkedin icon' /></a></div>
       <div ><a href="https://www.instagram.com/_silent_eyez___?igsh=Zmp0Nm52aGtwMHpm" target='blank'><FaInstagramSquare className='insta icon'/></a></div>
       <div ><a href='https://wa.me/qr/JGDTZJUGMZA5H1' target='blank'><FaWhatsappSquare className='whatsapp icon' /></a></div>
       <div ><a href = "https://github.com/hemnath619" target='blank'><VscGithub className='github icon'/></a></div>
      </div>

      <div id="head" className='gotop'>
            <TfiArrowCircleUp  onClick={()=>{window.scroll({top:0,behavior:"smooth"})}}/>
      </div>

      <div className='footercontainer'>
        <div className='footercontent'>
          @Copyrights Designed and Hosted by Hemnath 2024
        </div>
      </div>

    </div>


  )
}

export default Contact;