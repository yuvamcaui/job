import axios from 'axios';

import { EMPLOYE_PROFILE_UPDATE,EMPLOYE_PROFILE_UPDATE_SUCCESS,EMPLOYE_PROFILE_UPDATE_FAIL } from  "../type/types";

import { Url, saveTokenInLocalStorage , getTokenLocalStorage, userLoginData } from '../../utils/Common';

// Employee Profile Update
export const EmployeeProfileUpdate = ( formData) => async dispatch =>{
    
    const token = getTokenLocalStorage();

    console.log(JSON.stringify(formData))

    const headers = {"x-auth-header" : `${token}`, 'content-type': 'multipart/form-data'}

      
    axios.put(`${Url}member`,formData, {headers}).then((response)=>{
        console.log(JSON.stringify(response.data))
        if(response.data){                 
            userLoginData(response?.data?.data)
        }
        dispatch({
            payload : response,
            type : EMPLOYE_PROFILE_UPDATE
        })
    }).catch((err)=>{
        dispatch({
            payload : err,
            type : EMPLOYE_PROFILE_UPDATE_FAIL
        })
    }) 
}