import { JOB_POST_INSERT, JOB_POST_UPDATE, JOB_POST_VIEW, JOB_POST_FAIL } from  "../type/types";

const initialState = {  
    loading : true,
    payload:[],
    error:{}
}
// Job Insert
export const JobReducer = ( state = initialState , action ) =>{
    const {type , payload} = action;
    switch(type){
        case JOB_POST_INSERT :
            return{
                ...state,            
                loading:false,
                payload:payload
            }     

        case JOB_POST_FAIL:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }

        default:
                return state;
    }
}