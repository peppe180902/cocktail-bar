import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faHouse,faUsers, faMessage,faBars } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from './context'


const Navbar = () => {
    const {openSidebar, isSidebarOpen} = useGlobalContext()
    return (

        <nav className={`flex justify-between shadow-lg items-center sticky top-0 z-50 bg-white ${isSidebarOpen ? 'collapse' : 'visible'}`}>
            <div className='p-4 ml-3'>
                <Link to={'/'} className='logo text-3xl text-purple-700'>CV</Link>
                {/* <img src='/src/assets/Logo.png' width={80} className='transform transition duration-300 ease-in-out hover:scale-125'/> */}
            </div>
            <div className='p-4 hamburgher'>
                <Link to={'/'} className='text-purple-700 mr-36 text-xl hover:text-fuchsia-600 logo'><FontAwesomeIcon icon={faHouse} className='mr-3'/>Home</Link>
                <Link to={'/about'} className='text-purple-700 mr-36 text-xl hover:text-fuchsia-600 logo'><FontAwesomeIcon icon={faUsers} className='mr-3'/>About </Link>
                <Link to={'/contattaci'} className='text-purple-700 text-xl hover:text-fuchsia-600 logo'><FontAwesomeIcon icon={faMessage} className='mr-3'/>Contattaci</Link>
            </div>
            <div className='p-4 flex hamburgher'>
                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125'/></a>
                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125' /></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125'/></a>
            </div>
                <button className=' bg-white menu' onClick={openSidebar}>
                    <FontAwesomeIcon icon={faBars} className='text-4xl mr-4 text-purple-700 transform transition duration-300 ease-in-out hover:rotate-90 hover:scale-125 cursor-pointer'/>
                </button>
        </nav>
    )
}

export default Navbar
