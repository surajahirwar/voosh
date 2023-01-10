import { useEffect, useState } from "react";
import Bottompart from "./components/Bottompart"
import Toppart from "./components/Toppart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  

  
  useEffect(()=>{
    
    let voosh = JSON.parse(localStorage.getItem("voosh"))||[];
    if(voosh.name!=undefined){
      toast.success(`Hello ${voosh.name}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{

      toast.warn(`hey, you need to login`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }

  },[])

  return (
    <div >
      <ToastContainer />
      <Toppart />
      <Bottompart />
     
    </div>
  )
}

export default App
