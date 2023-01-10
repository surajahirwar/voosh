import React from 'react'
import "./Toppart.css"
import topimg from "../assets/top.webp"
import rightimg from "../assets/right.webp"
import logo from "../assets/logo.webp"
import img6 from "../assets/img6.webp"
import img4 from "../assets/img4.webp"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img5 from "../assets/img5.webp"
import top_style from "../assets/top-style.webp"
import button_style from "../assets/button-style.webp"
export default function Toppart() {
  return (
    <div  className='maindiv' >
      <div className='topdiv'>
            <div >
            <img className='logo' src={logo} alt="" />

            <div className='titlediv'>
              <h3>Consolidate your restaurants' insights in one place. Unlock growth.</h3>
              <span>Your one stop solution to view mission-critical data and insights from all your locations in one place.</span><br/>

              <button>Book Demo</button><br/>
              <img src={button_style} className="button-style" alt="" />

                  <div className='imgdiv'>

                <img src={img6} className='grubhub1' alt="" />
                <img src={img4} className="uber1" alt="" />
                <img src={img1} className="outlet1" alt="" />
                <img src={img2} className="amazon1" alt="" />
                <img src={img3} className="zomato1" alt="" />
                <img src={img5} className="swiggy1" alt="" />
                </div>
            </div>
            <img src={top_style} className="top-style" alt="" />
            <img className='topimg' src={topimg} alt="" />
            </div>

            <div>
              <img src={img6} className='grubhub' alt="" />
              <img src={img4} className="uber" alt="" />
              <img src={img1} className="outlet" alt="" />
              <img src={img2} className="amazon" alt="" />
              <img src={img3} className="zomato" alt="" />
              <img src={img5} className="swiggy" alt="" />




              <img className='rightimg' src={rightimg} alt="" />
            </div>       
      </div>
    </div>
    
  )
}
 