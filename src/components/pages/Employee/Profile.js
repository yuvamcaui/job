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
        mobileNo:localData.mobileNo ? localData.mobileNo  :  "",  
        email : localData.email ? localData.email  :  "",  
        doB:localData.doB ? localData.doB  :  "",  
        genderId:localData.genderId ? localData.genderId  :  "",  
        aadharNo:localData.aadharNo ? localData.aadharNo  :  "",      
        countryId:localData.countryId ? localData.countryId  :  "",  
        stateId:localData.stateId ? localData.stateId  :  "",  
        cityId:localData.cityId ? localData.cityId  :  "",  
        address:localData.address ? localData.address  :  "",  
        pinCode:localData.pinCode ? localData.pinCode  :  "",  
        skillCategory:localData.skillCategory ? localData.skillCategory  :  "",  
        audioPath:localData.audioPath ? localData.audioPath  :  "",  
    })

    const { name,mobileNo,email, doB ,genderId ,aadharNo,countryId,stateId, cityId,address,pinCode, skillCategory,audioPath} = formData;

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit= async e =>{
        e.preventDefault();    
        
        // let body   = new FormData();

        // body.append('_id',localData._id)
        // body.append('memberType',1)
        // body.append('name',name)
        // body.append('mobileNo',mobileNo)
        // body.append('email ',email)
        // body.append('doB ',doB)
        // body.append('genderId ',genderId)
        // body.append('aadharNo',aadharNo)
        // body.append('countryId',countryId)
        // body.append('stateId ',stateId)
        // body.append('cityId',cityId)
        // body.append('address',address)
        // body.append('pinCode ',pinCode)
        // body.append('skillCategory',skillCategory ? skillCategory : "")
        // body.append('audioPath',file)
        // body.append('names','karthi')

        // const token = getTokenLocalStorage();

        // console.log(JSON.stringify(body))
    
        // const headers = {"x-auth-header" : `${token}`, 'content-type': 'multipart/form-data'}

        // console.log(`Headers - ${ JSON.stringify(headers) }`)
    
          
    //     axios.put(`${Url}member`,body,headers).then((response)=>{
    //         console.log(JSON.stringify(response.data))
    //         if(response.data){                 
    //             userLoginData(response?.data?.data)
    //         }
    //         // dispatch({
    //         //     payload : response,
    //         //     type : EMPLOYE_PROFILE_UPDATE
    //         // })
    //     }).catch((err)=>{
    //         // dispatch({
    //         //     payload : err,
    //         //     type : EMPLOYE_PROFILE_UPDATE_FAIL
    //         // })
    //     }) 

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
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form className="form"  enctype="multipart/form-data" onSubmit={ e=>onSubmit(e) }>
                            <div className="job_listing_left_fullwidth jb_cover">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="jp_job_post_side_img">
                                            <img src={ProfileMen} alt="post_img" height={92} width={92} />
                                        </div>
                                        <div className="jp_job_post_right_cont edit_profile_wrapper">
                                            <h4>Profile Picture</h4>
                                            <div className="width_50">
                                                <input type="file" id="input-file-now-custom-233" className="dropify" data-height="90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="jp_job_post_side_img">
                                            <img src={mic} alt="post_img" />

                                        </div>
                                        <div className="jp_job_post_right_cont edit_profile_wrapper">
                                            <h4>Audio Resume</h4>
                                            <div className="width_50">
                                                <input type="file" ref={el} onChange={ handleChange } className="dropify" data-height="90" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="browse_img_banner jb_cover">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Name</label>
                                            <input type="text" name="name" id="name" value={name} onChange={ e=>onChange(e) }  />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Mobile No</label>
                                            <input type="text" name='mobileNo'  value={ mobileNo } onChange={ e =>onChange(e) } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Email </label>
                                            <input type="email" name='email' id="email"   value={ email } onChange={ e =>onChange(e) } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Date of Birth </label>
                                            <input type="date" name='doB' id="doB" value={ doB } onChange={ e =>onChange(e) }  />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="select_box_form">
                                                <label>Gender</label>
                                                <select className='select-style-data'  id="genderId" name='genderId' value={genderId} onChange={ e => onChange(e) }>
                                                <option value=""> Select Gender </option>
                                                    {
                                                        gender.length > 0 ? gender?.map((genderData,index)=>{
                                                            return  <option value={ genderData._id }> { genderData.genderName } </option>
                                                        }) : (<option value="male"> Male </option>)
                                                    }         
                                                </select>
                                           </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Aadhar No </label>
                                            <input type="text" name="aadharNo" id="aadharNo" value={ aadharNo } onChange={ e =>onChange(e) } aria-describedby="Aadhar No" />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Address</label>
                                            <input type="text" name="address" />
                                        </div>
                                    </div> */}

                                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="select_box">
                                            <label>Educational Qualification</label>
                                            <select>
                                                <option>UG</option>
                                                <option>PG</option>
                                                <option>Diplomo</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Degree</label>
                                            <input type="text" name="address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="select_box">
                                            <label>skills</label>
                                            <select multiple>
                                                <option>Marketing</option>
                                                <option>Nursing</option>
                                                <option>Driving</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Experience</label>
                                            <input type="text" name="address" />
                                        </div>
                                    </div> */}
                                  
                                  
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
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							{/* <div className="browse jb_cover">
                             <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="job_filter_category_sidebar jb_cover">
                                        <div className="job_filter_sidebar_heading jb_cover">
                                            <h1> password & security</h1>
                                        </div>
                                        <div className="job_overview_header jb_cover">
                                            <div className="row">
                                           
                                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="contect_form3">
                                                        <label>current pasword</label>
                                                        <input type="password" name="password" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="contect_form3">
                                                        <label>new pasword</label>
                                                        <input type="password" name="password" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                    <div className="contect_form3">
                                                        <label> repeat new pasword</label>
                                                        <input type="password" name="password" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="login_remember_box jb_cover">
                                      
                                        <div className="header_btn search_btn jb_cover">
                                        <button type="submit" class="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </form>
            </div>
    
    </>)


}
export default Profile;