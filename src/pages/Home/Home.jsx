import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest<br/> Crypto Marketplace</h1>
        <p>Welcome to the cryptocurrency tracker</p>
        <form>
          <input type='text' placeholder='Search Cryptocurrency' />
          <button type='submit'>Search</button>
        </form>

      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>Rank</p>
          <p>Name</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home