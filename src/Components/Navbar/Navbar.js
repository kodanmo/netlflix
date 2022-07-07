import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
         <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="nlogo"></img>
         <div className='lef'>
               <p className='ooo'>UNLIMITED TV SHOWS & MOVIES
                   <button className='b1'>JOIN NOW</button>
                   <button className='b2'>SIGN IN</button>   
              </p>       
        </div>
    </div>
  
  )
}

export default Navbar