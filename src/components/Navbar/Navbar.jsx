import React from 'react'
import './Navbar.css'
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  
  const changeCurrency = (e) => {
    switch(e.target.value)
    {
      case 'usd':
        {
        setCurrency({name:'usd',symbol:'$'});
        break;
      }
      case 'eur':
       {
        setCurrency({name:'eur',symbol:'€'});
        break;
       }
      case 'mxn':
        {
          setCurrency({name:'mxn',symbol:'$'});
        break;
        }
      default:
        {
          setCurrency({name:'usd',symbol:'$'});
        break;
        }
    }
  }
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
            <select onChange={changeCurrency}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="mxn">MXN</option>
            </select>
        </div>
    </div>
    
  )
}

export default Navbar