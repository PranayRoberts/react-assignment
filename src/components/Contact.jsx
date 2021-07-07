import React from "react";
import minions3 from './Minions3.jpg';
function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={minions3}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Contact me via WhatsApp-Number abd My ID number is 20181CSE0557
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;