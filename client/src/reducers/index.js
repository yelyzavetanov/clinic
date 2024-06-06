import { combineReducers } from 'redux';
import patientsSlice from "./patientsSlice";
import usersSlice from "./usersSlice";
import clinicSlice from "./clinicSlice";

const rootReducer = combineReducers({
    patient: patientsSlice,
    user: usersSlice,
    clinic: clinicSlice
});

export default rootReducer;