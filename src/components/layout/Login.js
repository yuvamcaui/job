import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Login } from '../../store/action/LoginAction';
import Header2 from "./Header2";
import Footer from "./Footer";
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const LoginForm = () =>{

    const history = useNavigate()

    const dispatch = useDispatch()

    const selector = useSelector(state => state.LoginReducer);   

    const [formData,setFormData] = useState({
        mobileNo: '',
        password :''
    });


    const { mobileNo,password} = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit= async e =>{
        e.preventDefault();
        console.log(formData)
        dispatch(Login(mobileNo,password , history))       

    };   

    return(<div>
        <div class="cursor"></div> 
        <Header2 />         
            <div class="page_title_section">

                <div class="page_header">
                    <div class="container">
                        <div class="row">                 
                            <div class="col-lg-9 col-md-8 col-12 col-sm-7">

                                <h1>login</h1>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                                <div class="sub_title_section">
                                    <ul class="sub_title">
                                        <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                        <li>login</li>
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
                                    <img src={logo} alt="logo"  className="background-img"/>
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
                                <div class="login_form_wrapper">
                                    <h2>login</h2>
                                    <form className="form" onSubmit={ e=>onSubmit(e) }>
                                        <div class="form-group icon_form comments_form">

                                            <input type="text" class="form-control require" name="mobileNo"  id="mobileNo"  value={mobileNo} onChange={ e=>onChange(e) } placeholder="Email Address*" />
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="form-group icon_form comments_form">

                                            <input type="password" class="form-control require" name="password" id="password"  value={password} onChange={ e=>onChange(e) } placeholder="Password *" />
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
                                           <input type="submit" className="btn btn-primary" value="Login" />
                                            {/* <a href="#">login</a> */}
                                        </div>
                                    </form>
                                    <div class="dont_have_account jb_cover">
                                        <p>Don’t have an acount ? <Link to="/employe-sign">Sign up</Link></p>                                      
                                    </div>
                                    <div class="dont_have_account jb_cover">
                                        <p>Don’t have an acount ? <Link to="/employer-sign">Employer Sign up</Link></p>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
    <Footer />
    </div>)



}
export default LoginForm