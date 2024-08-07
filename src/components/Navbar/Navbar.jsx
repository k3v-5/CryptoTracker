import React from 'react'
import './Navbar.css'
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';

const Navbar = () => {
  return (
    <div className='navbar'>
   <button className="logo" ><DiamondSharpIcon fontSize="large" /></button>
   <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
   </ul>
        <div className="nav-right">
            <select >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="mxn">MXN</option>
            </select>
        </div>
    </div>
    
  )
}

export default Navbar