import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenLocalStorage, getTokenLocalUserStorage } from '../../utils/Common';
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");
const profile = require("../../assets/images/icon/profile.png")
const Header2 =() =>{ 

    const [header,setHeader] = useState(getTokenLocalStorage());

    const [ loginType,setLoginType ] = useState(getTokenLocalUserStorage())

    console.log(loginType)
    console.log(loginType?.memberType)

    return(<>
        <nav className="cd-dropdown cd_dropdown_index2 cd_dropdown_index3 d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <h2><Link to="/"> <span><img src={ logo } alt="img" /></span></Link></h2>
            <Link to="#0" className="cd-close">Close</Link>
                <ul className="cd-dropdown-content">
                    <li>
                        <form className="cd-search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li className="has-children"><Link to="/">Home</Link></li>
                    <li className="has-children"><Link to="/job">Jobs</Link></li>           
                    <li className="has-children"><Link to="/feed">Feeds</Link></li>   
                    {
                        header ===  null ? (<><li><Link to="/about-us">Contact us </Link></li> <li><Link to="/contact">About Us </Link></li> <li><Link to="/login">Login</Link></li></>) :
                        (<> <li><Link to="#">Connection</Link></li> </>)
                    }       
                   
                </ul>      
        </nav>
        <div className="cp_navi_main_wrapper index_2_top_header index_3_top_header jb_cover">
            <div className="cp_logo_wrapper index_2_logo index_3_logo">
                <Link to="/">
                    <img src={ logo }  className="background-img" alt="logo" />
                </Link>
            </div>     
            <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cd-dropdown-wrapper">
                                <Link className="house_toggle" to="/"></Link> 
                            </div>
                        </div>
                    </div>
                </div>        
            </header>
            <div className="jb_navigation_wrapper index_2_right_menu index_3_right_menu">      
                <div className="posting_job">
                    <ul>
                        <li>
                            <div className="jb_search_btn_wrapper index_2_search d-none d-sm-none d-md-none d-lg-block d-xl-block">                        
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <button id="quik-search-btn" type="button" className="site-button radius-xl"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            
                                <div className="dez-quik-search bg-primary-dark">
                                    <form action="#">
                                        <input name="search" value="" type="text" className="form-control" placeholder="Type to search..." />
                                        <span id="quik-search-remove"><i className="fas fa-times"></i></span>
                                    </form>
                                </div>
                            </div>
                        </li>
                        {
                            header ===  null &&  (<><li className="btn_hover"><Link to="/employe-sign">Sign Up</Link></li>
                            <li className="btn_hover"><Link to="/login">Login</Link></li></>)
                        }                   
                        
                    </ul>
                </div>
                <div className="mainmenu green_main_menu blue_main_menu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                    <ul className="main_nav_ul menu_2_ul">
                        <li className="has-mega gc_main_navigation"><Link to="/" className="gc_main_navigation active_className active_className2 active_className3">Home</Link></li>		
                        <li className="has-mega gc_main_navigation"><Link to="/job" className="gc_main_navigation">Jobs</Link></li>
                        <li className="has-mega gc_main_navigation kv_sub_menu green_sub_menu blue_sub_menu"><Link to="/feed" className="gc_main_navigation">  Feeds</Link></li>                   
                        {
                            header === null ? (<><li><Link to="/contact" className="gc_main_navigation">Contact</Link></li>,
                            <li><Link to="/about-us" className="gc_main_navigation">About Us</Link></li></>) :   (<> <li><Link to="#">Connection</Link></li> 
                            <li><Link to="#"><img src={ profile } alt="img" /></Link>
                            {
                                loginType?.memberType === 1 ? (<ul className="navi_2_dropdown">                               
                             
                                                                <li className="parent"><Link to={"/employe-dashboard"}><i className="far fa-calendar-alt"></i>Profile</Link></li>
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-comment"></i>Notifications</Link></li>                                            
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-question-circle"></i>Help</Link></li>
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-lock"></i>Lock Screen</Link></li>
                                                                <li className="parent"><Link to={"/logOut"}><i className="fas fa-sign-in-alt"></i>logout</Link></li>
                                                             </ul>) : 
                                                             (<ul className="navi_2_dropdown">  
                                                                <li className="parent"><Link to={"/employer-dashboard"}><i className="far fa-calendar-alt"></i>Profile</Link></li>
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-comment"></i>Notifications</Link></li>                                            
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-question-circle"></i>Help</Link></li>
                                                                <li className="parent"><Link to={"/employe-profile"}><i className="fas fa-lock"></i>Lock Screen</Link></li>
                                                                <li className="parent"><Link to={"/logOut"}><i className="fas fa-sign-in-alt"></i>logout</Link></li>
                                                             </ul>)
                            }                                
                            </li>
                            </>)
                        }
                    </ul>
                </div>
            </div>
        </div>    
    </>)
}
export default Header2