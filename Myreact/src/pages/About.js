import React from 'react'
import Mutiplepizza from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"
function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${Mutiplepizza})` }}></div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>Pizza started as humble flatbread in ancient civilizations, blossomed into the modern pie in Naples, and became a worldwide phenomenon. It’s packed with fun trivia, endless variations, and today remains one of the planet’s most beloved foods.
                   Let me know if you’d like deeper dives—like Neapolitan techniques, pizza science, or global pizza culture!
Pizza started as humble flatbread in ancient civilizations, blossomed into the modern pie in Naples, and became a worldwide phenomenon. It’s packed with fun trivia, endless variations, and today remains one of the planet’s most beloved foods.
                   Let me know if you’d like deeper dives—like Neapolitan techniques, pizza science, or global pizza culture!

                </p>
            </div>
        </div>
    )
}
export default About;