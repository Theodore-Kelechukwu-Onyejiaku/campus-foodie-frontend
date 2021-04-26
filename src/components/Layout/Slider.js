import React from 'react';
import pic1 from "../../images/1.jpg"
import pic2 from "../../images/2.jpg"
import pic3 from "../../images/3.jpg"
import pic4 from "../../images/4.jpg"
import pic5 from "../../images/5.jpg"



const Slider = () =>{
    return(
        <div>
            <div class="carousel">

                <div class="carousel-item" ><img  alt="slider" src={pic1} width="200px" height="200px"/></div>
                <div class="carousel-item" ><img  alt="slider" src={pic2} width="200px" height="200px"/></div>
                <div class="carousel-item" ><img  alt="slider" src={pic3} width="200px" height="200px"/></div>
                <div class="carousel-item" ><img  alt="slider" src={pic4} width="200px" height="200px"/></div>
                <div class="carousel-item" ><img  alt="slider" src={pic5} width="200px" height="200px"/></div>
            </div>
        </div>
    )
}
export default Slider;

/* <div class="slider">
    <ul class="slides">
      <li>
        <img src="https://lorempixel.com/580/250/nature/1"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/2"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/3"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://lorempixel.com/580/250/nature/4"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div> */