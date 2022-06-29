import React from "react";
const Slider1 = require("../../../assets/images/Slider/slide1.png");
const Slider2 = require("../../../assets/images/Slider/slide2.png");
const Slider3 = require("../../../assets/images/Slider/slide3.png");
const Slider4 = require("../../../assets/images/Slider/slide4.png");
const Slider5 = require("../../../assets/images/Slider/slide5.png");

const Service =() =>{

    return(<>
            <div className="top_company_wrapper jb_cover">
                <div className="container">
                    <div className="jb_heading_wraper_padding">
                        <h3>Learn More About Your <span> Local Companies</span></h3>
                </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="top_company_slider_wrapper jb_cover">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">                                           
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={Slider1} alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={Slider2} alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={ Slider3 } alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={Slider4} alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={ Slider5 } alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                                                <div className="company_main_wrapper">
                                                    <div className="company_img_wrapper">
                                                        <img src={ Slider1 } alt="team_img1" />
                                                        <div className="btc_team_social_wrapper">
                                                            <h1>Hiring</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>

                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)


}

export default Service