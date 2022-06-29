import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageRemove } from '../../utils/Common';
import Home from './Home';

export const LogOut = () =>{

    const history = useNavigate();

    const response = localStorageRemove(history);

    useEffect(()=>{
        history("/")
    },[])    
}