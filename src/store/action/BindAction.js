import axios from 'axios';

import { BIND_TABLE_COUNTRY , BIND_TABLE_STATE, BIND_TABLE_CITY , BIND_TABLE_GENDER ,BIND_TABLE_ERROR } from  "../type/types";

import { Url, saveTokenInLocalStorage } from '../../utils/Common';

//Get Bind table Data
export const getCountryData = () => async dispatch =>{

    const token = localStorage.getItem('token');

    const headers = {"x-auth-header" : `${token}`}
    
    const bindtable = [{
        url : "country",
        type : BIND_TABLE_COUNTRY
    },
    {
        url : "state",
        type : BIND_TABLE_STATE
    },
    {
        url : "country",
        type : BIND_TABLE_COUNTRY
    },
    {
        url : "city",
        type : BIND_TABLE_CITY
    },
    {
        url : "gender",
        type : BIND_TABLE_GENDER
    }
  ]

    bindtable.map((data)=>{

        axios.get(`${Url}${ data.url }`,{headers}).then((response)=>{      
            dispatch({
                payload : response,
                type : data.type
            })
        }).catch((err)=>{
            dispatch({
                payload : err,
                type : BIND_TABLE_ERROR
            })
        })   


    })
    
   
}