import React, { useState } from 'react'
import './Bottompart.css'
import bottom_img from '../assets/bottom-img.webp'
import { ToastContainer, toast } from 'react-toastify';

export default function Bottompart() {

    const [data, setdata] = useState()

    const handlechange = (e)=>{
            setdata({
                ...data,
                [e.target.name]: e.target.value
            })
    }

    const handlesubmit = ()=>{
        
        localStorage.setItem("voosh",JSON.stringify(data))

       if(data.name!=""){
        toast.success(`hey you are logged in ${data.name}`, {
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
     
    }


  
  
  return (
    <div>
        <div className='bottomdiv'>
            <img src={bottom_img} alt="" />
            <div className='bottominner'>
                    <div className='innerheading'>
                        <h1>Book A Demo Now</h1>
                    </div>
                    <div className='innerinput'>
                        <label>Name</label>
                        <input onChange={(e)=>handlechange(e)}  name="name" type='text' placeholder='Ex. John Doe'  />
                        <label>Email</label>
                        <input onChange={(e)=>handlechange(e)} type='email'  name='email'  placeholder='Ex. mail@website.com'  />
                        <label>Company Name</label>
                        <input onChange={(e)=>handlechange(e)} type='text'  name="company" placeholder='Ex XYZ PVT LTD'  />
                        <label>Your title</label>
                        <input onChange={(e)=>handlechange(e)} type='text'  name='title' placeholder='Ex. Operational Head'  />
                        <label>Password</label>
                        <input onChange={(e)=>handlechange(e)} type='password' name='password' placeholder='Ex. Password'  />
                        <input onClick={()=>handlesubmit()} className='inputsubmit' type='buttom' placeholder=''  value='Book Demo' />
                    </div>
            </div>
        </div>

    </div>
  )
}
