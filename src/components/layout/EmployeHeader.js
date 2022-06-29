import React from 'react';
import { Link } from 'react-router-dom';
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");
const EmployeHeader =() =>{
    return(<>
       <nav class="cd-dropdown cd_dropdown_index2 cd_dropdown_index3 d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <h2><Link to="/"> <span><img src={ logo } alt="img" /></span></Link></h2>
            <Link to="#0" class="cd-close">Close</Link>
                <ul class="cd-dropdown-content">
                    <li>
                        <form class="cd-search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li class="has-children"><Link to="/">Home</Link></li>
                    <li class="has-children"><Link to="/job">Jobs</Link></li>           
                    <li class="has-children"><Link to="/feed">Feeds</Link></li>          
                    <li><Link to="/about-us">Profile </Link></li>                   
                </ul>      
        </nav>
        <div class="cp_navi_main_wrapper index_2_top_header index_3_top_header jb_cover">
            <div class="cp_logo_wrapper index_2_logo index_3_logo">
                <Link to="/">
                    <img src={ logo }  className="background-img" alt="logo" />
                </Link>
            </div>     
            <header class="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cd-dropdown-wrapper">
                                <Link class="house_toggle" to="/">                               
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>        
            </header>
            <div class="jb_navigation_wrapper index_2_right_menu index_3_right_menu">
                <div class="posting_job">
                    <ul>
                        <li>
                            <div class="jb_search_btn_wrapper index_2_search d-none d-sm-none d-md-none d-lg-block d-xl-block">                        
                                <div class="extra-nav">
                                    <div class="extra-cell">
                                        <button id="quik-search-btn" type="button" class="site-button radius-xl"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            
                                <div class="dez-quik-search bg-primary-dark">
                                    <form action="#">
                                        <input name="search" value="" type="text" class="form-control" placeholder="Type to search..." />
                                        <span id="quik-search-remove"><i class="fas fa-times"></i></span>
                                    </form>
                                </div>
                            </div>
                        </li> 
                        <li class="btn_hover"><Link to="/login">Log Out</Link></li>
                    </ul>
                </div>
                <div class="mainmenu green_main_menu blue_main_menu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                    <ul class="main_nav_ul menu_2_ul">
                        <li class="has-mega gc_main_navigation"><Link to="/" class="gc_main_navigation active_class active_class2 active_class3">Home</Link></li>		
                        <li class="has-mega gc_main_navigation"><Link to="/job" class="gc_main_navigation">Jobs</Link></li>
                        <li class="has-mega gc_main_navigation kv_sub_menu green_sub_menu blue_sub_menu"><Link to="/feed" class="gc_main_navigation">Feeds</Link></li> 
                        <li class="has-mega gc_main_navigation kv_sub_menu green_sub_menu blue_sub_menu"><Link to="/feed" class="gc_main_navigation">Profile</Link></li> 
                    </ul>
                </div>
            </div>
        </div>    
    </>)
}
export default EmployeHeader