import React from 'react';
const testimonial1 = require("../../../assets/images/Testinomial/testimonial1.png")
const testimonial2 = require("../../../assets/images/Testinomial/testimonial2.png")
const mock = require("../../../assets/images/Testinomial/mock.png")
const appstore = require("../../../assets/images/Testinomial/appstore.png")
const playstore = require("../../../assets/images/Testinomial/appstore.png")
const Testimonial = () =>{
    return(<>
            <div class="download_wrapper index3_download jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="download_mockup_design jb_cover">
                                    <img src={ mock } class="img-responsive" alt="img" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="download_app_store jb_cover">
                                    <h1>Download</h1>
                                    <h2>Job Portal App Now!</h2>
                                    <p>All it takes is 30 seconds to Download. Your Mobile App for Job
                                        <br /> Fast, Simple  Delightful.</p>
                                    <div class="app_btn playstore_2 jb_cover">
                                        <img src={ appstore }></img>
                                        <img src={ playstore }></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="popular_wrapper jb_cover">     
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                            <div className="jb_heading_wraper_padding">
                                <h3>Testimonials</h3>
                            </div>
                        </div>
                        <div className="rivew_testimonial_slider jb_cover">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="jb_saying_content_wrapper jb_cover">
                                        <div className="saying_img">
                                            <img src={ testimonial1 } alt="img" />
                                        </div>
                                        <div className="rating_star"><i className="flaticon-star-1"></i><i className="flaticon-star-1"></i><i className="flaticon-star-1"></i><i className="flaticon-star"></i><i className="flaticon-star"></i></div>
                
                                        <p>“ I don't always clap, but when I do, it'sbecause of Sella. We can't understandhow we've been Sella. ”</p>
                                        <div className="jb_saying_img_name">
                                            <h1><a href="#">Marita Irene</a></h1>
                                            <p>Support Manager @ Echo</p>
                                        </div>
                                    </div>
                                </div> 
                
                                <div className="item">
                                    <div className="jb_saying_content_wrapper jb_cover">
                                        <div className="saying_img">
                                            <img src={ testimonial2 } alt="img" />
                                        </div>
                                        <div className="rating_star"><i className="flaticon-star-1"></i><i className="flaticon-star-1"></i><i className="flaticon-star-1"></i><i className="flaticon-star"></i><i className="flaticon-star"></i></div>
                                        <p>“ I don't always clap, but when I do, it'sbecause of Sella. We can't understandhow we've been Sella. ”</p>
                                        <div className="jb_saying_img_name">
                                            <h1><a href="#">Marita Irene</a></h1>
                                            <p>Support Manager @ Echo</p>
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
export default Testimonial