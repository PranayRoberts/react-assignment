import React from "react";
import minions1 from './Minions1.jpg';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={minions1}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Hello my name is Pranay Roberts.
              Thank you for visiting my REACT assignment where I will be talking about minions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;