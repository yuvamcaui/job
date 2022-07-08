import React from "react";
import Chart from "./Chart";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FeedIcon from '@mui/icons-material/Feed';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MailIcon from '@mui/icons-material/Mail';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import RecentApp from "./RecentApp";

const Information = ({ formData }) =>{

    const { memberType,name,companyName,email,mobileNo,industryId,companyTypeId,packageId,noOfEmployees,website,gstIn,logo,verification,referCode,referredCode,countryId,stateId,cityId,address,pinCode,status,establishmentYear,latitude,longitude,social} = formData;

                return(<>
                        <div className="row">
                           <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <Chart />
                                    </div>                                   
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="emp_job_post jb_cover">
                                            <div className="emp_job_side_img">
                                                <FeedIcon fontSize="large"  />
                                            </div>
                                            <div className="emp_job_side_text">
                                                <h1>23</h1>
                                                <p>job posted</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="emp_job_post jb_cover">
                                            <div className="emp_job_side_img parts">
                                                    <DraftsIcon fontSize="large"  />
                                            </div>
                                            <div className="emp_job_side_text">
                                                <h1>230</h1>
                                                <p>total applications</p>
                                            </div>
                                        </div>
                                    </div>                                  
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="emp_job_post jb_cover">
                                            <div className="emp_job_side_img ress">
                                                <PersonIcon fontSize="large"  />
                                            </div>
                                            <div className="emp_job_side_text">
                                                <h1>120</h1>
                                                <p>shortlisted resume</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="emp_job_post jb_cover">
                                            <div className="emp_job_side_img greens">
                                                <FeedIcon fontSize="large"  />
                                            </div>
                                            <div className="emp_job_side_text">
                                                <h1>6</h1>
                                                <p>Hired</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="job_filter_category_sidebar jb_cover">
                                            <div className="job_filter_sidebar_heading jb_cover">
                                                <h1> basic information <span><a href="#" data-toggle="modal" data-target="#myModal1"><i className="fas fa-edit"></i></a></span></h1>
                                            </div>
                                            <div className="job_overview_header jb_cover">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                               <CalendarTodayIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>Industry:</li>
                                                                    <li>{companyName}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                                <CalendarTodayIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>Type</li>
                                                                    <li>Private Limited</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                                <AddLocationIcon size={10}  style={{fill: "#979797"}} />
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
                                                                <SendToMobileIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>Mobile No:</li>
                                                                    <li>{ mobileNo }</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                                <MailIcon size={10}  style={{fill: "#979797"}} />
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
                                                                <PersonIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>Employee size:</li>
                                                                    <li>{ noOfEmployees }</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="jp_listing_overview_list_main_wrapper  jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                                <LanguageIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>website:</li>
                                                                    <li><a href="#">www.webstrot.com</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                                                            <div className="jp_listing_list_icon">
                                                                <InfoIcon size={10}  style={{fill: "#979797"}} />
                                                            </div>
                                                            <div className="jp_listing_list_icon_cont_wrapper">
                                                                <ul>
                                                                    <li>GSTIN</li>
                                                                    <li>{ gstIn }</li>
                                                                </ul>
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
                        <div className="row">
                            <RecentApp />
                        </div>                       
     </>)


}

export default Information;