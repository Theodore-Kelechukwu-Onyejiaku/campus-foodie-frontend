import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import pic1 from "../../images/1.jpg"
import pic2 from "../../images/2.jpg"
import pic3 from "../../images/3.jpg"
import pic4 from "../../images/41.jpg"
import pic5 from "../../images/5.jpg"

class Slider extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
      }
    };
    M.Carousel.init(this.Carousel, options);
  }

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel section scrollspy"
        
      >
        <div class="carousel-item" ><img className="img-slider"  alt="slider" src={pic1}/></div>
                <div class="carousel-item" ><img className="img-slider"  alt="slider" src={pic2}/>
                  <span>Burger</span>
                </div>
                <div class="carousel-item" ><img className="img-slider"  alt="slider" src={pic3}/></div>
                <div class="carousel-item" ><img className="img-slider"  alt="slider" src={pic4}/></div>
                <div class="carousel-item" ><img className="img-slider"  alt="slider" src={pic5}/></div>
        
      </div>
    );
  }
}

export default Slider;
