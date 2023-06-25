import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import Drink from '/Users/giuseppenapoli/Desktop/cocktail-bar/cocktail-bar/src/assets/Drink.json'
import Cocktail from './Cocktail'
import useFetch from './useFetch'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const Home = () => {
  const { query, handleChange, handleSubmit, handleClick } = useGlobalContext()
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  const { data } = useFetch(url)

  useEffect(() => {
    const { log } = console
    log(query)
  }, [query])

  return (
    <div>
      <div className='hero-img-container'>
        <div className='hero-overlay'>
          <div className='container hero-container'>
            <div className='home-hero'>
              <div className='home-hero-text mt-6'>
                <h2 className='logo text-4xl text-purple-700'>Cocktail Verse</h2>
                <h4 className='text-white text-2xl font-sans'>Tutti i cocktail del mondo a portata di click</h4>
                <p className='text-white text-xl font-sans'>Cocktail Verse è un database internazionale che mette a tua disposizione, in maniera Gratuita, le ricette dei più importanti e diffusi cocktail al mondo.</p>
                <button className='p-2 rounded-full text-xl bg-purple-700 animate-bounce'><Link to={'/about'} className='text-white logo'>Scopri di piu</Link></button>
              </div>
              <div className='home-hero-img w-72'>
                <Lottie animationData={Drink} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex max-sm:flex-col'>
          <h2 className='sm:p-12 max-sm: p-0 pt-10 flex justify-center logo'>Cerca cocktail</h2>
          <form className='max-sm:m-auto' onSubmit={handleSubmit}>
            <input id="email-address" name="nome" type="nome" autoComplete="email"
              required className=" rounded-full bg-white/5 text-black shadow ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 pl-4 sm:text-sm sm:leading-6 h-11 mt-11 w-52  max-sm:mt-5"
              placeholder="gin" onChange={handleChange} />
            <button className='pl-3 bg-transparent' type='submit' onClick={handleClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='pl-4 text-xl max-sm:mt-6 max-sm:text-3xl' />
            </button>
          </form>
        </div>
        <div className='flex flex-wrap justify-center mb-10'>
          {data ? (
            data.length === 0 ? (
              <h2 className='m-10'>Nessun Cocktail trovato</h2>
            ) : (
              data.map(el => {
                return <Cocktail key={el.idDrink} {...el} />
              })
            )
          ) : (
            <h2 className='m-10'>Nessun Cocktail trovato</h2>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
