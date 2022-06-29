export const Url = "http://134.209.148.62:5000/api/";
//Local Storage  - Token
export function saveTokenInLocalStorage(tokenDetails) {   
     localStorage.setItem('token',tokenDetails);
}
//Local Storage - User
export const userLoginData =(memberData)=>{  
     localStorage.setItem("user",JSON.stringify(memberData))
}
// Local Storage User Get
export const getTokenLocalUserStorage =()=>{     
     return JSON.parse(localStorage.getItem('user'));
}
// Local Storage Get
export const getTokenLocalStorage =()=>{     
     return localStorage.getItem('token');
}
//export Local Storage Remove
export const localStorageRemove = () =>{
          localStorage.removeItem("token")
          localStorage.removeItem("user")
     return "Success"
}