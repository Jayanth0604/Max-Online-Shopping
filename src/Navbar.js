import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from 'react-router-dom'
function Navbar() {
  const cartobj = useSelector(store=> store.cartReducer)
  

  return (
    <div>
      <div className='header'>
        <div className='header1'>
          <img className='logo_img' src='assets/images/logo1.png'></img>
        </div>
        <div className='header2'>
          <ul>
            <li><Link to='/'>Women</Link></li>
            <li><Link to='/'>Men</Link></li>
            <li><Link to='/'>Girls</Link></li>
            <li><Link to='/'>Boys</Link></li>
            <input className='header_input' placeholder='What are you looking for?'></input>
            <li> <span className='spann'>More</span></li>
            <li>Sign up / Sign in</li>
            <li><Link to='/Cart'>Cart({cartobj.cartitems.length})</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar