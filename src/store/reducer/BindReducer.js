import {  BIND_TABLE_COUNTRY , BIND_TABLE_STATE, BIND_TABLE_CITY , BIND_TABLE_GENDER , BIND_TABLE_ERROR } from  "../type/types";

const initialState = {  
    loading : true,
    country : [],
    state :[],
    city:[],
    gender : [],
    error:{}
}
// Bind Country
export const BindReducer = ( state = initialState , action ) =>{
    const {type , payload} = action;
    switch(type){
        case BIND_TABLE_COUNTRY :
            return{
                ...state,            
                loading:false,
                country:payload
            }

        case BIND_TABLE_STATE:
            return{
                ...state,
                loading:false,
                state:payload
            }
        case BIND_TABLE_CITY:
            return{
                ...state,
                loading: false,
                city:payload
            }
        case BIND_TABLE_GENDER:
            return{
                ...state,
                loading:false,
                gender:payload
            }

        case BIND_TABLE_ERROR:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }

        default:
                return state;
    }
}