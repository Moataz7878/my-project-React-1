// import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

  //  function home(){
  //   let ytrew=document.getElementById("ytrew");
  //   ytrew.style.replace("background-color: rgb(218, 180, 180)","background-color: rgb(0, 0, 0)")
  //   console.log("holle")

  //  }

export default function Navbar() {

     return <>
  <nav className= "navbar navbar-expand-lg  fixed-top  ">
  
  <div className="container d-flex justify-content-around mt-1 mb-1">
    <div className=''>  
         <h2 className='nev text-white'>Start React</h2>

    </div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

    <div className="" id="">
      <ul className="navbar-nav ">
      <li className="nav-item p-3  ms-3">
        <Link   to="ff" >Home</Link>
        </li>
        <li className="nav-item p-3  ">
         <Link to="Portfolio" >Portfolio</Link>
        </li>
        <li className="nav-item p-3  ms-2">
        <Link to="aboute" >Aboute</Link>
        </li>
        <li className="nav-item p-3  ms-3">
        <Link to="Contacts" >Contacts</Link>
        </li>
        
       </ul>
    </div>
  </div>
</nav>
  
  
  
  </>

  
}
