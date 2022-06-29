import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DraftsIcon from '@mui/icons-material/Drafts';

const Information = ({ formData }) =>{

    const { name,mobileNo,email, doB ,genderId ,aadharNo,countryId,stateId, cityId,address,pinCode, skillCategory,audioPath} = formData;

                    return(<>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="job_filter_category_sidebar jb_cover">
                                        <div className="job_filter_sidebar_heading jb_cover">
                                            <h1> basic information</h1>
                                        </div>
                                        <div className="job_overview_header jb_cover">

                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fa fa-info-circle"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>phone:</li>
                                                        <li>{ mobileNo }</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>email:</li>
                                                        <li><a href="#">{ email }</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>Address:</li>
                                                        <li>{ address }</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>Educational Qualification:</li>
                                                        <li>Under Graduate</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>Degree:</li>
                                                        <li>B.Sc(CS)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                <div className="jp_listing_list_icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="jp_listing_list_icon_cont_wrapper">
                                                    <ul>
                                                        <li>Experience:</li>
                                                        <li>3 years</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        

                                        </div>
                                    </div>                        
                            
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="job_filter_category_sidebar jb_cover">
                                        <div className="job_filter_sidebar_heading jb_cover">
                                            <h1>My Jobs</h1>
                                        </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="emp_job_post jb_cover">
                                                        <div className="emp_job_side_img">
                                                           <LibraryBooksIcon  size={ 60 } />

                                                        </div>
                                                        <div className="emp_job_side_text">
                                                            <h1>20</h1>
                                                            <p>applied jobs</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="emp_job_post jb_cover">
                                                        <div className="emp_job_side_img greens">
                                                            <RemoveRedEyeIcon size={60} />
                                                        </div>
                                                        <div className="emp_job_side_text">
                                                            <h1>11</h1>
                                                            <p>shortlisted</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="emp_job_post jb_cover">
                                                        <div className="emp_job_side_img greens">
                                                            <RemoveRedEyeIcon size={60} />
                                                        </div>
                                                        <div className="emp_job_side_text">
                                                            <h1>4</h1>
                                                            <p>Scheduled For InterView</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="emp_job_post jb_cover">
                                                        <div className="emp_job_side_img parts">
                                                            <DraftsIcon size={60} />

                                                        </div>
                                                        <div className="emp_job_side_text">
                                                            <h1>34</h1>
                                                            <p>Saved jobs</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="emp_job_post jb_cover">
                                                        <div className="emp_job_side_img parts">
                                                            <DraftsIcon size={60} />

                                                        </div>
                                                        <div className="emp_job_side_text">
                                                            <h1>2</h1>
                                                            <p>Confirmed</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                    </div>
                                </div>
                            </div>
    
                         </>)


}

export default Information;