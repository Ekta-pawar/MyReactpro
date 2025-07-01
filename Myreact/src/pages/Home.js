import React from 'react'
import{ Link } from 'react-router-dom';
import "../styles/Home.css"
import  BannerImage from '../assets/pizza.jpeg'
function Home() {
  return (
    <div className='="home'>
      <div className='headerContainer' style={{backgroundImage:`url(${BannerImage})` }}>
<h1>Pedro's Pizzeria</h1>
<p>Hello ,There</p>
<p>Pizza cook by ekta</p>
<Link to="/menu">
<button>Order Know</button></Link>
      </div>
    </div>
  )
}

export default Home