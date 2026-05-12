import React from 'react'
import './Relevant.css'
const Relevant = () => {
  return (
    <section id='Relevant'>
    <div className="container">
        <p id='p'>sub-headline</p>
        <h2>a church that's relevant</h2>
        <div className='Relevant--box-container'>
 <div className="box1">
<img src="./image/Relevant-1-img.png" alt="" />
<h3>About us</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 </div>

  <div className="box2">
<img src="./image/Relevant-2-img.png" alt="" />
<h3>Get involved</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 </div>
  <div className="box3">
<img src="./image/Relevant-3-img.png" alt="" />
<h3>Giving back</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 </div>

        </div>
    </div>

    </section>
  )
}

export default Relevant