import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

import Navbar from '../Navbar/Navbar'


export default function Layoud() {
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  
  
  
  </>
    
  
}
