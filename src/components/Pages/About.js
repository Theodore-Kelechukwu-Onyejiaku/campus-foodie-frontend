import React, { Component } from "react";
import pic4 from "../../images/4.png"
import pic5 from "../../images/5.jpg"
import lib1 from "../../images/library.jpg"
import del1 from "../../images/delivery1.jpg"
import eating from "../../images/eating.jpg"
import M from "materialize-css";

class About extends Component {
    componentDidMount() {
        M.Parallax.init(this.Parallax, {});
    }

    render() {
        return (
            <>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Hi Welcome</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            This is Campus-foodie. Here we have all special dishes you can ever imagine.
                            Our goal is to make food readily available for anyone on the school campus. This is to 
                            meet the goal of the United Nation Sustainable Goal Development which focuses on zero hunger and physical well beign.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="parallax-container" >
                            <div className="parallax" ref={Parall => {
                                this.Parall = Parall;
                            }}>
                                <img src={pic5} style={{ transform: "translate3d(-50%, 312.664px, 0px)", opacity: "1" }} alt="about pic"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="parallax-container" >
                            <div className="parallax" ref={Parall => {
                                this.Parall = Parall;
                            }}>
                                <img src={pic4} style={{ transform: "translate3d(-50%, 312.664px, 0px)", opacity: "1" }}alt="about pic" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Food Delivery!</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            We provide food deliveries. This is of the students, for the students and by a student!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="parallax-container" >
                            <div className="parallax" ref={Parallax => {
                                this.Parallax = Parallax;
                            }}>
                                <img src={eating} style={{ transform: "translate3d(-50%, 312.664px, 0px)", opacity: "1" }} alt="about pic"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="parallax-container" >
                            <div className="parallax" ref={Parallax => {
                                this.Parallax = Parallax;
                            }}>
                                <img src={del1} style={{ transform: "translate3d(-50%, 312.664px, 0px)", opacity: "1" }} alt="about pic"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="parallax-container" >
                            <div className="parallax" ref={Parallax => {
                                this.Parallax = Parallax;
                            }}>
                                <img src={lib1} style={{ transform: "translate3d(-50%, 312.664px, 0px)", opacity: "1" }} alt="about pic"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Creator</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                                <a href="https://www.linkedin.com/in/theodore20151014166">View Creator</a>
                        </p>
                    </div>
                </div>

                {/* <div className="paral" ref={Paral => {
                    this.Paral = Paral;
                }}>
                    <div className="parallax-container" >
                        <div className="paral">
                            <img src={pic4} style={{ transform: "translate3d(-50%, 312.664px, 0px); opacity: 1" }} alt="about pic"/>
                        </div>
                    </div>
                </div> */}

            </>
        );
    }
}

export default About;