import axios from 'axios';

import { JOB_POST_INSERT, JOB_POST_UPDATE, JOB_POST_VIEW, JOB_POST_FAIL } from  "../type/types";

import { Url, saveTokenInLocalStorage , getTokenLocalStorage, userLoginData } from '../../utils/Common';

// Job Post Insert
export const JobPostUpdate = ( formData) => async dispatch =>{
    
    const token = getTokenLocalStorage();

    const headers = {"x-auth-header" : `${token}`}
      
    axios.post(`${Url}job`,formData, {headers}).then((response)=>{        
        dispatch({
            payload : response,
            type    : JOB_POST_INSERT
        })
    }).catch((err)=>{
        dispatch({
            payload : err,
            type    : JOB_POST_FAIL
        })
    }) 
}