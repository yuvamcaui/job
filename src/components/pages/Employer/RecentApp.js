import React from 'react';
const Slider1 = require("../../../assets/images/Slider/slide1.png");
const Slider2 = require("../../../assets/images/Slider/slide2.png");

const RecentApp = () =>{

    return(<>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="job_filter_category_sidebar jb_cover">
                                <div className="job_filter_sidebar_heading jb_cover">
                                    <h1> Recent Applicants</h1>
                                </div>
                                <div className="job_overview_header apps_wrapper jb_cover">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                                            <div className="jp_job_post_side_img">
                                                <img src={Slider1} alt="post_img" />

                                            </div>
                                            <div className="jp_job_post_right_cont">
                                                <h4>Ramesh Arumugam</h4>
                                                <ul>
                                                    <li>Marketing Executive</li>
                                                    <li>Applied On : 25th June 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                                            <div className="jp_job_post_right_btn_wrapper jb_cover">
                                                <div className="header_btn search_btn appbtn jb_cover">
                                                    <a href="#">View</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="job_overview_header apps_wrapper jb_cover">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                                            <div className="jp_job_post_side_img">
                                                <img src={ Slider2 } alt="post_img" />

                                            </div>
                                            <div className="jp_job_post_right_cont">
                                                <h4>Ramesh Arumugam</h4>
                                                <ul>
                                                    <li>Marketing Executive</li>
                                                    <li>Applied On : 25th June 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                                            <div className="jp_job_post_right_btn_wrapper jb_cover">
                                                <div className="header_btn search_btn appbtn jb_cover">

                                                    <a href="#">View</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>                           
                            </div>
                        </div>
    
    </>)



}

export default RecentApp