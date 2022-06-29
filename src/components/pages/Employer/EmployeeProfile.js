import React, { useEffect, useState } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import { useDispatch,useSelector } from 'react-redux';
import { getCountryData } from '../../../store/action/BindAction';
import { EmployeeProfileUpdate } from '../../../store/action/EmployeAction';
import { getTokenLocalUserStorage } from '../../../utils/Common';
import { Link } from 'react-router-dom'
import Header2 from '../../layout/Header2';
import Footer from '../../layout/Footer';


const EmployeeProfile = () =>{

    const dispatch = useDispatch()

    const selector = useSelector(state=>state.BindReducer)

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ type: "audio/wav"  });

    const [localData,setLocalData] = useState(getTokenLocalUserStorage())

    const [ country,setCountry ] = useState([])

    const [ state, setState ] = useState([])

    const [city,setCity] = useState([])

    const [gender,setGender] = useState([])   


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
        
        console.log(`Json form Data - ${ JSON.stringify(formData) }`)

        dispatch(EmployeeProfileUpdate(formData));    

    };   

    useEffect(()=>{

        dispatch(getCountryData())       

        setCountry(selector?.country?.data?.data?.length > 0 && selector?.country?.data?.data)

        setState(selector?.state?.data?.data?.length > 0 && selector?.state?.data?.data)

        setCity(selector?.city?.data?.data?.length > 0 && selector?.city?.data?.data)

        setGender(selector?.gender?.data?.data?.length > 0 && selector?.gender?.data?.data)
      
    },[])

    // console.log(JSON.stringify(selector))

    return(<>
    <Header2/>
        <div className='container'>
            <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-12 col-lg-12'>
            <form className="form" onSubmit={ e=>onSubmit(e) }>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" aria-describedby="name" name="name" id="name" value={name} onChange={ e=>onChange(e) } placeholder="Enter Your Name" />
                            </div>
                    </div> 
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="mobileNo">MobileNo</label>
                                <input type="text" class="form-control" id="mobileNo"  name='mobileNo'  value={ mobileNo } onChange={ e =>onChange(e) } aria-describedby="mobileHelp" placeholder="Enter Your Mobile No" />
                            </div>
                    </div>                   
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" name="email" id="email"   value={ email } onChange={ e =>onChange(e) } aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                    </div> 

                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="doB">Date Of Birth</label>
                                <input type="date" class="form-control" name='doB' id="doB" value={ doB } onChange={ e =>onChange(e) }  aria-describedby="dobHelp" placeholder="DOB" />
                            </div>
                    </div> 
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="sel1">Gender</label>
                                <select class="form-control" id="genderId" name='genderId' value={genderId} onChange={ e => onChange(e) } >
                                        <option value=""> Select Gender </option>
                                    {
                                        gender.length > 0 ? gender?.map((genderData,index)=>{
                                            return  <option value={ genderData._id }> { genderData.genderName } </option>
                                        }) : (<option value="male"> Male </option>)
                                    }                     
                                </select>
                            </div>
                    </div> 
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="AadharNo">Aadhar No</label>
                                <input type="text" class="form-control" name="aadharNo" id="aadharNo" value={ aadharNo } onChange={ e =>onChange(e) } aria-describedby="Aadhar No" placeholder="Enter Your Aadhar No" />
                            </div>
                    </div> 


                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="sel1">Country</label>
                                <select class="form-control" id="countryId" name='countryId'  value={countryId} onChange={ e => onChange(e) } >
                                <option value=""> Select Country </option>
                                  {
                                    country.length > 0 && country?.map((countryData,index)=>{
                                        return <option value={ countryData._id }> { countryData.countryName } </option>
                                    })
                                  }                           
                                </select>
                            </div>
                    </div> 
                    
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="sel1">State</label>
                                <select class="form-control" id="stateId" name='stateId' value={stateId} onChange={ e => onChange(e) }>
                                <option value=""> Select State </option>
                                  {
                                    state.length > 0 && state?.map((stateData,index)=>{
                                        return <option value={ stateData._id }> { stateData.stateName } </option>
                                    })
                                  }                           
                                </select>
                            </div>
                    </div>                    

                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                            <div class="form-group">
                                <label for="sel1">City</label>
                                <select class="form-control" id="cityId" name='cityId' value={cityId} onChange={ e => onChange(e) }>
                                <option value=""> Select City </option>
                                {
                                    city.length > 0 && city?.map((cityData,index)=>{
                                        return <option value={ cityData._id }> { cityData.cityName } </option>
                                    })
                                }                                   
                                </select>
                            </div>
                    </div> 

                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                            <div class="form-group">
                                <label for="Address">Address</label>
                                <textarea class="form-control" rows="5" name='address' id="address" value={ address } onChange={ e =>onChange(e) } ></textarea>
                            </div>
                    </div> 

                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                            <div class="form-group">
                                <label for="skill-category">Skills Category</label>
                                <textarea class="form-control" rows="5" name='skillCategory' id="skillCategory" value={ skillCategory } onChange={ e =>onChange(e) } ></textarea>
                            </div>
                    </div> 

                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                            <div class="form-group">
                                <label for="skill-category">Skills Category</label>
                                <input type="file" name="audiopath" id="ausiopath" />
                            </div>
                    </div>                    
                    {/* <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                        <div>
                            <p>{status}</p>
                            <button onClick={startRecording}>Start Recording</button>
                            <button onClick={stopRecording}>Stop Recording</button>
                            <video src={mediaBlobUrl} controls autoPlay loop />
                        </div>
                    </div>                     */}
                </div>
                             
                    <button type="submit" class="btn btn-primary">Update</button>
                    </form>

            </div>
            </div>
        </div>
    <Footer />
    </>)



}
export default EmployeeProfile