
import { EMPLOYER_PROFILE_UPDATE,EMPLOYER_PROFILE_UPDATE_SUCCESS,EMPLOYER_PROFILE_UPDATE_FAIL } from  "../type/types";

const initialState = {  
    loading : true,
    payload:[],
    error:{}
}
// Bind Country
export const EmployerReducer = ( state = initialState , action ) =>{
    const {type , payload} = action;
    switch(type){
        case EMPLOYER_PROFILE_UPDATE :
            return{
                ...state,            
                loading:false,
                payload:payload
            }     

        case EMPLOYER_PROFILE_UPDATE_FAIL:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }

        default:
                return state;
    }
}