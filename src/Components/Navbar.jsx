import React,{useRef} from 'react';
import { MdAllInclusive } from "react-icons/md";


const Navbar = () => {

    const route = useRef < HTMLDivElement | null > (null)

    return (<>
        <div className='navcontainer'>

            <div className='navheader'>

                <MdAllInclusive className='logo' 
                    onClick={() => {
                    const element = document.getElementById('head')
                    element.scrollIntoView({ behavior: 'smooth' })
                }}/>

                <p className='item1 item' onClick={() => {
                    const element = document.getElementById('head')
                    element.scrollIntoView({ behavior: 'smooth' })
                }}>Home
                </p>

                <p className='item2 item' onClick={() => {
                    const element = document.getElementById('about')
                    element.scrollIntoView({ behavior: 'smooth' })
                }}>About
                </p>

                <p className='item3 item' onClick={() => {
                    const element = document.getElementById('port')
                    element.scrollIntoView({ behavior: 'smooth' })
                }}>Portfolio
                </p>

                <p className='item4 item' onClick={() => {
                    const element = document.getElementById('contact')
                    element.scrollIntoView({ behavior: 'smooth' })
                }}>Contact
                </p>
            </div>
            </div>

        </>)
}

        export default Navbar;