import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css"
function Contact(){
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${PizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form">
                    <label htmlFor="name">Full Name</label>
                    <input name='name' placeholder="Enter full name..." type='text'/>
                    <label htmlFor="name">Name</label>
                      <input name='name' placeholder="Name" type='text'/>
<label htmlFor="name">Food</label>
                    <input name='name' placeholder="Food name" type='text'/>
<label htmlFor="name">Contact</label>
                    <input name='' placeholder="Contact" type='Number'/>

                </form>
            </div>
        </div>
    )
}
export default Contact;