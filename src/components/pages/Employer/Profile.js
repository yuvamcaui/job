import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useReactMediaRecorder } from "react-media-recorder";
import { useDispatch,useSelector } from 'react-redux';
import { getCountryData } from '../../../store/action/BindAction';
import { EmployeeProfileUpdate } from '../../../store/action/EmployeAction';
import { getTokenLocalUserStorage , getTokenLocalStorage, Url , userLoginData} from '../../../utils/Common';
import { Link } from 'react-router-dom'
import Header2 from '../../layout/Header2';
import Footer from '../../layout/Footer';
const ProfileMen = require("../../../assets/images/icon/profile-men.jpg")
const mic = require("../../../assets/images/icon/mic.png")
const Slider1 = require("../../../assets/images/Slider/slide1.png");

const Profile = () =>{

    const dispatch = useDispatch()

    const el                 = useRef();  

    const selector = useSelector(state=>state.BindReducer)

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ type: "audio/wav"  });

    const [localData,setLocalData] = useState(getTokenLocalUserStorage())

    const [ country,setCountry ] = useState([])

    const [ state, setState ] = useState([])

    const [city,setCity] = useState([])

    const [gender,setGender] = useState([])   

    const [file, setFile] = useState(''); 

    const handleChange  = (e)=>{
        const file = e.target.files[0]; // accesing file
        setFile(file);      
    }  

    const [formData, setFormData] = useState({
        _id:localData._id ? localData._id  : 1,
        memberType: localData.memberType ? localData.memberType  : 1,
        name : localData.name ? localData.name  :  "",  
        companyName : localData.companyName ? localData.companyName  :  "",  
        mobileNo:localData.mobileNo ? localData.mobileNo  :  "",  
        email : localData.email ? localData.email  :  "",  
        industryId:localData.industryId ? localData.industryId  :  "",  
        companyTypeId:localData.companyTypeId ? localData.companyTypeId  :  "",  
        packageId:localData.packageId ? localData.packageId  :  "", 
        noOfEmployees:localData.noOfEmployees ? localData.noOfEmployees  :  "", 
        website:localData.website ? localData.website  :  "", 
        gstIn:localData.gstIn ? localData.gstIn  :  "", 
        logo:localData.logo ? localData.logo  :  "",              
        countryId:localData.countryId ? localData.countryId  :  "",  
        stateId:localData.stateId ? localData.stateId  :  "",  
        cityId:localData.cityId ? localData.cityId  :  "",  
        address:localData.address ? localData.address  :  "",  
        pinCode:localData.pinCode ? localData.pinCode  :  "",
        establishmentYear:localData.establishmentYear ? localData.establishmentYear  :  "", 
        establishmentYear:localData.establishmentYear ? localData.establishmentYear  :  "", 
        latitude:localData.latitude ? localData.latitude  :  "", 
        longitude:localData.longitude ? localData.longitude  :  "", 
        social:localData.social ? localData.social  :  "",   
       
    })

    const { memberType,name,companyName,email,mobileNo,industryId,companyTypeId,packageId,noOfEmployees,website,gstIn,logo,verification,referCode,referredCode,countryId,stateId,cityId,address,pinCode,establishmentYear,latitude,longitude,social } = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit= async e =>{
        e.preventDefault(); 
        dispatch(EmployeeProfileUpdate(formData));    

    };   

    useEffect(()=>{

        dispatch(getCountryData())       

        setCountry(selector?.country?.data?.data?.length > 0 && selector?.country?.data?.data)

        setState(selector?.state?.data?.data?.length > 0 && selector?.state?.data?.data)

        setCity(selector?.city?.data?.data?.length > 0 && selector?.city?.data?.data)

        setGender(selector?.gender?.data?.data?.length > 0 && selector?.gender?.data?.data)
      
    },[])


    return(<>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="job_listing_left_fullwidth jb_cover">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="jp_job_post_side_img">
                                            <img src={Slider1} alt="post_img" />

                                        </div>
                                        <div class="jp_job_post_right_cont edit_profile_wrapper">
                                            <h4>Company Logo</h4>

                                            <div class="width_50">
                                                <input type="file" id="input-file-now-custom-233" class="dropify" data-height="90" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="browse_img_banner jb_cover">

                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="contect_form3">
                                            <label>Name</label>
                                            <input type="text" name="name" id="name" value={name} onChange={ e=>onChange(e) } />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="contect_form3">
                                            <label>Email</label>
                                            <input type="email" name="email" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="contect_form3">
                                            <label>Phone</label>
                                            <input type="number" name="number" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="contect_form3">
                                            <label>Website</label>
                                            <input type="email" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="select_box_form">
                                            <label>Industry</label>
                                            <select className='select-style-data' id="countryId" name='countryId' >
                                                    <option>Manufacturing</option>
                                                    <option>Textile</option>
                                                    <option>Trading</option>
                                                    <option>Medical</option>                                                                                        
                                            </select>
                                        </div>
                                    </div>                                   
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="select_box_form">
                                            <label>Company Type</label>
                                            <select className='select-style-data' id="countryId" name='countryId' >
                                                <option>Private Limited</option>
                                                <option>Partnership</option>
                                                <option>MSME</option>                                                                                     
                                            </select>
                                        </div>
                                    </div> 
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="select_box_form">
                                            <label>Company size</label>
                                            <select className='select-style-data' id="countryId" name='countryId' >
                                                <option>1-50</option>
                                                <option>50-100</option>
                                                <option>100-150</option>
                                                <option>150-300</option>                                                                                  
                                            </select>
                                        </div>
                                    </div>                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div class="contect_form3">
                                            <label>GSTIN</label>
                                            <input type="text" name="email"  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="browse jb_cover">
                             <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="job_filter_category_sidebar jb_cover">
                                        <div className="job_filter_sidebar_heading jb_cover">
                                            <h1> Address Details</h1>
                                        </div>
                                        <div className="job_overview_header jb_cover">
                                            <div className="row">
                                           
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <div className="select_box_form">
                                                            <label>Country</label>
                                                            <select className='select-style-data' id="countryId" name='countryId'  value={countryId} onChange={ e => onChange(e) }>
                                                            <option value=""> Select Country </option>
                                                                {
                                                                    country.length > 0 && country?.map((countryData,index)=>{
                                                                        return <option value={ countryData._id }> { countryData.countryName } </option>
                                                                    })
                                                                }                           
                                                            </select>
                                                    </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <div className="select_box_form">
                                                            <label>State</label>
                                                            <select className='select-style-data' id="stateId" name='stateId' value={stateId} onChange={ e => onChange(e) }>
                                                            <option value=""> Select State </option>
                                                                {
                                                                    state.length > 0 && state?.map((stateData,index)=>{
                                                                        return <option value={ stateData._id }> { stateData.stateName } </option>
                                                                    })
                                                                }                           
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">                                 
                                                            <div className="select_box_form" >
                                                                <label>City</label>
                                                                <select className='select-style-data' id="cityId" name='cityId' value={cityId} onChange={ e => onChange(e) }>
                                                                <option value=""> Select City </option>
                                                                    {
                                                                        city.length > 0 && city?.map((cityData,index)=>{
                                                                            return <option value={ cityData._id }> { cityData.cityName } </option>
                                                                        })
                                                                    }                                   
                                                                </select>
                                                        </div>
                                                    </div>                                                  
                                                
                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <div className="contect_form3">
                                                            <label>Pincode</label>
                                                            <input type="text" name="pinCode"  id="pinCode" value={pinCode} onChange={ e=>onChange(e) } />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <div className="contect_form3">
                                                            <label>Address </label>
                                                            <textarea cols={40} rows={5} name='address' id="address" value={ address } onChange={ e =>onChange(e) }></textarea>
                                                        </div>
                                                    </div>  
                                                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <div class="contect_form3">
                                                            <label>Establishment Year</label>
                                                            <input type="text" name="name" />
                                                        </div>
                                                    </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="job_filter_category_sidebar jb_cover">
                                        <div class="job_filter_sidebar_heading jb_cover">
                                            <h1> social networks</h1>
                                        </div>
                                        <div class="job_overview_header jb_cover">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div class="contect_form3">
                                                        <label>google</label>
                                                        <input type="email" name="email" placeholder="https://google.com" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div class="contect_form3">
                                                        <label>facebook</label>
                                                        <input type="email" name="email" placeholder="https://www.facebook.com" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div class="contect_form3">
                                                        <label>twitter</label>
                                                        <input type="email" name="email" placeholder="https://www.twitter.com" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div class="contect_form3">
                                                        <label>linkedin</label>
                                                        <input type="email" name="email" placeholder="https://www.linkedin.com" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="login_remember_box jb_cover">
                                         <div class="header_btn search_btn jb_cover">

                                            <a href="#">save changes</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>                
    </>)


}
export default Profile;