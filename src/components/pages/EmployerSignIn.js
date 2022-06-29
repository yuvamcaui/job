import React,{useState}  from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EmployerSignIn } from '../../store/action/LoginAction';
import Header2 from "../layout/Header2";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const EmployerSignIns = () =>{

    const history = useNavigate()

    const dispatch = useDispatch()

    const selector = useSelector(state => state.LoginReducer);   

    const [formData,setFormData] = useState({
        name               : '',
        companyName        : '',
        email              : '',
        mobileNo           : '',
        password           :''
    });


    const { name,companyName,email ,mobileNo,password} = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit= async e =>{
        e.preventDefault();       
        dispatch(EmployerSignIn(name, companyName, email, mobileNo, password, history));    
    };   
    return(<>
   <Header2 />
    <div class="page_title_section">
        <div class="page_header">
            <div class="container">
                <div class="row">                  
                    <div class="col-lg-9 col-md-8 col-12 col-sm-7">

                        <h1>Employer Sign Up</h1>
                    </div>
                    <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                        <div class="sub_title_section">
                            <ul class="sub_title">
                                <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                <li>Employer Sign Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div class="login_wrapper jb_cover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="login_top_box jb_cover">
                        <div class="login_banner_wrapper">
                            <img src={ logo } className="background-img" alt="logo" />
                            <div class="header_btn search_btn facebook_wrap jb_cover">

                                <a href="#">login with facebook <i class="fab fa-facebook-f"></i></a>

                            </div>
                            <div class="header_btn search_btn google_wrap jb_cover">

                                <a href="#">login with pinterest <i class="fab fa-pinterest-p"></i></a>

                            </div>
                            <div class="jp_regis_center_tag_wrapper jb_register_red_or">
                                <h1>OR</h1>
                            </div>
                        </div>
                        <div class="login_form_wrapper signup_wrapper">
                            <h2>Emploer Sign Up</h2>
                            <form className="form" onSubmit={ e=>onSubmit(e) }>
                            <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="name" id="name" value={name} onChange={ e=>onChange(e) } placeholder="Name*" />
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="companyName" id="companyName" value={companyName} onChange={ e=>onChange(e) } placeholder="Company Name*" />
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="email" id="email" value={email} onChange={ e=>onChange(e) } placeholder="Email Address*" />
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="mobileNo" id="mobileNo" value={mobileNo} onChange={ e=>onChange(e) } placeholder="Mobile No*" />
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="form-group icon_form comments_form">
                                    <input type="password" class="form-control require" name="password" id="password" value={password} onChange={ e=>onChange(e) } placeholder="Password *" />
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div class="login_remember_box">
                                    <label class="control control--checkbox">Remember me
                                        <input type="checkbox" />
                                        <span class="control__indicator"></span>
                                    </label>
                                    <a href="#" class="forget_password">
                                        Forgot Password
                                    </a>
                                </div>
                                <div class="header_btn search_btn login_btn jb_cover">
                                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                                </div>
                            </form>
                            <div class="dont_have_account jb_cover">
                                <p>Don’t have an acount ? <Link to={"/login"}>login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
   <Footer />
    </>)
}
export default EmployerSignIns