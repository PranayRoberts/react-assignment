import React from "react";
import minions2 from './Minions2.jpg';
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={minions2}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            The Minions are small, yellow, cylindrical creatures, who have one or two eyes. They are the signature characters of the Despicable Me series. They bring much of the comedy in the film, and they are known as the scene-stealer of the movie. Frequently, they speak in an incomprehensible language, called Minionese, occasionally switching to English. They are much childish in some ways, yet they seem to be very intelligent in certain aspects. All the minions are minor characters in Minions (with the exception of Kevin, Stuart, and Bob), major character in Despicable Me and Despicable Me 2 and supporting characters in Despicable Me 3 (with the exception of Mel).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;