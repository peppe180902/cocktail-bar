import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({idDrink, strDrink, strDrinkThumb}) => {
  return (
    <div key={idDrink} className='relative'>
      <img src={strDrinkThumb} alt={strDrink}  height={200} className='pt-5 pr-5 pl-5 w-80 rounded-t-full'/>
      <div className='bg-black flex justify-between ml-5 mr-5 rounded-b-full p-2'> 
         <h3 className='text-white mt-1 text-md max flex items-center ml-5 text-center logo'>{strDrink}</h3>
        <Link to={`/cocktail/${idDrink}`} className='text-white font-bold animate-pulse p-2 hover:underline decoration-solid mr-5'>Ricetta</Link>
       </div>
    </div>
  )
}

export default Cocktail
