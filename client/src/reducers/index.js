import { combineReducers } from 'redux';
import patientsSlice from "./patientsSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
    patient: patientsSlice,
    user: usersSlice,
});

export default rootReducer;