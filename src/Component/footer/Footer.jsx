import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  <footer className={style.Foote}>
            <div className="container ">
                <div className="row ">
                
                    <div className="col-lg-4 mb-5 mt-5 ">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5  mt-5 ">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <i className="fa-brands fa-facebook-f pt-2 m-2"></i>
                        <i className="fa-brands fa-twitter pt-2 m-2"></i>
                        <i className="fa-brands fa-linkedin-in pt-2 m-2"></i>
                        <i className="fa-brands fa-dribbble pt-2 m-2"></i>
                    </div>
                   
                    <div className="col-lg-3 mb-5 mt-5 ">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>
        
        </footer>
        <div className={style.Footert}> <div className="copyright py-4 text-center ">
            <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
        </div>
       
  
  </>
    
}
