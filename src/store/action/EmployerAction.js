import axios from 'axios';

import { EMPLOYER_PROFILE_UPDATE,EMPLOYER_PROFILE_UPDATE_SUCCESS,EMPLOYER_PROFILE_UPDATE_FAIL } from  "../type/types";

import { Url, saveTokenInLocalStorage , getTokenLocalStorage, userLoginData } from '../../utils/Common';

// Employee Profile Update
export const EmployerProfileUpdate = ( formData) => async dispatch =>{
    
    const token = getTokenLocalStorage();

    // console.log(JSON.stringify(formData));

    const headers = {"x-auth-header" : `${token}`, 'content-type': 'multipart/form-data'}
            
    axios.put(`${Url}member/employer`,formData, {headers}).then((response)=>{
        console.log(JSON.stringify(response.data))
        if(response.data){                 
            userLoginData(response?.data?.data)
        }
        dispatch({
            payload : response,
            type : EMPLOYER_PROFILE_UPDATE
        })
    }).catch((err)=>{
        dispatch({
            payload : err,
            type : EMPLOYER_PROFILE_UPDATE_FAIL
        })
    }) 
}