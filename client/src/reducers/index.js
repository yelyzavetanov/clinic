import { combineReducers } from 'redux';
import patientsReducer from './patientsSlice';

const rootReducer = combineReducers({
    patient: patientsReducer
});

export default rootReducer;