
import {Component} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Aboute } from "../src/Component/Aboate/Aboate";
// import Home from "../../../j.s1/myproj/src/Component/Home/Home";
import Layoud from "./Component/Layoud/Layoud";
import Aboate from "./Component/Aboate/Aboate";
import Contact from "./Component/Contact/Contact";
// import Footer from "./Component/footer/Footer";
import Home from "./Component/Home/Home";
// import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Portfolio/Portfolio";

let x =createBrowserRouter([
{path:'/',element:<Layoud/> ,children:[
  {index:true ,element:<Home/>},
  {path:'ff' ,element:<Home/>},
  {path:'Portfolio' ,element:<Portfolio/>},
  {path:'aboute' ,element:<Aboate/>},
  {path:'Contacts' ,element:<Contact/>},
  
]}


])



 export default class App extends Component
 {
   state ={}
   render()
   {
    return<> 
{/*         
        <Navbar/>

        <Home/>
        <Portfolio/>
        <Aboate/>

        <Contact/>
        <Footer/> */}
        <RouterProvider router={x}/>
    </>
   }
 }