import React, { useState } from 'react';
import Header2 from '../../layout/Header2';
import Header from './Header';
import { getTokenLocalUserStorage } from '../../../utils/Common';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DraftsIcon from '@mui/icons-material/Drafts';
import Navigation from './Navigation';
import Information from './Information';
import Profile from './Profile';
import AppliedJob from './AppliedJob';
import PostJob from './PostJob';
const ProfileMen = require("../../../assets/images/icon/profile-men.jpg")




const Dashboard = () =>{

    const [ active, setActive ] = useState(1)

    const [localData,setLocalData] = useState(getTokenLocalUserStorage());

    console.log(`Local Data - ${ JSON.stringify(localData) }`)

    const [formData, setFormData] = useState({
        _id:localData._id ? localData._id  : 1,
        memberType: localData.memberType ? localData.memberType  : 1,
        companyName: localData.companyName ? localData.companyName : "",
        name : localData.name ? localData.name  :  "Candidate Name",  
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

    const { memberType,name,companyName,email,password,mobileNo,industryId,companyTypeId,packageId,noOfEmployees,website,gstIn,logo,verification,referCode,referredCode,countryId,stateId,cityId,address,pinCode,status,establishmentYear,latitude,longitude,social} = formData;


    const dashBoardActive = (data) =>{
        setActive(data)
    }    

    return(<>
            <Header2 />
            <Header />          
            <div className="candidate_dashboard_wrapper jb_cover">
                <div className="container">
                    <div className="row">
                        <Navigation  activeScreeen={ dashBoardActive } active={ active } name={name}/>                        
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12">                            {
                                active === 1 ? <Information formData={ formData } /> : active ===2 ? <Profile /> :  <PostJob />
                            }    
                        </div>
                    </div>
                </div>
            </div>    
    </>)


}

export default Dashboard