import React,{useState} from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom";
const ProfileMen = require("../../../assets/images/icon/profile-men.jpg")

const Navigation = ({ activeScreeen, active, name }) =>{    

    return(<>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="emp_dashboard_sidebar jb_cover">
                    <img src={ProfileMen} className="img-responsive" alt="post_img" />
                    <div className="emp_web_profile candidate_web_profile jb_cover">
                        <h4>{ name }</h4>
                    </div>
                    <div className="emp_follow_link jb_cover">
                    <ul className="feedlist">
                            <li onClick={ ()=>activeScreeen(1) }><Link to="#" className={ active === 1 && "link_active" }><DashboardIcon size={30} style={{fill: "#979797"}} /> DashBoard </Link></li>
                            <li onClick={ ()=>activeScreeen(2) }>
                                <Link to="#" className={ active === 2 && "link_active" }> <EditIcon  size={30} style={{fill: "#979797"}} />Profile
                                </Link>
                            </li>                           
                            <li onClick={ ()=>activeScreeen(3) }><Link to="#" className={ active === 3 && "link_active" }> <CheckBoxIcon size={30}  style={{fill: "#979797"}}/> applied job</Link></li>
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