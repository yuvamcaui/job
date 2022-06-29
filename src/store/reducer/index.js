import { combineReducers } from 'redux';

import {LoginReducer} from './LoginReducer';
import { BindReducer } from './BindReducer';
import { EmployeReducer } from './EmployeeReducer';

export default combineReducers({
    LoginReducer, BindReducer, EmployeReducer
});