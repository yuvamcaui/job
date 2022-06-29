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
const ProfileMen = require("../../../assets/images/icon/profile-men.jpg")




const Dashboard = () =>{

    const [ active, setActive ] = useState(1)

    const [localData,setLocalData] = useState(getTokenLocalUserStorage());

    const [formData, setFormData] = useState({
        _id:localData._id ? localData._id  : 1,
        memberType: localData.memberType ? localData.memberType  : 1,
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

    const { name,mobileNo,email, doB ,genderId ,aadharNo,countryId,stateId, cityId,address,pinCode, skillCategory,audioPath} = formData;


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
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                            {
                                active === 1 ? <Information formData={ formData } /> : active ===2 ? <Profile /> :  <AppliedJob />
                            }    
                        </div>
                    </div>
                </div>
            </div>    
    </>)


}

export default Dashboard