import React from "react";

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';


const Popular = () =>{
    return(<>
        <div class="popular_wrapper jb_cover">     
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                        <div class="jb_heading_wraper_padding">
                            <h3>Register Here</h3>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="jp_register_section_main_wrapper jb_cover">
                            <div class="jp_regis_left_side_box_wrapper">
                                <div class="jp_regis_left_side_box">
                                    <LaptopChromebookIcon size={50} />
                                    <h4>I’m an employer</h4>
                                    <p>Signed in companies are able to post new
                                        <br /> job offers, searching for candidate...</p>
                                    <ul>
                                        <li><a href="#" class="price_btn regis_btn"> register as employer</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="jp_regis_right_side_box_wrapper">

                                <div class="jp_regis_right_side_box">
                                    <MedicalServicesIcon size={50} />
                                    <h4>I’m an Employee</h4>
                                    <p>Signed in companies are able to post new
                                        <br /> job offers, searching for candidate...</p>
                                    <ul>
                                        <li><a href="#" class="price_btn regis_btn">register as Employee</a></li>
                                    </ul>
                                </div>
                                <div class="jp_regis_center_tag_wrapper">
                                    <p>OR</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
 </>)

}
export default Popular