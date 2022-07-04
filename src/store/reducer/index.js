import { combineReducers } from 'redux';
import {LoginReducer} from './LoginReducer';
import { BindReducer } from './BindReducer';
import { EmployeReducer } from './EmployeeReducer';
import { EmployerReducer } from './EmployerReducer';
import { JobReducer } from './JobReducer';

export default combineReducers({
    LoginReducer, BindReducer, EmployeReducer , EmployerReducer, JobReducer
});