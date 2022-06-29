import axios from 'axios';

import { AUTH_ERROR ,LOGIN_SUCCESS ,LOGIN_FAIL  , REGISTER_SUCCESS ,REGISTER_FAIL, CLEAR_PROFILE ,LOGOUT } from  "../type/types";

import { Url, saveTokenInLocalStorage , userLoginData } from '../../utils/Common';

// Login Verification
export const Login = (mobileNo, password , history) => async dispatch =>{

    const formData = {
        mobileNo : mobileNo,
        password : password
    }  
    axios.post(`${Url}auth`,formData).then((response)=>{

        console.log(`Response Data - ${ JSON.stringify(response.data) }`)

        if(response.data){                 
            saveTokenInLocalStorage(response?.data?.data?.token)
            userLoginData(response?.data?.data?.member)
        }    
        dispatch({
            payload : response,
            type : LOGIN_SUCCESS
        })
        history("/")
    }).catch((err)=>{
        dispatch({
            payload : err,
            type : LOGIN_FAIL
        })
    })   
}

// Employee Sign In
export const EmployeSignIn = ( name, mobileNo, password, history) => async dispatch =>{
    const formData = {
        memberType: 1,
        name     : name,
        mobileNo : mobileNo,
        password : password
    }  
    axios.post(`${Url}member`,formData).then((response)=>{
        if(response.data){                 
            saveTokenInLocalStorage(response?.data?.data?.token)
            userLoginData(response?.data?.data?.member)
        }
        dispatch({
            payload : response,
            type : LOGIN_SUCCESS
        })
        history("/")
    }).catch((err)=>{
        dispatch({
            payload : err,
            type : LOGIN_FAIL
        })
    }) 
}

// Employeer Sign In
export const EmployerSignIn = ( name, companyName, email, mobileNo, password, history) => async dispatch =>{
    const formData = {
        name            : name,
        memberType      : 2,
        companyName     : companyName,
        email           : email,
        mobileNo        : mobileNo,
        password        : password
    }  
   
    axios.post(`${Url}member/employer`,formData).then((response)=>{
        if(response.data){                 
            saveTokenInLocalStorage(response?.data?.data?.token)
            userLoginData(response?.data?.data?.member)
        }
        dispatch({
            payload : response,
            type : LOGIN_SUCCESS
        })
        history("/")
    }).catch((err)=>{
        dispatch({
            payload : err,
            type : LOGIN_FAIL
        })
    }) 
}