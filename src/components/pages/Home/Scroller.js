import React from 'react'
const banner = require("../../../assets/images/Scroller/banner.png");
const banner1 = require("../../../assets/images/Scroller/banner2.png")

const Scroller = () =>{

    return(<>
    <div className="main_slider_wrapper slider-area jb_cover">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="carousel-captions caption-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="content">
                                   
                                        <h2 data-animation="animated fadeInUp">We Offer <span> 25,000 </span>Job
                                            Vacancies Right Now!.</h2>

                                        <p data-animation="animated fadeInUp">The Exclusive Job Portal for Services, Electrical, Maintenance Security Industries</p>
                                        <div data-animation="animated fadeInUp" className="btn_hover slider_btn">
                                            <a href="#">sign up free</a>
                                        </div>
                                    
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div classNameName="img">
                                        <img src={banner} className="img-responsive" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className="carousel-item">
                    <div className="carousel-captions caption-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="content">
                                   
                                        <h2 data-animation="animated fadeInUp">Know About Your Local <span>Companies</span></h2>

                                        <p data-animation="animated fadeInUp">The Exclusive Job Portal for Services, Electrical, Maintenance Security Industries</p>
                                        <div data-animation="animated fadeInUp" className="btn_hover slider_btn">
                                            <a href="#">sign up free</a>
                                        </div>
                                    
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="img">
                                        <img src={banner1} className="img-responsive" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active">
                    </li>
                    <li data-target="#carousel-example-generic" data-slide-to="1" className="">
                    </li>
                    <li data-target="#carousel-example-generic" data-slide-to="2" className="">
                    </li>
                </ol>
                <div className="carousel-nevigation">
                    <a className="prev" href="#carousel-example-generic" role="button" data-slide="prev"><i className="flaticon-left-arrow"></i>
					</a>
                    <a className="next" href="#carousel-example-generic" role="button" data-slide="next"><i className="flaticon-right-arrow"></i>
					</a>
                </div>
            </div>
        </div>
    </div>
    </>)


}

export default Scroller