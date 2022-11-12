import React from 'react'
import style from './Aboate.module.css'


export default function Aboate() {
  return (<>
  
  <section className={style.Aboate} id="About">
            <div className="container mt-3 pt-2">
                <h3 className={`${style.teet} text-center text-uppercase text-white pt-5`}>About</h3>
               
                <div className=' d-flex justify-content-center align-items-center mt-3'>
    <div className={style.hemoto}></div><i className="fa-solid fa-star text-white"></i><div className={style.hemoto}></div>
  </div>
                <div className="row  justify-content-center mt-4 pb-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                </div>
            </div>
        </section>
  
  </>

  )
}
