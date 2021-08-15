import React, { Component } from "react";
import pic4 from "../../images/4.png"
import M from "materialize-css";

class Parallax extends Component {
    componentDidMount() {
        M.Parallax.init(this.Parallax, {});
    }

    render() {
        return (
            <>
                <div class="parallax-container" >
                    <div class="parallax" ref={Parallax => {
                        this.Parallax = Parallax;
                    }}>
                        <img src={pic4} style={{ transform: "translate3d(-50%, 312.664px, 0px); opacity: 1" }} alt="parallax pix"/>
                    </div>
                </div>
            </>
        );
    }
}

export default Parallax;