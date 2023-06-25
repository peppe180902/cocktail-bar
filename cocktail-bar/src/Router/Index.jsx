import React from 'react'
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {useRoutes} from 'react-router-dom'
import { routes } from './routes'

const Component = () => {
  const element = useRoutes(routes)
  return element
}

export default Component
