import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const SingleCocktail = () => {
    const {id} = useParams();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = useFetch(url)
    return (
        <div>
            <div className='flex m-7'>
                <button className='bg-white'>
                    <Link to={'/'} className='bg-white'><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#d10000", }} className='text-3xl mr-5 bg-white' /></Link>
                </button>
                {/* <h2 className='uppercase text-xl text-gray-400 font-bold'>Torna in home</h2> */}
            </div>
            <div className='mb-24'>
                {
                    data.map(el => {
                        return (
                            <div className='max-2xl:flex max-2xl:flex-basis max-md:block max-md: ml-24 max-md: mr-24' key={el.idDrink}>
                                <div className='basis-1/2 ml-11'>
                                    <img src={el.strDrinkThumb} alt="" className='rounded-full' width={400}/>
                                </div>
                                <div className='basis-1/4'>
                                    <div className='mt-3'>
                                        <h2 className='uppercase logo'>{el.strDrink}</h2>
                                        <div className='flex mt-3'>
                                            <p className='bg-gray-300 p-1 rounded-xl mr-3'>{el.strAlcoholic}</p>
                                            <p className='bg-gray-300 p-1 rounded-xl mr-3'>{el.strCategory}</p>
                                            <p className='bg-gray-300 p-1 rounded-xl'>{el.strGlass}</p>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <h3 className='text-2xl font-bold'>Ingredienti:</h3>
                                        <ul>
                                            <li>- {el.strMeasure1} {el.strIngredient1}</li>
                                            <li>- {el.strMeasure2} {el.strIngredient2}</li>
                                            <li>- {el.strMeasure3} {el.strIngredient3}</li>
                                        </ul>
                                    </div>
                                    <div className='mt-4 mb-5 '>
                                        <h3 className='text-2xl font-bold'>Istruzioni:</h3>
                                        <p>{el.strInstructionsIT}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleCocktail
