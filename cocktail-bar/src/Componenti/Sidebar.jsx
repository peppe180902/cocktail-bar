import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closedSidebar } = useGlobalContext()
  return <Wrapper className={isSidebarOpen ? 'show-sidebar' : ''}>
    <div className="sidebar-content">
      <header>
        <button onClick={closedSidebar}>
        <Link to={'/'} className='logo text-3xl text-purple-700 bg-white'>Cocktail Verse</Link>
        {/* <Link to={'/'}><img src='src/assets/Logo.png' width={200} className=' transform transition duration-300 ease-in-out hover:scale-125 p-5 bg-white' /></Link> */}
        </button>
        <button className="m-4 bg-white" onClick={closedSidebar}>
          <FontAwesomeIcon icon={faCircleXmark} className="text-5xl text-purple-700" />
        </button>
      </header>
      <div className='p-4 flex flex-col text-center'>
        <button className='bg-white' onClick={closedSidebar}>
          <Link to={'/'} className='text-purple-700 text-5xl hover:text-fuchsia-600 logo'>Home</Link>
        </button>
        <button className='bg-white mt-6' onClick={closedSidebar}>
          <Link to={'/about'} className='text-purple-700 text-5xl hover:text-fuchsia-600 logo'>About </Link>
        </button>
        <button className='bg-white mt-6' onClick={closedSidebar}>
          <Link to={'/contattaci'} className='text-purple-700 text-5xl hover:text-fuchsia-600 logo'>Contattaci</Link>
        </button>
      </div>
      <div className="flex mt-11">
        <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125' /></a>
        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125' /></a>
        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className='text-3xl mr-6 text-purple-700 cursor-pointer hover:scale-125' /></a>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.aside`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  visibility: hidden;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
  z-index: 2;
  .sidebar-content {
    width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    place-items: center;
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .sidebar-links {
      margin-left: 0;
      place-items: center;
      display: grid;
      gap: 2rem;
      font-variant: small-caps;
      .link {
        padding: 0.2rem 0.725rem;
        border-radius: var(--btn-radius);
        transition: var(--transition);
        &:hover {
          background-color: var(--bg-blue);
        }
      }
    }
  }
`;

export default Sidebar;

