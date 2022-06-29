import { AUTH_ERROR ,USER_LOADED, REGISTER_SUCCESS ,LOGIN_SUCCESS ,LOGIN_FAIL  ,CLEAR_PROFILE ,LOGOUT } from  "../type/types";

const initialState = {
    token : localStorage.getItem('token'),
    isAuthendicated : null,
    loading : true,
    payload : []
}

export const LoginReducer = ( state = initialState , action ) =>{
    const {type , payload} = action;
    switch(type){
        case USER_LOADED :
            return{
                ...state,
                isAuthendicated:true,
                loading:false,
                user:payload
            }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :           
            return{
                ...state,
                ...payload,
                isAuthendicated:true,
                loading:false
            }
            // case REGISTER_FAIL :
            // case AUTH_ERROR :
            // case LOGIN_FAIL :
            // case LOGOUT:
            // case ACCOUNT_DELETE :
            //     localStorage.removeItem('token');
            //     return{
            //         ...state,
            //         token:null,
            //         isAuthendicated:false,
            //         loading:false
            //     }
            default:
                return state;

    }

}