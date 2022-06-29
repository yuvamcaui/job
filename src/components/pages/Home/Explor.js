import React from "react";
import Unique from "./Unique";
import Testimonial from "./Testimonial";
import Popular from "./Popular";
import { Link } from "react-router-dom";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import BarChartIcon from '@mui/icons-material/BarChart';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const MockUp = require("../../../assets/images/mockup/mockup.png")
const Slider1 = require("../../../assets/images/Slider/slide1.png");
const Slider2 = require("../../../assets/images/Slider/slide2.png");
const Slider3 = require("../../../assets/images/Slider/slide3.png");
const Slider4 = require("../../../assets/images/Slider/slide4.png");
const Slider5 = require("../../../assets/images/Slider/slide5.png");

const Explor = () =>{

    return(<>
                <div className="jb_category_wrapper jb_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div className="jb_heading_wraper_padding">
                                    <h3>
                                        Explore more about <span> Areas your are interested</span> in
                                    </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <Link to="#">
                                    <div className="hover-block"></div>                                    
                                    <LaptopChromebookIcon size={50} />
                                    <h3>CNC Operators</h3>
                                    <p>(4525 jobs)</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <BarChartIcon size={50} />
                                    <h3>accounting</h3>
                                    <p>(214 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <MedicalServicesIcon size={50} />
                                    <h3>Nursing</h3>
                                    <p>(4572 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <AssuredWorkloadIcon size={50} />
                                    <h3>goverment</h3>
                                    <p>(2414 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <NewspaperIcon size={50} />
                                    <h3>media & news</h3>
                                    <p>(2142 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <RestaurantIcon size={50} />
                                    <h3>restaurents</h3>
                                    <p>(2342 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <LaptopChromebookIcon size={50} />
                                    <h3>CNC Operators</h3>
                                    <p>(4525 jobs)</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <BarChartIcon size={50} />
                                    <h3>accounting</h3>
                                    <p>(214 jobs)</p>

                                </a>
                            </div>
                        </div>
                        
                        <div className="header_btn search_btn load_btn jb_cover">

                            <a href="#">load more</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="counter_wrapper counter_3_wrapper jb_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="counter_mockup_design jb_cover">

                                <img src={MockUp} className="img-responsive" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="counter_right_wrapper counter_index3_right jb_cover">
                                <h1>Statistics About Taak</h1>
                                <div className="counter_width">
                                    <div className="counter_cntnt_box">

                                        <div className="count-description"><span className="timer">2500</span><span>+</span>
                                            <p className="con2">Jobs Posted </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter_width">
                                    <div className="counter_cntnt_box">

                                        <div className="count-description"> <span className="timer">1000</span><span>+</span>
                                            <p className="con2">Employers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="counter_width">
                                    <div className="counter_cntnt_box">

                                        <div className="count-description"> <span className="timer">3000</span><span>+</span>
                                            <p className="con2">Employees</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jb_category_wrapper jb_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div className="jb_heading_wraper_padding">
                                    <h3>
                                        Expolre the Jobs <span>Arround Your Location</span>
                                    </h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Coimbatore</h3>
                                    <p>(4525 jobs)</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Ooty</h3>
                                    <p>(214 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Avinashi</h3>
                                    <p>(4572 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Tirupur</h3>
                                    <p>(2414 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Erode</h3>
                                    <p>(2142 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Perundurai</h3>
                                    <p>(2342 jobs)</p>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Karur</h3>
                                    <p>(4525 jobs)</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <div className="jb_browse_category jb_cover jobcover_city">
                                <a href="job_listing_list_left_filter.html">
                                    <div className="hover-block"></div>
                                    <h3>Salesm</h3>
                                    <p>(214 jobs)</p>

                                </a>
                            </div>
                        </div>
                        
                        <div className="header_btn search_btn load_btn jb_cover">

                            <a href="#">load more</a>

                        </div>
                    </div>
                </div>
            </div>            
        
            <div className="best_jobs_wrapper index3_best_job_wrapper  jb_cover">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                            <div className="jb_heading_wraper_padding">

                                <h3>Our Best Jobs for You</h3>

                                <p>20+ Recently Added Jobs</p>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="tab-content">
                                <div id="home" className="tab-pane active">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider1 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Shop Keeper</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider2 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Floor Manager</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider3 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Safety Engineer</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider4 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Maintenance Manager</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider5 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Garments Supervisors</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider1 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Marketing Executives</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <FavoriteBorderIcon size={50} />
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                               <ShareIcon size={50} />
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="menu1" className="tab-pane fade">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">


                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider3 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">CNC Operators</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                    
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">


                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider4 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Bus Driver</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                                <i className="far fa-heart"></i>
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                                <i className="far fa-heart"></i>
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">

                                            <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                        <div className="jp_job_post_side_img">
                                                            <img src={ Slider5 } alt="post_img" />

                                                        </div>
                                                        <div className="jp_job_post_right_cont">
                                                            <h4><a href="#">Nurse</a></h4>

                                                            <ul>
                                                                <li><i className="flaticon-cash"></i>&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                                <li><i className="flaticon-location-pointer"></i>&nbsp; Coimbatore</li>
                                                            </ul>
                                                            <p>Assist all IR and Welfare activities maintain healthy industrial climate in the Plant.
                                                                Coordinating Training and development, Employee engagement across the plant.</p>
                                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 job_controls">
                                                        <ul>
                                                            <a href="#" className="apply_button" data-toggle="modal" data-target="#myModal01">
                                                                Apply
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                                <i className="far fa-heart"></i>
                                                            </a>
                                                            <a href="#" className="apply_icons" data-toggle="modal" data-target="#myModal01">
                                                                <i className="far fa-heart"></i>
                                                            </a>
                                                                
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn_hover slider_btn jobs_btn_3 jb_cover">
                                <a href="#">view all</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Unique />   
            <Testimonial />
            <Popular />
    </>)



}

export default Explor