import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Slider1 = require("../../../assets/images/Slider/slide1.png");
const Slider2 = require("../../../assets/images/Slider/slide2.png");

const AppliedJob = () =>{

    return(<>        
                    <div class="row">                        
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="jb_listing_left_fullwidth mt-0 jb_cover">
                                <div class="row">
                                    <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div class="jb_job_post_side_img">
                                            <img src={Slider1} alt="post_img" />
                                        </div>
                                        <div class="jb_job_post_right_cont">
                                            <h4><a href="#">Maintenance Manager</a></h4>

                                            <ul>
                                                <li><LocalAtmIcon  size={50} style={{fill: "#979797"}} />&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                <li><LocationOnIcon  size={ 50 } style={{fill: "#979797"}} />&nbsp; Coimbatore</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div class="jb_job_post_right_btn_wrapper">
                                            <ul>
                                                <li>
                                                    <div class="job_adds_right">
                                                        <a href="#"><FavoriteBorderIcon size={50} /></a>
                                                    </div>
                                                </li>
                                                <li><a href="#">Part Time</a></li>
                                                <li> <a href="#" class="applied_btn">applied</a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="jb_listing_left_fullwidth mt-0 jb_cover">
                                <div class="row">
                                    <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div class="jb_job_post_side_img">
                                            <img src={Slider2} alt="post_img" />
                                        </div>
                                        <div class="jb_job_post_right_cont">
                                            <h4><a href="#">Maintenance Manager</a></h4>

                                            <ul>
                                                <li><LocalAtmIcon  size={50} style={{fill: "#979797"}} />&nbsp; ₹ 12,000 - 15,000 / Month</li>
                                                <li><LocationOnIcon  size={ 50 } style={{fill: "#979797"}} />&nbsp; Coimbatore</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div class="jb_job_post_right_btn_wrapper">
                                            <ul>
                                                <li>
                                                    <div class="job_adds_right">
                                                        <a href="#"><FavoriteBorderIcon size={50}  /></a>
                                                    </div>
                                                </li>
                                                <li><a href="#">Part Time</a></li>
                                                <li> <a href="#" class="applied_btn">Scheduled
                                                </a></li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
    </>)


}

export default AppliedJob