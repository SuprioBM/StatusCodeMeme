/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {createBrowserRouter , RouterProvider,Router} from "react-router-dom"  
import Home from './Home';
import Meme from './Meme';
import Navbar from './Navbar';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar /> <Home /></>
    },
    {
      path: '/meme',
      element: <> <Navbar/> <Meme /></>
    }
  ]) 
  return (
    <>
    <RouterProvider router={router}  />  
    </>
  )
}

export default App
