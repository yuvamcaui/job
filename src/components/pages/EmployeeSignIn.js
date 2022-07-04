import React, {useState}  from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EmployeSignIn } from '../../store/action/LoginAction';
import Header2 from "../layout/Header2";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const EmployeeSignIn = () =>{

    const history = useNavigate()

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const selector = useSelector(state => state.LoginReducer);   

    const [formData,setFormData] = useState({
        name        : '',
        mobileNo    : '',
        password    :''
    });


    const { name,mobileNo,password} = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit = data => {        

        dispatch(EmployeSignIn(name, mobileNo,password , history))      
    };   

return(<>     
   <Header2 />
    <div class="page_title_section">
        <div class="page_header">
            <div class="container">
                <div class="row">                  
                    <div class="col-lg-9 col-md-8 col-12 col-sm-7">

                        <h1>sign up</h1>
                    </div>
                    <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                        <div class="sub_title_section">
                            <ul class="sub_title">
                                <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                <li>sign up</li>
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
                            <h2>sign up</h2>
                            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                                {  errors?.name && <label class="control-label error-alert" for="inputError">Please Fill Valid Name</label> }
                                <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="name" id="name" {...register("name", {required: true, minLength: 3, maxLength: 40,})} value={name} onChange={ e=>onChange(e) } placeholder="Name*" />
                                    <i class="fas fa-user"></i>
                                </div>
                                {  errors?.mobileNo && <label class="control-label error-alert" for="inputError">Please Fill Valid Mobile No</label> }
                                <div class="form-group icon_form comments_form">
                                    <input type="text" class="form-control require" name="mobileNo" id="mobileNo"  {...register("mobileNo", {required: true, minLength: 10, maxLength: 10,})} value={mobileNo} onChange={ e=>onChange(e) } placeholder="Mobile No*" />
                                    <i class="fas fa-envelope"></i>
                                </div>
                                {  errors?.password && <label class="control-label error-alert" for="inputError">Please Fill Valid Password</label> }
                                <div class="form-group icon_form comments_form">
                                    <input type="password" class="form-control require" name="password" id="password" {...register("password", {required: true, minLength: 6 })} value={password} onChange={ e=>onChange(e) } placeholder="Password *" />
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

export default EmployeeSignIn