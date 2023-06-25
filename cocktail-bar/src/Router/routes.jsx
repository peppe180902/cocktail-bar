import React from "react";
import Home from '../Componenti/Home'
import Contattaci from '../Componenti/Contattaci'
import About from '../Componenti/About'
import SingleCocktail from "../Componenti/SingleCocktail";
import ErrorScreen from "../Componenti/ErrorScreen";
export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contattaci',
        element: <Contattaci />
    },
    {
        path: 'cocktail/:id',
        element: <SingleCocktail />
    },
    {
        path:'*',
        element: <ErrorScreen />
    }
]