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
       <div ><FaLinkedin className='linkedin icon' /></div>
       <div ><FaInstagramSquare className='insta icon'/></div>
       <div ><FaWhatsappSquare className='whatsapp icon' /></div>
       <div ><VscGithub className='github icon' /></div>
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