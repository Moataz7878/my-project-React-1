
import React from 'react'
import theImage from './img/315027220_3264091893813744_2003062498327470284_n.jpg'
import style from'./Home.module.css'

export default function Home() {
  return <>
  <div className={style.header}>
  <div className=' text-center d-flex justify-content-center align-items-center  vh-100 w-100'>
  <div className=''>
  <img src={theImage}   alt=""  className='img w-50 mt-5 bg-info'/>
  <h1 className={style.test}>START REACT</h1>
  <div className='d-flex justify-content-center align-items-center mt-4'>
    <div className={style.hemoto}></div><i className="fa-solid fa-star text-white"></i><div className={style.hemoto}></div>
  </div>
  <h4 className='text-white  broder mt-4'>Graphic Artist - Web Designer - Illustrator</h4>
  </div>
 </div>
  </div>

  </>
 
}
