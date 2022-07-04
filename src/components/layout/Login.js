import React,{ useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Login } from '../../store/action/LoginAction';
import Header2 from "./Header2";
import Footer from "./Footer";
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const LoginForm = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useNavigate()

    const dispatch = useDispatch()

    const selector = useSelector(state => state.LoginReducer);   

    const [formData,setFormData] = useState({
        mobileNo: '',
        password :''
    });


    const { mobileNo,password} = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit = data => {        

        dispatch(Login(mobileNo,password , history))           
    };

    // const onSubmit= async e =>{
    //     e.preventDefault();
    //     console.log(formData)
    //     dispatch(Login(mobileNo,password , history))       

    // };   

    return(<div>
        <div className="cursor"></div> 
        <Header2 />         
            <div className="page_title_section">

                <div className="page_header">
                    <div className="container">
                        <div className="row">                 
                            <div className="col-lg-9 col-md-8 col-12 col-sm-7">

                                <h1>login</h1>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 col-sm-5">
                                <div className="sub_title_section">
                                    <ul className="sub_title">
                                        <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                        <li>login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
   
            <div className="login_wrapper jb_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="login_top_box jb_cover">
                                <div className="login_banner_wrapper">
                                    <img src={logo} alt="logo"  className="background-img"/>
                                    <div className="header_btn search_btn facebook_wrap jb_cover">

                                        <a href="#">login with facebook <i className="fab fa-facebook-f"></i></a>

                                    </div>
                                    <div className="header_btn search_btn google_wrap jb_cover">

                                        <a href="#">login with pinterest <i className="fab fa-pinterest-p"></i></a>

                                    </div>
                                    <div className="jp_regis_center_tag_wrapper jb_register_red_or">
                                        <h1>OR</h1>
                                    </div>
                                </div>
                                <div className="login_form_wrapper">
                                    <h2>login</h2>
                                    <form className="form" onSubmit={handleSubmit(onSubmit)} >
                                        {  errors?.mobileNo && <label class="control-label error-alert" for="inputError">Please Fill Valid Mobile No</label> }
                                        <div className="form-group icon_form comments_form">                                           
                                            <input type="text" className="form-control  require" name="mobileNo"  id="mobileNo"  {...register("mobileNo", {required: true, minLength: 10, maxLength: 10,})}  value={mobileNo} onChange={ e=>onChange(e) } placeholder="Mobile No" />                                          
                                        </div>
                                        {  errors?.password && <label class="control-label error-alert" for="inputError">Please Fill Valid Password</label> }
                                        <div className="form-group icon_form comments_form">
                                            <input type="password" className="form-control require" name="password" id="password" {...register("password", {required: true, minLength: 6 })}  value={password} onChange={ e=>onChange(e) } placeholder="Password *" />                                          
                                        </div>
                                        <div className="login_remember_box">
                                            <label className="control control--checkbox">Remember me
                                                <input type="checkbox" />
                                                <span className="control__indicator"></span>
                                            </label>
                                            <a href="#" className="forget_password">
                                                Forgot Password
                                            </a>
                                        </div>
                                        <div className="header_btn search_btn login_btn jb_cover">
                                           <input type="submit" className="btn btn-primary" value="Login" />
                                            {/* <a href="#">login</a> */}
                                        </div>
                                    </form>
                                    <div className="dont_have_account jb_cover">
                                        <p>Don’t have an acount ? <Link to="/employe-sign">Sign up</Link></p>                                      
                                    </div>
                                    <div className="dont_have_account jb_cover">
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