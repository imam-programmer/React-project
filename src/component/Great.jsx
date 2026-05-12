import React from 'react'
import './Great.css'
const Great = () => {
  return (
   <section id='great'>
    <div className="container">
        <p className='p'>Upcoming SERMONS</p>
        <h2>join us and become part of something great</h2>
        <div className="great-container">
            <div className="first-div">
                <div className="h6-con">
                <h6>Upcoming Event</h6>
                <span>20 JULY</span>
                </div>
                <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
                <p className='first-div-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div>
                   
                <h5> <i class="fa-solid fa-stopwatch"></i>Friday 23:39 IST Saturday 11:20 ISD</h5>
                </div>
                <div>
                <h5><i  class="fa-brands fa-sistrix"></i>Friday 23:39 IST Saturday 11:20 ISD</h5>
                </div>
                <button>Register</button>
            </div>
            <img src="./image/Great.jpg" alt="" />
        </div>
        <h6>View all Sermons<i class="fa-solid fa-arrow-right-long"></i></h6>
    </div>
   </section>
  )
}

export default Great