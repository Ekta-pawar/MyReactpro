import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
 
<footer class="footer">
  <div class="footer-section">
    <h2>About Us</h2>
    <p>Learn more about our mission and values.</p>
    <a href="https://www.google.com/">Read More</a>
  </div>
  <div class="footer-section">
    <h2>Contact</h2>
    <p>Email: info@example.com</p>
    <p>Phone: +1 234 567 890</p>
  </div>
  <div class="footer-section">
    <h2>Follow Us</h2>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/ekta-pawar-27808331b/" >linkedin</a>
      <a href="https://github.com/Ekta-pawar?tab=repositories" >Github</a>
       <a href="https://www.google.com/" >Google</a>
    </div>
  </div>
</footer>

  )
}

export default Footer;
