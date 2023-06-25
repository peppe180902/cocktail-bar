import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Error from '/Users/giuseppenapoli/Desktop/cocktail-bar/cocktail-bar/src/assets/Error-404.json'

const ErrorScreen = () => {
  return (
    <Wrapper>
        <h3 className='text-purple-700 uppercase text-3xl font-extralight'>Pagina non trovata</h3>
        <Lottie animationData={Error} className='w-96'/>
        <Link to={'/'} className='bg-purple-700 text-white p-3 rounded-full'>
            TORNA IN HOME
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section` 
    min-height: 86.2vh;
    display: grid;
    place-items: center;
    @media screen and (min-width: 992px){
        min-height: 84.5vh;
    }
`;

export default ErrorScreen
