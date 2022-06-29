
import { EMPLOYE_PROFILE_UPDATE,EMPLOYE_PROFILE_UPDATE_SUCCESS,EMPLOYE_PROFILE_UPDATE_FAIL } from  "../type/types";

const initialState = {  
    loading : true,
    payload:[],
    error:{}
}
// Bind Country
export const EmployeReducer = ( state = initialState , action ) =>{
    const {type , payload} = action;
    switch(type){
        case EMPLOYE_PROFILE_UPDATE :
            return{
                ...state,            
                loading:false,
                payload:payload
            }     

        case EMPLOYE_PROFILE_UPDATE_FAIL:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }

        default:
                return state;
    }
}