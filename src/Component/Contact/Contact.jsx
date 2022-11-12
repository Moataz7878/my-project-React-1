import React from 'react'
import style from './Contact.module.css'
export default function Contact() {

function glhk(){
  let namer=document.getElementById("namer")
  let qwerty=document.getElementById("qwerty")
   if (namer.value){
    qwerty.style.display="block"
   }
   else{
    qwerty.style.display="none"
   }
}

//...........

function glhk2(){
  let letter=document.getElementById("letter")
  let qwertyui=document.getElementById("qwertyui")
   if (letter.value){
    qwertyui.style.display="block"
   }
   else{
    qwertyui.style.display="none"
   }
}

//........

function glhk3(){
  let lettpp=document.getElementById("lettpp")
  let potyie=document.getElementById("potyie")
   if (lettpp.value){
    potyie.style.display="block"
   }
   else{
    potyie.style.display="none"
   }
}

//......

function glhk4(){
  let example=document.getElementById("example")
  let ioopt=document.getElementById("ioopt")
   if (example.value){
    ioopt.style.display="block"
   }
   else{
    ioopt.style.display="none"
   }
}
//........
  return <>
    <div className={style.Contact} id='Contact'>
    <div className="container mt-5 mb-4">

    <div className='text-center w-100 pt-5  mt-5'>
            <h3 className={style.tect}>CONTACT ME</h3>
    <div className='d-flex justify-content-center align-items-center mt-3 mb-4'>
    <div className={style.test}></div><i className="fa-solid fa-star"></i><div className={style.test}></div>
  </div>
        </div>

            <div className="row  d-flex justify-content-center">
                <div className="col-md-8 mt-4" >
                <h6 className={style.kds} id="qwerty">Name</h6>
                    <input onInput={glhk} className={`${style.form} form-control w-100  `}   id="namer" placeholder=" Name"/>
                </div>
                <div className="col-md-8 mt-5">
                <h6 className={style.kdsjkl} id="qwertyui">Email Address</h6>
                    <input onInput={glhk2} className={`${style.form} form-control w-100  `} type="email"  name="User Name "  id="letter" placeholder=" Email Address"/>
                </div>
                <div className="col-md-8 mt-5">
                <h6 className={style.kdsbmvvvv} id="potyie">Phone Number</h6>
                    <input onInput={glhk3} className={`${style.form} form-control w-100  `} type="text" id="lettpp" placeholder=" Phone Number"/>
                </div>
                <div className="col-md-8 mt-5">
                <h6 className={style.wdv} id="ioopt">Message</h6>
                <textarea onInput={glhk4} className={`${style.form} form-control w-100  `} placeholder=" Enter Message" id="example"
                        rows="5"></textarea>
                </div>
                <div className="col-md-8 mt-5">
                <button className="btn btn-success btn-xl" id="sendMessageButton" type="submit">Send</button>
                </div>
                

                
                           
        </div>
            </div>
          
    </div>



  
  
  
  </>
   
  
}
