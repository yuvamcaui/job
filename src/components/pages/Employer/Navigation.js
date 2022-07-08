import React,{useState} from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WorkIcon from '@mui/icons-material/Work';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from "react-router-dom";
const ProfileMen = require("../../../assets/images/icon/profile-men.jpg")
const Slider1 = require("../../../assets/images/Slider/slide1.png");

const Navigation = ({ activeScreeen, active, name }) =>{    

    return(<>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="employer_dashboard_sidebar company-logo-set jb_cover">
                    <img src={Slider1} className="img-responsive" alt="post_img" />
                    <div className="emp_web_profile candidate_web_profile jb_cover">
                        <h4>{ name }</h4>
                    </div>
                    <div className="emp_follow_link jb_cover">
                    <ul className="feedlist">
                            <li onClick={ ()=>activeScreeen(1) }><Link to="#" className={ active === 1 && "link_active" }><DashboardIcon size={30} style={{fill: "#979797"}} /> DashBoard </Link></li>
                                                   
                            <li onClick={ ()=>activeScreeen(6) }><Link to="#" className={ active === 6 && "link_active" }>
                                     <GroupAddIcon size={30}  style={{fill: "#979797"}}/> Feeds</Link>
                            </li>
                            <li onClick={ ()=>activeScreeen(7) }><Link to="#" className={ active === 7 && "link_active" }>
                                     <GroupAddIcon size={30}  style={{fill: "#979797"}}/> Connection</Link>
                            </li>
                            <li onClick={ ()=>activeScreeen(3) }><Link to="#" className={ active === 3 && "link_active" }>
                                     <GroupAddIcon size={30}  style={{fill: "#979797"}}/> Post New Jobs</Link>
                            </li>
                            <li onClick={ ()=>activeScreeen(4) }><Link to="#" className={ active === 4 && "link_active" }>
                                     <WorkIcon size={30}  style={{fill: "#979797"}}/> Manage Jobs</Link>
                            </li>
                            <li onClick={ ()=>activeScreeen(5) }><Link to="#" className={ active === 5 && "link_active" }>
                                     <BusinessCenterIcon size={30}  style={{fill: "#979797"}}/> Application</Link>
                            </li>
                            <li onClick={ ()=>activeScreeen(2) }>
                                <Link to="#" className={ active === 2 && "link_active" }> <EditIcon  size={30} style={{fill: "#979797"}} />Profile
                                </Link>
                            </li>   
                    </ul>
                        <ul className="feedlist logout_link jb_cover">
                            <li><Link to={"/logOut"}><LogoutIcon size={30} style={{fill: "#979797"}} /> log out  </Link></li>   
                        </ul>
                    </div>
                </div>
            </div>
    </>)


}

export default Navigation