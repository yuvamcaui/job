import React from 'react';
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const Header1 = () =>{
    return(<>
     <nav class="cd-dropdown d-block d-sm-block d-md-block d-lg-none d-xl-none">
        <h2><a href="index.html"> <span><img src={ logo } className="background-img" alt="img" /></span></a></h2>
        <a href="#0" class="cd-close">Close</a>
         <ul class="cd-dropdown-content">
            <li>
                <form class="cd-search">
                    <input type="search" placeholder="Search..." />
                </form>
            </li>
            <li class="has-children">
                <a href="#">home</a>
                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                    <li class="go-back"><a href="#0">Menu</a></li>
                    <li><a href="index.html">home I</a></li>
                    <li><a href="index_II.html">home II</a></li>
                    <li><a href="index_III.html">home III</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#">jobs</a>
                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                    <li class="go-back"><a href="#0">Menu</a></li>
                    <li><a href="job_listing_grid_left_filter.html">job listing grid </a></li>
                    <li><a href="job_listing_list_left_filter.html">job listing list</a></li>
                    <li><a href="job_single.html">job single</a></li>
                </ul>
            </li>         
            <li class="has-children">
                <a href="#">pages</a>
                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                    <li class="go-back"><a href="#0">Menu</a></li>
                    <li><a href="about_us.html">about us</a></li>
                    <li><a href="companies.html">companies</a></li>
                    <li><a href="company_single.html">company single</a></li>
                    <li><a href="error_page.html">error page</a></li>
                    <li><a href="login.html">login</a></li>
                    <li><a href="pricing_table.html">pricing table</a></li>
                    <li><a href="sign_up.html">sign up</a></li>
                </ul>
            </li>
            <li class="has-children">
                <a href="#">dashboard</a>
                <ul class="cd-secondary-dropdown is-hidden">
                    <li class="go-back"><a href="#0">Menu</a>
                    </li>
                    <li class="has-children"> <a href="#">candidate</a>
                        <ul class="cd-secondary-dropdown is-hidden">
                            <li class="go-back"><a href="#0">Menu</a>
                            </li>
                            <li>
                                <a href="../dashboard/candidate_applied_job.html">applied job </a>
                            </li>
                            <li>
                                <a href="../dashboard/candidate_dashboard.html">dashboard</a>
                            </li>
                            <li>
                                <a href="../dashboard/candidate_edit_profile.html"> edit profile</a>
                            </li>
                            <li>
                                <a href="../dashboard/candidate_favourite_job.html">favourite job</a>
                            </li>
                            <li>
                                <a href="../dashboard/candidate_resume.html"> resume</a>
                            </li>
                            <li>
                                <a href="../dashboard/message.html"> message</a>
                            </li>
                            <li>
                                <a href="../dashboard/pricing_plans.html">pricing plans</a>
                            </li>
                        </ul>                     
                    </li>                  
                    <li class="has-children"> <a href="#">company</a>
                        <ul class="cd-secondary-dropdown is-hidden">
                            <li class="go-back"><a href="#0">Menu</a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_applications.html"> applications </a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_company_page.html">company page</a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_employer_dashboard.html"> dashboard</a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_employer_edit_profile.html">edit profile</a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_employer_manage_jobs.html"> manage jobs</a>
                            </li>
                            <li>
                                <a href="../dashboard/comp_post_new_job.html"> post new job</a>
                            </li>
                            <li>
                                <a href="../dashboard/message.html">message</a>
                            </li>
                            <li>
                                <a href="../dashboard/pricing_plans.html">pricing plans</a>
                            </li>
                        </ul>                      
                    </li>
                </ul>              
            </li>
            <li class="has-children">
                <a href="#">blog</a>
                <ul class="cd-secondary-dropdown icon_menu is-hidden">
                    <li class="go-back"><a href="#0">Menu</a></li>
                    <li><a href="blog_single.html">blog single</a></li>
                    <li><a href="blog_category_right_sidebar.html">blog category</a></li>
                </ul>
            </li>
            <li><a href="contact_us.html">contact us </a></li>
            <li><a href="login.html">login</a></li>
        </ul>    
    </nav>
    </>)
}

export default Header1;