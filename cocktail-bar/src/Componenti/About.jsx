import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsToCircle, faMartiniGlassCitrus, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div>
      <>
        <div>
          <div className='hero-img-container2'>
            <div className='hero-overlay'>
              <div className='container hero-container flex justify-center'>
                <div className='home-hero2 flex max-w-2xl'>
                  <div className='home-hero-text'>
                    <h4 className='text-white text-4xl leading-normal max-sm:text-2xl max-sm:leading-relaxed font-sans'>"Dietro ogni cocktail, c'è una storia unica, e siamo qui per raccontarla, ispirarti e trasportarti in un viaggio di sapori e creatività."</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center m-10'>
          <h2 className='logo'>IL NOSTRO PROGETTO</h2>
        </div>
        <div className='m-11 card flex flex-wrap justify-evenly'>
          {/* prima card */}
          <div className="w-72 h-72 mb-11 group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:bg-purple-700 hover:text-white hover:scale-105 ">
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold mb-2">Educare</h2>
              <div className='flex justify-center'>
                <FontAwesomeIcon icon={faMartiniGlassCitrus} className=' text-2xl text-center mr-4 m-5' />
              </div>
              <div className="flex items-center mb-4">
                <p className="text-gray-600 group-hover:text-white font-sans">Esplora il nostro database di cocktail, dalle bevande classiche ai mix più innovativi. Offriamo ricette dettagliate per aiutarti a creare e gustare i tuoi drink preferiti.</p>
              </div>
            </div>
          </div>
          {/* seconda card */}
          <div className="w-72 h-72 mb-11 group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:bg-purple-700 hover:text-white hover:scale-105">
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold mb-2">Insegnare</h2>
              <div className='flex justify-center'>
                <FontAwesomeIcon icon={faPersonChalkboard} className='text-2xl text-center mr-4 m-5' />
              </div>
              <div className="flex items-center mb-4">
                <p className="text-gray-600 group-hover:text-white">Troverai tutorial dettagliati e consigli degli esperti per diventare un mixologo professionista e sorprendere i tuoi amici con cocktail fatti in casa.</p>
              </div>
            </div>
          </div>
          {/* terza card */}
          <div className="w-72 h-72 mb-11 group bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:bg-purple-700 hover:text-white hover:scale-105">
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold mb-2">Centralizzare</h2>
              <div className='flex justify-center'>
                <FontAwesomeIcon icon={faArrowsToCircle} className=' text-2xl text-center mr-4 m-5' />
              </div>
              <div className="flex items-center mb-4">
                <p className="text-gray-600 group-hover:text-white">Centralizza tutte le informazioni sui cocktail in un unico luogo. La nostra piattaforma ti permette di cercare e scoprire nuovi cocktail provenienti da tutto il mondo.</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        {/* component */}
        <div className="mb-16 mt-11">
          {/* inizio sezione team */}
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <h2 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto uppercase logo">
                I talenti dietro la realizzazione del progetto
              </h2>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                          alt="Display Picture of Andres Berlin"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Andres Berlin
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Chief Executive Officer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing and
                        collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://www.instagram.com/" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.twitter.com/" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                          alt="Display Picture of Silene Tokyo"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Silene Tokyo
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our companies
                        has resulted in a few of them establishing global benchmarks
                        in product design and development.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://www.github.com/" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.twitter.com/)" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                          alt="Display Picture of Johnson Stone"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Johnson Stone
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        Manager Development
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Our services encompass the assessment and repair of property
                        damage caused by water, fire, smoke, or mold. We can also be
                        a part of the restoration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="https://www.github.com/" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.twitter.com/)" className="mx-5">
                          <div aria-label="Twitter" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.instagram.com/" className="mx-5">
                          <div aria-label="Instagram" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fine sezione team */}
        </div>
      </>

    </div>
  )
}

export default About
