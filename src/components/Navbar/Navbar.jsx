import React from 'react'
import './Navbar.css'
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

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
      <Link to={'/'}>
   <button className="logo" ><DiamondSharpIcon fontSize="large" /></button>
   </Link>
   <ul>
            <Link to={'/'}>
            <li>Home</li></Link>
            
            <Link to={'/about'}>
            <li>About</li></Link>
            
            
            
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