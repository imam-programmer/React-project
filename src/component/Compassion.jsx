import React from 'react'
import './Compassion.css'
const Compassion = () => {
  return (
    <section id='Compassion'>
<div className="container">
<p id='p-tag'>SUB-HEADLINE</p>
<h2>love and compassion</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<button>Read more</button>
<div className="compassion-img-con">
    <img src="./image/Compassion-1-img.png" alt="" />
    <img className='Compassion-2' src="./image/Compassion-2-img.png" alt="" />
    <img src="./image/Compassion-3-img.png" alt="" />
</div>
<p id='enother' style={{textTransform:'uppercase'}}>our mission & vision</p>
<h5>celebrate WITH US</h5>
<p id='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<h6>Read More<i class="fa-solid fa-arrow-right-long"></i></h6>
</div>
    </section>
  )
}

export default Compassion