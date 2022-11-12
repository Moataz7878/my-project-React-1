
import React from 'react'
import style from './Portfolio.module.css'
import img from './img/314380148_810233563539501_5582208570210196664_n.jpg'
import img2 from './img/315068946_632859495001927_2080418008566812362_n.jpg'
import img3 from './img/315010677_831854668127617_3711066122852779552_n.jpg'
import img4 from './img/315105646_833527544536470_4730721903285179520_n.jpg'
import img5 from './img/314980474_804058124019748_8613699740209635701_n.jpg'
import img6 from './img/315015511_649103843323656_1040001152259159777_n.jpg'
export default function Portfolio() {
     function vbn(){
        let portfoliotop=document.getElementById("portfoliotop")
            portfoliotop.style.display="flex"
     }
     function  opp(){
        let portfoliotop=document.getElementById("portfoliotop")
        portfoliotop.style.display="none"
     }


     function vbooln(){
        let iotoprift=document.getElementById("iotoprift")
        iotoprift.style.display="flex"
     }
     function  opoo(){
        let iotoprift=document.getElementById("iotoprift")
        iotoprift.style.display="none"
     }


     function vboolyyn(){
        let iftthere=document.getElementById("iftthere")
        iftthere.style.display="flex"
     }
     function  opzzoo(){
        let iftthere=document.getElementById("iftthere")
        iftthere.style.display="none"
     }

     function kpx(){
        let qqqqthere=document.getElementById("qqqqthere")
        qqqqthere.style.display="flex"
     }
     function  ghj(){
        let qqqqthere=document.getElementById("qqqqthere")
        qqqqthere.style.display="none"
     }


     function LOCKEDSAFE(){
        let LOCKEDSAFE=document.getElementById("LOCKEDSAFE")
        LOCKEDSAFE.style.display="flex"
     }
     function  ghjLOCKEDSAFE(){
        let LOCKEDSAFE=document.getElementById("LOCKEDSAFE")
        LOCKEDSAFE.style.display="none"
     }



     function SUBMARINE(){
        let SUBMARINE=document.getElementById("SUBMARINE")
        SUBMARINE.style.display="flex"
     }
     function  ghjLOCKSUBMARINEEDSAFE(){
        let SUBMARINE=document.getElementById("SUBMARINE")
        SUBMARINE.style.display="none"
     }

     
  return <>
    <div className={style.Portfolio} id='Portfolio' >
        <div className='text-center w-100 pt-5  '>
            <h3 className={style.tect}>PORTFOLIO</h3>
    <div className='d-flex justify-content-center align-items-center mt-3 mb-4'>
    <div className={style.test}></div><i className="fa-solid fa-star"></i><div className={style.test}></div>
  </div>
        </div>
        <div className="container text-center">
            <div className="row gy-4  justify-content-center">
                <div onClick={vbn} className="col-lg-4 col-md-6 col-sm-12 " id='one'>
                    <div className='w-100 position-relative overflow-hidden'>
                        <img  src={img} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>
                    
                

                </div>
                <div onClick={vbooln}  className="col-lg-4 col-md-6 col-sm-12" id='two'>
                   
                <div className='w-100 position-relative overflow-hidden'>
                        <img src={img2} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>



                    
                </div>
                <div onClick={vboolyyn} className="col-lg-4 col-md-6 col-sm-12">
                <div className='w-100 position-relative overflow-hidden'>
                        <img src={img3} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>
                </div>
                <div onClick={kpx} className="col-lg-4 col-md-6 col-sm-12">
                <div className='w-100 position-relative overflow-hidden'>
                        <img src={img4} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>
                </div>
                <div onClick={LOCKEDSAFE} className="col-lg-4 col-md-6 col-sm-12">
                <div className='w-100 position-relative overflow-hidden'>
                        <img src={img5} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>
                </div>
                <div onClick={SUBMARINE} className="col-lg-4 col-md-6 col-sm-12">
                <div className='w-100 position-relative overflow-hidden'>
                        <img src={img6} alt="" className={style.imge}/>
                        <div className={style.hh}>
                        <i class={`${style.icon} fa-solid fa-plus `}></i>
                        
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






    <div className={style.portfoliotop} id="portfoliotop">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>LOG CABIN</h3>
            </div>
            
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={opp} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={opp} className={`${style.iconrt} fa-solid fa-xmark `} id="jjj" ></i>
        </div>
        
    </div>
    <div className={style.portfoliotop} id="iotoprift">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>TASTY CAKE</h3>
            </div>
            
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img2} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={opoo} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={opoo} className={`${style.iconrt} fa-solid fa-xmark `}  ></i>
        </div>
        
    </div>
  
  
    <div className={style.portfoliotop} id="iftthere">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>CIRCUS TENT</h3>
            </div>
            
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img3} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={opzzoo} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={opzzoo} className={`${style.iconrt} fa-solid fa-xmark `}  ></i>
        </div>
        
    </div>
  

    <div className={style.portfoliotop} id="qqqqthere">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>CONTROLLER</h3>
            </div>
            
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img4} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={ghj} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={ghj} className={`${style.iconrt} fa-solid fa-xmark `}  ></i>
        </div>
        
    </div>
    <div className={style.portfoliotop} id="LOCKEDSAFE">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>LOCKED SAFE</h3>
            </div>
            
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img5} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={ghjLOCKEDSAFE} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={ghjLOCKEDSAFE} className={`${style.iconrt} fa-solid fa-xmark `}  ></i>
        </div>
        
    </div>
    <div className={style.portfoliotop} id="SUBMARINE">
        <div className={style.toorew}>
        <div className='text-center  pt-2  '>
            <h3 className={style.tect}>SUBMARINE</h3>
            </div>
    <div className='d-flex justify-content-center align-items-center mt-2 mb-2'>
    <div className={style.test}></div><i class={`${style.ibon} fa-solid fa-star`}></i><div className={style.test}></div>
    </div>
        <div className='d-flex justify-content-center'>
        <img src={img6} alt=""  className={style.imgerto}/>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <p className='w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className='d-flex justify-content-center w-100 text-center'>
        <button onClick={ghjLOCKSUBMARINEEDSAFE} type="button" className="btn btn-success mb-2 pe-2 ps-2">X  Close Window</button>
           </div>
           <i onClick={ghjLOCKSUBMARINEEDSAFE} className={`${style.iconrt} fa-solid fa-xmark `}  ></i>
        </div>
        
    </div>
  </>
}
