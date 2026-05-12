import React from 'react'

const Nav = () => {
  return (
    <header>
        <div className="container">
    <nav>
        <div className="nav-1st-part">
        <img src="./image/Logo.png" alt="logo" />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Sermon</li>
            <li>Blog</li>
        </ul>
        </div>
        <div className="nav-2nd-part">
            <button>Contact us</button>
        </div>
    </nav>
    </div>
    </header>
  )
}

export default Nav