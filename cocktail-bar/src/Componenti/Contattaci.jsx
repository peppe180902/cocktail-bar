import React from 'react'

const Contatti = () => {
  return (
    <div>
      <div className='text-center mt-20'>
        <h2 className='font-bold logo'>VORRESTI AGGIUNGERE UN COCKTAIL?</h2>
        <h4 className='mt-2 font-sans'>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database</h4>
      </div>
      <div className="flex min-h-screen mt-20 bg-white">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-4xl font-medium logo">Contacttaci</h1>
          <p className="mt-3">Invia un email a info@fruitina.it o compila il form:</p>
          <form action="https://api.web3forms.com/submit" className="mt-10" method="POST">
            {/* This is a working contact form. 
   Get your free access key from: https://web3forms.com/  */}
            <input
              type="hidden"
              name="access_key"
              defaultValue="ff452d46-4ac2-469c-9a4a-a43fbdbe4615"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                  IL TUO NOME
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                  LA TUA EMAIL
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  defaultValue={""}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                  LA TUA RICETTA
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-purple-700 px-10 py-2 text-white logo"
            >
             INVIA
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contatti
